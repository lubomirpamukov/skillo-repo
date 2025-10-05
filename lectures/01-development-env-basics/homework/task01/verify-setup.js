import { execSync } from "child_process";

/**
 * Task 1.3.3 Solution
 * Console logs Node version.
 * @returns Node version as a string
 */

function checkNodeVersion() {
  console.log(process.version);
  return process.version;
}

/**
 * Task 1.3.4
 * @returns Node version or Not Avaliable string
 */
function checkNpmVersion() {
  let version = execSync("npm --version")
    ? execSync("npm --version").toString()
    : "Not available";
  console.log(version);
  return version;
}

/**
 * Task 1.3.5 Solution
 * Printing the enviormental variables
 */
export function displayEnvironmentInfo() {
  let operatingSystem = process.platform;
  let currentWorkingDirectory = process.cwd();
  let nodeVersion = checkNodeVersion();
  let npmVersion = checkNpmVersion();
  console.log(
    `Enviormental Information: 
     Operating system: ${operatingSystem} 
     CurrentWorkingDirectory: ${currentWorkingDirectory} 
     Node version: ${nodeVersion} 
     NPM version: ${npmVersion}`
  );
}

