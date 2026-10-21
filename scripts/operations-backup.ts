import { createOperationsBackup } from '../server/operations-backup';

try {
  const result = await createOperationsBackup({
    databasePath: process.env.DATABASE_PATH ?? '/var/lib/han-ngu-lab/hanngulab.sqlite',
    backupDirectory: process.env.BACKUP_DIRECTORY ?? '/var/backups/han-ngu-lab',
    keyFile: process.env.BACKUP_KEY_FILE ?? '/etc/han-ngu-lab/backup.key',
    retentionDays: Number(process.env.BACKUP_RETENTION_DAYS ?? 14),
  });
  // Counts and encrypted artifact identity only; never rows, secrets or encryption key.
  console.log(JSON.stringify(result));
} catch (error) {
  console.error('Operations backup failed:', error instanceof Error ? error.name : 'UnknownError');
  process.exitCode = 1;
}
