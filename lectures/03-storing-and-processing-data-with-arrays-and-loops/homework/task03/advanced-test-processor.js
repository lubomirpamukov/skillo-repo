/**
 * Solution 3.1.3
 * Function that sorts test cases into 3 categories based on their performance.
 * @param {Array<string>} testName
 * @param {Array<string>} testResults
 * @param {Array<number>} executionTimes
 * @returns {Array<Array>} [`criticalFailures`, `slowTests`, `quickPasses`]
 */
export function analyzeTestResults(testName, testResults, executionTimes) {
  let criticalFailures = [];
  let slowTests = [];
  let quickPasses = [];

  console.log(`--------------- Analyze Test Results ------------------------`);
  for (let i = 0; i < testName.length; i++) {
    const currentTestName = testName[i].toLowerCase();
    const currentTestResult = testResults[i].toLowerCase();
    const currentExecutionTime = Number(executionTimes[i]);

    if (currentTestResult === "fail" && currentTestName.includes("login")) {
      console.log(
        `Test ${currentTestName} with status: ${currentTestResult} is added to Critical Faliures.`
      );
      criticalFailures.push(currentTestName);
    } else if (currentTestResult === "pass" && currentExecutionTime > 500) {
      console.log(
        `Test ${currentTestName} with status: ${currentTestResult} and execution time: ${currentExecutionTime} is added to Slow Tests.`
      );
      slowTests.push(currentTestName);
    } else if (currentTestResult === "pass" && currentExecutionTime <= 500) {
      console.log(
        `Test ${currentTestName} with status: ${currentTestResult} and execution time: ${currentExecutionTime} is added to Quick Tests.`
      );

      quickPasses.push(currentTestName);
    }
  }
  console.log(`-------------------------------------------------------------`);
  return [criticalFailures, slowTests, quickPasses];
}

// console.log(
//   analyzeTestResults(
//     ["test1_login", "test2", "test3"],
//     ["fail", "Pass", "Pass"],
//     [200, 500, 2000]
//   )
// );


/**
 * Solution 3.1.4
 * @param {Array<string>} testCases
 * @param {Array<string>} enviroments
 * @returns {Array<string>} returns a string with tes name , type of enviorment, and status
 */
function processTestEnviroments(testCases, enviroments) {
  let enviormentResults = [];

  console.log(
    `-------------------- Process Test Enviroment ---------------------`
  );
  for (let i = 0; i < testCases.length; i++) {
    for (let j = 0; j < enviroments.length; j++) {
      let randomStatus = Math.random() > 0.5 ? "pass" : "fail";
      if (enviroments[j] === "production")
        randomStatus = Math.random() > 0.75 ? "pass" : "fail";
      let result = `${testCases[i]} | ${enviroments[j]} | ${randomStatus}`;
      console.log(result);
      enviormentResults.push(result);
    }
  }
  console.log(
    `-------------------------------------------------------------------`
  );
  return enviormentResults;
}

// console.log(
//   processTestEnviroments(
//     ["test_case1", "test_case2"],
//     ["production", "staging"]
//   )
// );

/**
 * Solution 3.1.5
 * @param {Array<string>} emails
 * @param {Array<string>} passwords
 * @param {Array<number>} ages
 * @returns {Array<Array>} returns [`validUsers`,`invalidUsers`,`fixableusers`]
 */
function validateTestDataQuality(emails, passwords, ages) {
  let validUsers = [];
  let invalidUsers = [];
  let fixableUsers = [];

  console.log(
    `--------------- Validate Test Data Quality ------------------------`
  );
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    let password = passwords[i];
    let age = ages[i];
    let validCounter = 0;
    console.log(
      `User data email:${email}, password: ${password} , age: ${age}`
    );
    if (email.includes("@") && email.includes(".")) {
      console.log(`User email validation passed`);
      validCounter++;
    } else console.log("Invalid Email");

    if (password.length >= 8) {
      console.log(`Password validation passed:`);
      validCounter++;
    } else console.log(`Invalid password`);
    if (age >= 18) {
      console.log(`Age validation passed`);
      validCounter++;
    } else console.log(`Age restricted`);

    if (validCounter === 3) {
      console.log(`User data is valid, added to the validUsers collection.`);
      validUsers.push(email);
    } else if (validCounter === 2) {
      console.log(
        `2 out of 3 user data are valid, user data is fixable, added to the fixableUsers collection`
      );
      fixableUsers.push(email);
    } else {
      console.log(`User data is invalid`);
      invalidUsers.push(email);
    }
    console.log(
      `========================================================================`
    );
  }
  console.log(
    `--------------------------------------------------------------------`
  );
  return [validUsers, invalidUsers, fixableUsers];
}

