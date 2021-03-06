import path from 'path';
import fse from 'fs-extra';
import { PackageJson } from './interfaces/PackageJson';

/**
 * Reads and parses the package.json file from the given folder.
 * @param folderPath The folder path to look for a package.json in.
 * @returns The parsed file contents, or undefined if the file doesn't exist.
 */
export function readPackageJson(folderPath: string): PackageJson | undefined {
  const packageJsonPath = path.join(folderPath, 'package.json');
  if (fse.existsSync(packageJsonPath)) {
    return fse.readJsonSync(packageJsonPath, { throws: false }) || undefined;
  }
}
