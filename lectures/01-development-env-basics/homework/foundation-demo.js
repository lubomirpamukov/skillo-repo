import { displayEnvironmentInfo } from "./task01/verify-setup.js";
import {
  testUserEmail,
  testUserPassword,
  userName,
  validateEmail,
  validatePassword,
  generateUniqueEmail,
  logTestConfiguration,
} from "./task02/test-data-config.js";
import {
  endTestSuite,
  startTestSuite,
  logTestStep,
  generateTestReport,
  debugVariable,
  compareExpectedActual,
  logSystemInfo,
} from "./task03/test-execution-helpers.js";

/**
 * This script demonstrates that i understand what is function , what is parameter ,
 * how to call functions with parameters and without parameters, how to import and export modules
 * and reuse code
 *
 */

function runFoundationDemo() {
  const enviorment = displayEnvironmentInfo();
  const isEmailValid = validateEmail(testUserEmail);
  const isPasswordValid = validatePassword(testUserPassword);
  const uniqueEmail = generateUniqueEmail(userName);
  logTestConfiguration();
  const startSuite = startTestSuite("tester");
  const endSuite = endTestSuite("tester", "2025-10-04T10:43:33.623Z");
  const testStepResult = logTestStep(3, "random test description", "pass");
  const testReport = generateTestReport({ passed: 4, skipped: 1, failed: 12 });
  const userNameDebuged = debugVariable("tesUserEmail", testUserEmail);
  const isUserNameEqualToUserEmail = compareExpectedActual(
    userName,
    testUserEmail
  );
  logSystemInfo();
}

//runFoundationDemo();

function simulateLoginTest() {
  startTestSuite("tester");
  const email = generateUniqueEmail(userName);
  const isEmailValid = validateEmail(email);
  logTestStep(3, "random test description", "pass")
  endTestSuite("tester", "2025-10-04T10:43:33.623Z")
  generateTestReport({ passed: 4, skipped: 1, failed: 12 })
  runFoundationDemo()
}

simulateLoginTest();