// console.log(
//   validateTestDataQuality(
//     ["email1@.com", "email2.com", "email3.com"],
//     ["password1234", "password123456", "password123478"],
//     [19, 29, 4]
//   )
// );

/**
 * Solution 3.2.1
 * Function finds and logs index of critical error
 * @param {Array<string>} testResults
 * @param {Array<string>} errorMessages
 * @returns {number} returns index of critical error or -1
 */
function findFirstCriticalError(testResults, errorMessages) {
  let criticalErrorExist = false;
  let indexOfCriticalError = -1;

  console.log(
    `------------------------- Find First Critical Error -----------------------------`
  );
  for (let i = 0; i < testResults.length; i++) {
    let currentResult = testResults[i].toLowerCase();
    let currentErrMsg = errorMessages[i].toLowerCase();

    if (currentResult === "fail") {
      if (currentErrMsg.includes("critical")) {
        console.log(
          `Critical error found in: ${currentResult}, message: ${currentErrMsg}`
        );
        criticalErrorExist = true;
        indexOfCriticalError = i;
        break;
      }
    }
  }

  if (criticalErrorExist)
    console.log(`Critical error found at index: ${indexOfCriticalError}`);
  console.log(
    `----------------------------------------------------------------------------------`
  );
  return indexOfCriticalError;
}

// console.log(
//   findFirstCriticalError(
//     ["pass", "pass", "fail"],
//     ["default_error1", "default_error2", "critical_error3"]
//   )
// );

/**
 * Solution 3.2.2
 * Function that dicards tests with status: skip/invalid and processes all other tests.
 * @param {Array<string>} testNames
 * @param {Array<string>} testStatuses
 * @returns {Array} returns array with processed tests
 */
function processValidTestsOnly(testNames, testStatuses) {
  let processedTests = [];

  console.log(
    `-------------------- Process Valid Tests Only -------------------------`
  );
  for (let i = 0; i < testNames.length; i++) {
    let curTestName = testNames[i];
    let curTestStatus = testStatuses[i].toLowerCase();

    if (curTestStatus === "skip" || curTestStatus === "invalid") {
      console.log(`Skipping test with status: ${curTestStatus}`);
      continue;
    }

    console.log(`Successfully processed test: ${curTestName}`);
    processedTests.push(curTestName);
  }
  console.log(`--------------------------------------------------`);
  return processedTests;
}

// console.log(
//   processValidTestsOnly(
//     ["testName1", "testName2", "testName3"],
//     ["valid", "invalid", "skip"]
//   )
// );

/**
 * Solution 3.2.3
 * Function that mimics pass/fail tests
 * @param {Array<string>} testQueue
 * @param {number} maxFaliures
 * @returns {Array<number>} returns [`processedCount`,`faliureCount`,`testQueue.length`]
 */
function monitorTestExecutionWithLimits(testQueue, maxFaliures) {
  let faliureCount = 0;
  let processedCount = 0;

  console.log(
    `---------------- Monitor Test Execution With Limits ----------------`
  );
  while (testQueue.length > 0) {
    let curTest = testQueue.pop();
    if (Math.random(0, 1) > 0.5) {
      console.log(`Test ${curTest} passed:`);
      processedCount++;
    } else {
      console.log(`Test ${curTest} failed:`);
      faliureCount++;
    }

    if (faliureCount >= maxFaliures) {
      console.log(
        `Maximum faliures limit reached: ${maxFaliures}, breaking monitorTestExecutionWithLimits`
      );
    }
  }
  console.log(`---------------------------------------------------------`);
  return [processedCount, faliureCount, testQueue.length];
}

// console.log(
//   monitorTestExecutionWithLimits(
//     ["test0", "test1", "test2", "test3", "test4", "test5", "test6", "test7"],
//     5
//   )
// );

/**
 * Solution 3.3.1
 * @param {Array<string>} testCases
 * @param {Array<string>} enviroments
 * @param {Array<string>} userRoles
 * @returns {Array} [`passedResults`, `failedResults`, `skippedResults`, `criticalResults`]
 */
