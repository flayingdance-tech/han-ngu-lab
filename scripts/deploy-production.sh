#!/usr/bin/env bash
# Run as ubuntu, from the existing checkout. Never sources the SMTP environment.
set -Eeuo pipefail
umask 077
export GIT_TERMINAL_PROMPT=0 GIT_TRACE=0 GCM_TRACE=0
export GIT_SSH_COMMAND='ssh -o BatchMode=yes -o StrictHostKeyChecking=yes -o ConnectTimeout=10'
TARGET=${1:?Usage: bash scripts/deploy-production.sh FULL_COMMIT_SHA [VERIFIED_GIT_BUNDLE]}
BUNDLE=${2:-}
[[ "$TARGET" =~ ^[a-f0-9]{40}$ ]] || { echo 'Expected a full commit SHA'; exit 1; }
REPO=/home/ubuntu/han-ngu-lab
DB=/var/lib/han-ngu-lab/hanngulab.sqlite
SERVICE=han-ngu-lab-api
KEY=/etc/han-ngu-lab/backup.key
BACKUPS=/var/backups/han-ngu-lab
[[ $(id -un) == ubuntu ]] || { echo 'Run as ubuntu'; exit 1; }
cd "$REPO"
exec 9>"$HOME/.han-ngu-lab-deploy.lock"
flock -n 9 || { echo 'Another deployment is running'; exit 1; }
NODE=$(command -v node)
[[ $($NODE -p 'process.versions.node.split(".")[0]') == 24 ]]
[[ -f "$DB" && ! -L "$DB" ]]
[[ $(stat -c %u "$DB") == $(id -u) ]] || { echo 'Unexpected database owner'; exit 1; }
[[ -z $(git status --porcelain --untracked-files=no) ]] || { echo 'Tracked changes exist; stopped'; exit 1; }
[[ $(git branch --show-current) == main ]] || { echo 'Expected server main branch'; exit 1; }
REMOTE=$(git remote get-url origin)
[[ "$REMOTE" == https://github.com/flayingdance-tech/han-ngu-lab.git || "$REMOTE" == git@github.com:flayingdance-tech/han-ngu-lab.git ]] || { echo 'Unexpected remote'; exit 1; }
if [[ -n "$BUNDLE" ]]; then
  # Offline transfer from the owner-verified Private main; no token or new deploy key.
  [[ -f "$BUNDLE" && ! -L "$BUNDLE" ]] || { echo 'Expected a regular bundle file'; exit 1; }
  git bundle verify "$BUNDLE" >/dev/null
  [[ $(git bundle list-heads "$BUNDLE" HEAD) == "$TARGET HEAD" ]] || { echo 'Bundle target mismatch'; exit 1; }
  git fetch --quiet "$BUNDLE" HEAD
  [[ $(git rev-parse FETCH_HEAD) == "$TARGET" ]] || { echo 'Fetched bundle mismatch'; exit 1; }
else
  git fetch --quiet origin main
  [[ $(git rev-parse origin/main) == "$TARGET" ]] || { echo 'Remote main differs from approved target'; exit 1; }
fi
OLD=$(git rev-parse HEAD)
git merge-base --is-ancestor "$OLD" "$TARGET" || { echo 'Not a fast-forward; stopped'; exit 1; }
[[ -z $(git diff "$OLD" "$TARGET" -- amplify.yml) ]] || { echo 'Amplify configuration changed; stopped'; exit 1; }
sudo -n test -r /etc/han-ngu-lab/api.env
[[ $(sudo -n stat -c %a /etc/han-ngu-lab/api.env) == 600 ]] || { echo 'Expected private environment file mode 600'; exit 1; }
[[ $(sudo -n systemctl show "$SERVICE" -p User --value) == ubuntu ]]
[[ $(sudo -n systemctl show "$SERVICE" -p WorkingDirectory --value) == "$REPO" ]]
sudo -n systemctl is-active --quiet "$SERVICE"
WORK=$(mktemp -d /tmp/hnl-deploy.XXXXXXXX)
STOPPED=0
CHANGED=0
cleanup() { rmdir "$WORK" 2>/dev/null || true; }
failed() {
  code=$?
  trap - ERR
  echo "Deployment failed. Previous commit: $OLD. Database will NOT be replaced."
  for sidecar in "$DB-wal" "$DB-shm"; do
    if sudo -n test -f "$sidecar" && ! sudo -n test -L "$sidecar"; then sudo -n chown --reference="$DB" "$sidecar" || true; fi
  done
  if [[ $CHANGED == 1 && -z $(git status --porcelain --untracked-files=no) ]]; then
    git switch --detach "$OLD" && npm ci --omit=dev --no-audit --no-fund && sudo -n systemctl start "$SERVICE" || true
    echo 'Code rollback attempted; inspect health. main history was preserved.'
  elif [[ $STOPPED == 1 ]]; then
    sudo -n systemctl start "$SERVICE" || true
  fi
  cleanup
  exit "$code"
}
trap failed ERR
# Stage only trusted backup code from the exact fetched commit, before touching the checkout.
git archive "$TARGET" server/operations-backup.ts scripts/operations-backup.ts | tar -x -C "$WORK"
if ! sudo -n test -e "$KEY"; then
  sudo -n "$NODE" -e 'const f=require("fs"),c=require("crypto");f.writeFileSync(process.argv[1],c.randomBytes(32),{flag:"wx",mode:0o600})' "$KEY"
fi
sudo -n env DATABASE_PATH="$DB" BACKUP_DIRECTORY="$BACKUPS" BACKUP_KEY_FILE="$KEY" "$NODE" --import "$REPO/node_modules/tsx/dist/loader.mjs" "$WORK/scripts/operations-backup.ts" > "$WORK/backup.json"
MANIFEST=$("$NODE" -e 'const f=require("fs");const m=JSON.parse(f.readFileSync(process.argv[1]));if(!m.restoredAndIntegrityChecked)process.exit(1);console.log(process.argv[2]+"/"+m.file+".json")' "$WORK/backup.json" "$BACKUPS")
echo 'WAL-safe encrypted backup and separate restore check passed.'
sudo -n systemctl stop "$SERVICE"
STOPPED=1
git merge --ff-only "$TARGET"
CHANGED=1
npm ci --omit=dev --no-audit --no-fund
[[ $(git rev-parse HEAD) == "$TARGET" ]]
# Run as the actual DB owner. A private temporary backup group is not needed.
DB_OWNER=$(stat -c %u "$DB")
[[ $DB_OWNER == $(id -u) ]] || { echo 'Unexpected database owner; stopped before import'; false; }
# The manifest and encrypted artifact stay root-private; importer runs as root,
# then only existing SQLite files retain their original ownership.
sudo -n env DATABASE_PATH="$DB" "$NODE" --import "$REPO/node_modules/tsx/dist/loader.mjs" scripts/content-release.ts --apply "--backup-manifest=$MANIFEST"
for sidecar in "$DB-wal" "$DB-shm"; do
  if sudo -n test -f "$sidecar" && ! sudo -n test -L "$sidecar"; then sudo -n chown --reference="$DB" "$sidecar"; fi
done
sudo -n systemctl start "$SERVICE"
for attempt in {1..20}; do
  if curl --fail --silent http://127.0.0.1:3001/api/health | "$NODE" -e 'let s="";process.stdin.on("data",b=>s+=b).on("end",()=>{const h=JSON.parse(s);process.exit(h.ok&&h.mode==="live"?0:1)})'; then break; fi
  [[ $attempt != 20 ]] || false
  sleep 1
done
sudo -n systemctl is-active --quiet "$SERVICE"
# A daily private backup uses the same tested WAL-safe routine; no SMTP env access.
# Install root-owned native JS, so the root timer never loads ubuntu-owned npm packages.
"$NODE" --input-type=module - "$REPO" "$WORK" <<'JS'
import {readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {stripTypeScriptTypes} from 'node:module';
const [repo,work]=process.argv.slice(2);
for(const [source,name] of [['server/operations-backup.ts','operations-backup.mjs'],['scripts/operations-backup.ts','run-backup.mjs']]){
  const input=readFileSync(join(repo,source),'utf8').replace("from '../server/operations-backup'","from './operations-backup.mjs'");
  writeFileSync(join(work,name),stripTypeScriptTypes(input,{mode:'strip'}),{mode:0o600});
}
JS
sudo -n install -d -m 700 /usr/local/lib/han-ngu-lab-backup
sudo -n install -m 600 "$WORK/operations-backup.mjs" "$WORK/run-backup.mjs" /usr/local/lib/han-ngu-lab-backup/
cat > "$WORK/backup.service" <<EOF
[Unit]
Description=Han Ngu Lab encrypted SQLite backup and restore verification
[Service]
Type=oneshot
User=root
WorkingDirectory=$REPO
UMask=0077
Environment=DATABASE_PATH=$DB
Environment=BACKUP_DIRECTORY=$BACKUPS
Environment=BACKUP_KEY_FILE=$KEY
Environment=BACKUP_RETENTION_DAYS=14
ExecStart=$NODE /usr/local/lib/han-ngu-lab-backup/run-backup.mjs
NoNewPrivileges=true
PrivateTmp=true
EOF
cat > "$WORK/backup.timer" <<'EOF'
[Unit]
Description=Daily Han Ngu Lab database backup
[Timer]
OnCalendar=*-*-* 03:15:00 UTC
RandomizedDelaySec=1800
Persistent=true
[Install]
WantedBy=timers.target
EOF
# Refuse overwriting an independently installed job.
for kind in service timer; do
  destination="/etc/systemd/system/han-ngu-lab-backup.$kind"
  if sudo -n test -e "$destination" && ! sudo -n cmp -s "$WORK/backup.$kind" "$destination"; then
    echo 'An existing backup job differs; left untouched'; false
  fi
  sudo -n install -m 644 "$WORK/backup.$kind" "$destination"
done
sudo -n systemd-analyze verify /etc/systemd/system/han-ngu-lab-backup.service /etc/systemd/system/han-ngu-lab-backup.timer
sudo -n systemctl daemon-reload
sudo -n systemctl enable --now han-ngu-lab-backup.timer
sudo -n systemctl is-active --quiet han-ngu-lab-backup.timer
echo "DEPLOY_OK commit=$TARGET previous=$OLD backup=$MANIFEST"
echo 'Keep the encryption key in a separate safe location and copy encrypted backups off this VM. Offsite backup is not automated.'
# Cleanup only explicitly created files, never a recursive or computed-source delete.
rm -f "$WORK/server/operations-backup.ts" "$WORK/scripts/operations-backup.ts" "$WORK/backup.json" "$WORK/backup.service" "$WORK/backup.timer" "$WORK/operations-backup.mjs" "$WORK/run-backup.mjs"
rmdir "$WORK/server" "$WORK/scripts"
cleanup
