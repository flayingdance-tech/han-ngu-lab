param([Parameter(Mandatory=$true)][string]$ConfigFile)
$ErrorActionPreference='Stop'
Set-StrictMode -Version Latest
$workspace=Split-Path -Parent $PSScriptRoot
$settings=Get-Content -LiteralPath $ConfigFile -Raw | ConvertFrom-Json
if($settings.Host -ne 'ubuntu@54.253.61.113'){throw 'Unexpected backup host'}
foreach($file in @($settings.IdentityFile,$settings.KnownHostsFile,$settings.KeyFile)){
 if(!(Test-Path -LiteralPath $file -PathType Leaf)){throw 'A required private file is missing'}
 if((Get-Item -LiteralPath $file).LinkType){throw 'Symlink private files are not supported'}
}
$archives=[IO.Path]::GetFullPath($settings.ArchiveDirectory)
if(!(Test-Path -LiteralPath $archives -PathType Container)){throw 'Private archive directory must be prepared first'}
$allowed=@([Security.Principal.WindowsIdentity]::GetCurrent().User.Value,'S-1-5-18')
foreach($path in @($archives,$settings.KeyFile)){
 foreach($rule in (Get-Acl -LiteralPath $path).Access){
  if($rule.AccessControlType -eq 'Allow' -and $rule.IdentityReference.Translate([Security.Principal.SecurityIdentifier]).Value -notin $allowed){throw 'Offsite archive/key permissions are too broad'}
 }
}
$known=[IO.Path]::GetFullPath($settings.KnownHostsFile).Replace('\','/')
$sshOptions=@('-o','BatchMode=yes','-o','StrictHostKeyChecking=yes','-o','IdentitiesOnly=yes','-o','ConnectTimeout=15','-o',('UserKnownHostsFile="'+$known+'"'),'-i',$settings.IdentityFile)
$remote=$null;$temporary=@();$statusFile=Join-Path (Split-Path -Parent $ConfigFile) 'last-sync.json'
try{
 $raw=& ssh.exe @sshOptions $settings.Host 'sudo -n /usr/bin/node /usr/local/lib/han-ngu-lab-backup/export-offsite.mjs'
 if($LASTEXITCODE -ne 0){throw 'SSH encrypted export failed'}
 $remote=($raw -join "`n") | ConvertFrom-Json
 if($remote.directory -notmatch '^/home/ubuntu/\.hnl-offsite-export-[A-Za-z0-9]{6}$' -or $remote.file -notmatch '^\d{8}T\d{6}Z-[a-f0-9]{8}\.sqlite\.enc$' -or $remote.encryptedSha256 -notmatch '^[a-f0-9]{64}$'){throw 'Unexpected export metadata'}
 $id=[guid]::NewGuid().ToString('N')
 $part=Join-Path $archives ('.download-'+$id+'.enc');$meta=Join-Path $archives ('.download-'+$id+'.json');$temporary=@($part,$meta)
 & scp.exe @sshOptions ($settings.Host+':'+$remote.directory+'/'+$remote.file) $part
 if($LASTEXITCODE -ne 0){throw 'Encrypted archive transfer failed'}
 & scp.exe @sshOptions ($settings.Host+':'+$remote.directory+'/'+$remote.file+'.json') $meta
 if($LASTEXITCODE -ne 0){throw 'Manifest transfer failed'}
 if((Get-FileHash -LiteralPath $part -Algorithm SHA256).Hash.ToLowerInvariant() -ne $remote.encryptedSha256){throw 'SSH transfer checksum mismatch'}
 $result=& $settings.NodeExecutable (Join-Path $PSScriptRoot 'verify-offsite-backup.mjs') $part $meta $settings.KeyFile
 if($LASTEXITCODE -ne 0){throw 'Offsite decryption/restore check failed'}
 $verified=($result -join "`n") | ConvertFrom-Json
 if(!$verified.offsiteRestoreVerified -or $verified.file -ne $remote.file){throw 'Invalid restore verification result'}
 foreach($pair in @(@($part,(Join-Path $archives $remote.file)),@($meta,(Join-Path $archives ($remote.file+'.json'))))){
  if(Test-Path -LiteralPath $pair[1]){
   if((Get-FileHash -LiteralPath $pair[0]).Hash -ne (Get-FileHash -LiteralPath $pair[1]).Hash){throw 'Refuse overwriting an existing immutable backup'}
  }else{Move-Item -LiteralPath $pair[0] -Destination $pair[1]}
 }
 $status=@{checkedAt=(Get-Date -Format o);success=$true;file=$verified.file;backupCreatedAt=$verified.createdAt;encryptedSha256=$verified.encryptedSha256;offsiteRestoreVerified=$true}
 $status | ConvertTo-Json | Set-Content -LiteralPath $statusFile -Encoding utf8
 $status | ConvertTo-Json
}catch{
 @{checkedAt=(Get-Date -Format o);success=$false;error='Offsite backup failed. Inspect SSH/filesystem/restore status locally; no secrets are logged.'} | ConvertTo-Json | Set-Content -LiteralPath $statusFile -Encoding utf8
 throw 'Automated offsite backup failed; no success was recorded.'
}finally{
 foreach($path in $temporary){if((Split-Path -Parent $path) -ne $archives){throw 'Unexpected local cleanup path'};if(Test-Path -LiteralPath $path){Remove-Item -LiteralPath $path}}
 if($remote -and $remote.directory -match '^/home/ubuntu/\.hnl-offsite-export-[A-Za-z0-9]{6}$' -and $remote.file -match '^\d{8}T\d{6}Z-[a-f0-9]{8}\.sqlite\.enc$'){
  $cleanup='rm -- '+$remote.directory+'/'+$remote.file+' '+$remote.directory+'/'+$remote.file+'.json && rmdir -- '+$remote.directory
  & ssh.exe @sshOptions $settings.Host $cleanup | Out-Null
 }
}