function executeComprehensiveTestSuite(testCases, enviroments, userRoles) {
  let passedResults = [];
  let failedResults = [];
  let skippedResults = [];
  let criticalResults = [];

  console.log(
    `------------- Start Comprehensive Test Suite --------------------- `
  );
  for (let t = 0; t < testCases.length; t++) {
    let testCase = testCases[t];
    let baseSuccessChanse = 0.85;
    const isCritical = testCase.includes("critical");
    console.log(`Comprehensive testing of ${testCase}`);
    if (isCritical) {
      console.log(`Critical test added to criticalResults collection.`);
      criticalResults.push(`${testCase} | N/A | N/A | CRITICAL`);
      console.log(`--------------------------------------------`);
      continue;
    }

    for (let e = 0; e < enviroments.length; e++) {
      let env = enviroments[e];
      console.log(`Comprehensive testing of enviorment: ${env}`);
      if (env === "production") {
        baseSuccessChanse = 0.95;
      } else if (env === "staging") {
        baseSuccessChanse = 0.9;
      }

      for (let u = 0; u < userRoles.length; u++) {
        let userR = userRoles[u];
        console.log(`Comprehensive testing for all roles in env ${env}`);
        if (userR === "admin") {
          baseSuccessChanse -= 0.4;
        } else if (userR === "developer") {
          baseSuccessChanse -= 0.2;
        }

        let randomChance = Math.random(0, 1);

        if (randomChance > baseSuccessChanse) {
          console.log(
            `${testCase} | ${env} | ${userR} added to passing results`
          );
          passedResults.push(`${testCase} | ${env} | ${userR}`);
        } else if (randomChance === baseSuccessChanse) {
          console.log(`${testCase} | ${env} | ${userR} is added ti skipped`);
          skippedResults.push(`${testCase} | ${env} | ${userR}`);
        } else {
          console.log(
            `${testCase} | ${env} | ${userR} added to failed results`
          );
          failedResults.push(`${testCase} | ${env} | ${userR}`);
        }
      }
      console.log(`-------------------------------------------------------`);
    }
  }

  return [passedResults, failedResults, skippedResults, criticalResults];
}

// console.log(
//   executeComprehensiveTestSuite(
//     ["test_critical", "test_2"],
//     ["production", "staging", "development"],
//     ["admin", "developer"]
//   )
// );

export function generateDetailedTestReport(
  resultNames,
  resultStatuses,
  resultTimes,
  resultEnvironments
) {
  let totalCount = 0;
  let passCount = 0;
  let failCount = 0;
  let totalExecutionTime = 0;
  let slowTestCount = 0;
  const SLOW_THRESHOLD = 2000;

  console.log(
    `--------------- Generate Detailed Test Report -------------------`
  );
  console.log(`Starting analysis of ${resultNames.length} results...`);

  for (let i = 0; i < resultNames.length; i++) {
    const testStatus = resultStatuses[i].toLowerCase();
    const testTime = Number(resultTimes[i]);
    const testEnvironment = resultEnvironments[i].toLowerCase();

    totalCount++;
    totalExecutionTime += testTime;

    if (testStatus === "pass") {
      passCount++;
    } else if (testStatus === "fail") {
      failCount++;
    }

    if (testTime > SLOW_THRESHOLD) {
      slowTestCount++;
    }
  }

  const avgTime =
    totalCount > 0 ? (totalExecutionTime / totalCount).toFixed(2) : 0;
  const passRate =
    totalCount > 0 ? ((passCount / totalCount) * 100).toFixed(1) : 0;

  console.log(
    `
            --- Summary Metrics ---
    Total Executed: ${totalCount}
    Passed: ${passCount} | Failed: ${failCount} (Rate: ${passRate}%)
    Average Time: ${avgTime}ms
    --- Detailed Analysis ---
    Tests running slowly (> ${SLOW_THRESHOLD}ms): ${slowTestCount}
        `
  );

  return [totalCount, passCount, failCount, slowTestCount];
}

const reportNames = [ "Login", "API Check", "Checkout", "Search", "Heavy Report", "Database Call" ];
const reportStatuses = [ "PASS", "FAIL", "PASS", "PASS", "FAIL", "PASS" ];
const reportTimes = [ 100, 2500, 150, 4000, 2000, 2001 ];
const reportEnvironments = [ "QA", "PROD", "QA", "STAGING", "PROD", "PROD" ];

//generateDetailedTestReport(reportNames, reportStatuses, reportTimes, reportEnvironments);