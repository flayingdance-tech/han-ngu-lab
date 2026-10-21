import type { databaseInventory } from '../server/operations-backup';
export function verifyOffsiteBackup(archivePath: string, manifestPath: string, keyPath: string): {
  file: string;
  createdAt: string;
  encryptedSha256: string;
  offsiteRestoreVerified: true;
  inventory: ReturnType<typeof databaseInventory>;
};
