/**
 * Solutoin 3.1.3
 * @param {*} suiteName 
 * @returns 
 */
export function startTestSuite(suiteName) {
  const suiteNameHeader = `<h1> ${suiteName} </h1>`;
  console.log(suiteNameHeader);
  const time = new Date().toISOString();
  console.log(time);
  return time;
}

//startTestSuite("Test name")

/**
 * Sultion 3.1.4
 * @param {*} suiteName 
 * @param {*} startTime 
 * @returns 
 */
export function endTestSuite(suiteName, startTime) {
  const numericStartTime = new Date(startTime).getTime();
  const duration = Date.now() - numericStartTime;
  console.log(`Suite ${suiteName} completed duration time : ${duration}`);
  return duration;
}

//endTestSuite("abracadabra", "2025-10-04T10:43:33.623Z")

/**
 * Solutoin 3.1.5
 * @param {*} stepNumber 
 * @param {*} description 
 * @param {*} status 
 */
export function logTestStep(stepNumber, description, status) {
  let testStepTimeStamp = Date.now();
  if (status === "pass") {
    console.log(new Date(testStepTimeStamp).toLocaleString());
    console.log(`Step Number ${stepNumber}`);
    console.log(description);
    console.log(`Status : ${status}`);
  } else {
    console.error(new Date(testStepTimeStamp).toLocaleString());
    console.error(`Step Number ${stepNumber}`);
    console.error(description);
    console.error(`Status : ${status}`);
  }
}

//logTestStep(3,"Random Test", "failed")

/**
 * Solution 3.1.6
 * @param {*} testResults 
 * @returns 
 */
export function generateTestReport(testResults) {
  const totalTests =
    testResults.passed + testResults.skipped + testResults.failed;
  const passPercentage = (testResults.passed / totalTests) * 100;
  console.log(`Total tests: ${totalTests}`);
  console.log(
    `Passed: ${testResults.passed} Skipped: ${testResults.skipped} Failed: ${testResults.failed}`
  );
  console.log(`Passed test percentage: ${passPercentage.toFixed()} %`)

  return {
    total: totalTests,
    passed: testResults.passed,
    skipped: testResults.skipped,
    failed: testResults.failed,
    passPercentage: passPercentage
  }
}

//generateTestReport({ passed: 4 , skipped: 3, failed: 7})

/**
 * Solution 3.2.1
 * @param {*} variableName name of the variable
 * @param {*} variableValue value of the variable
 * @returns Formated string displaying name value and typeof variable
 */
export function debugVariable(variableName, variableValue) {
    let formatedVariable = `Variable [${variableName}] with value of [${variableValue}] and type of ${typeof variableValue}`;
    console.log(formatedVariable)
    return formatedVariable
}

//debugVariable("firstName", "Stefan")

/**
 * Solution 3.2.2
 * @param {*} expected 
 * @param {*} actual 
 */
export function compareExpectedActual(expected, actual) {
    let result = expected === actual;
    console.log(`Expected value: [${expected}] => Actual value: [${actual}] , are they equal: ${result}`)
}

//compareExpectedActual("asdf", "assdf")

/**
 * Solution 3.2.3
 * @returns 
 */
export function logSystemInfo() {
  const timestamp = Date.now();
  const nodeVersion = typeof process !== "undefined" ? process.version : "N/A";
  const platform = typeof process !== "undefined" ? process.platform : "N/A";
  const cwd = typeof process !== "undefined" ? process.cwd() : "N/A";

  const sampleEmail = "test@example.com";
  const samplePassword = "password123";
  const debugMode = true;

  console.log("=== System Info ===");
  console.log(`Timestamp: ${timestamp}`);
  console.log(`Node.js Version: ${nodeVersion}`);
  console.log(`Platform: ${platform}`);
  console.log(`Current Directory: ${cwd}`);
  console.log(`Type of sampleEmail: ${typeof sampleEmail}`);
  console.log(`Type of samplePassword: ${typeof samplePassword}`);
  console.log(`Type of debugMode: ${typeof debugMode}`);
  console.log("===================");

  return {
    timestamp,
    nodeVersion,
    platform,
    cwd,
    types: {
      sampleEmail: typeof sampleEmail,
      samplePassword: typeof samplePassword,
      debugMode: typeof debugMode,
    },
  };
}

/**
 * Solution 3.3.3
 * 1) When input `console.log('QA DevTools Practice')` is provided,
 * the result is a string with the value of 'QA DevTools Practice' appears on the console. 
 * 
 * 2) When input `document.title` is provided it displays the title in the head of the html document.
 * 3) When input `window.location.href` it returns the URL of the current page opened in the browser tab.
 * 4) When input `document.querySelectorAll('p')` , results in a collection of all the p elements in the html document.
 */



//logSystemInfo()