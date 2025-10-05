/**
 * Solution step 1.3
 * Generates a unquie user name string
 * @param {string} userName name of the user
 * @returns unique userName string
 */
export function generateTestUserName(userName) {
  return `${userName}${Date.now()}`;
}

console.log(generateTestUserName("test"));

/**
 * Solution step 1.4
 * Generate end point based on enviorment endpoint and userId
 * @param {string} environment
 * @param {string} endpoint
 * @param {string} userId
 * @returns returns a string representing the URL based on the passed parameters.
 */
export function buildTestURL(environment, endpoint, userId) {
  const url = `https://${environment}.testsite.com/${endpoint}?user=${userId}`;
  console.log(
    `
       --------------- Build Test Url --------------
       Enviorment: ${environment}
       EndPoint: ${endpoint}
       User ID: ${userId}
       URL: ${url}
       --------------------------------------------- 
    `
  )
  return url;
}

console.log(buildTestURL("Node: V.22", "/test", "12345"));

/**
 * Solution step 1.5
 * Generates dymanic test message based on the provided inputs
 * @param {string} testName Name of the test
 * @param {string} status Status of the test
 * @param {Number | string} duration How much time the test took to execute
 * @returns
 */
function createTestMessage(testName, status, duration) {
    console.log(
        `
            -------------- Create Test Message --------------
            Name: ${testName}
            Status: ${status}
            Duration: ${duration}
            -------------------------------------------------
        `
    )
  return `Test: ${testName} | Status: ${status} | Duration: ${duration}ms`;
}

console.log(createTestMessage("tester", "pass", "123"));

/**
 * Solution step 1.2.1
 * @param {string | number} startTime The time the  request was send
 * @param {string | number} endTime The time the response was delivered.
 * @returns {string} Retruns the calculated response time.
 */
function calculateResponseTime(startTime, endTime) {
  let responseTime = Number(startTime) - Number(endTime);
  console.log(
    `
        -------------- Calculate Response Time -------------
        Start Time: ${startTime}
        End Time: ${endTime}
        Response Time: ${responseTime}
        ---------------------------------------------------
    `
  )
  return responseTime;
}

console.log(calculateResponseTime("122", "33"));

/**
 * Solution 1.2.2
 * Generates report based on total tests and passed tests inputs
 * @param {number} totalTests
 * @param {number} passedTests
 * @returns {Object} Containing properties `totalTests`, `passedTests`, `failedTests`, `successRate`
 */
function calculateSuccessRate(totalTests, passedTests) {
  const failedTests = totalTests - passedTests;
  const successRate = ((passedTests / totalTests) * 100).toFixed();

  console.log(
    `
            ------------  Test Results   ----------
            Total tests: ${totalTests}
            Passed tests: ${passedTests}
            Failed tests: ${failedTests}
            Success rate: ${successRate}
            ---------------------------------------
        `
  );

  return {
    totalTests: totalTests,
    passedTests: passedTests,
    failedTests: failedTests,
    successRate: successRate,
  };
}

calculateSuccessRate(14, 7);

/**
 * Solution 1.2.3
 * Adjust the timeout if exceeds 30 000ms
 * @param {number} baseTimeout
 * @param {number} multiplier
 * @returns {string} The adjusted time out
 */
function adjustTimeout(baseTimeout, multiplier) {
  const MAX_TIMEOUT = 30000;
  let originalTimeOut = baseTimeout * multiplier;
  let adjustTimeout = originalTimeOut;
  if (originalTimeOut > MAX_TIMEOUT) {
    adjustTimeout = originalTimeOut % MAX_TIMEOUT;
  }
  console.log(
    `
        ---------- Adjusted Timeout results -----------
        Original Time Out: ${originalTimeOut}
        Adjusted Time Out: ${adjustTimeout}
        -----------------------------------------------
    `
  );
  return adjustTimeout;
}

adjustTimeout(1234, 222);

/**
 * 1.1.4
 * Incremets the input number by 1 and then by 5
 * @param {number} currentCount
 * @returns {string} a string representation of the start value steps taken and end value.
 */
function incrementTestCounter(currentCount) {
  let result = currentCount + 1;
  result += 5;
  console.log(`${currentCount} -> +1 -> +5 -> ${result}`);
  return result;
}

incrementTestCounter(4);

/**
 * Solution 1.3.1
 * Process enviorment name string and creates an object based on it
 * @param {string} enviormentName
 * @returns {object} Object containing properties `originalName`, `normalizedName`, `baseUrl`, `displayName`
 */
function processTestEnviroment(enviormentName) {
  const normalizedName = enviormentName.toLowerCase();
  const url = `https://${normalizedName}.example.com`;
  const displayUrlName = url.toUpperCase();

  console.log(
    `
        ----------- Process Test Enviorment Results ----------
        Original Name: ${enviormentName}
        Normalized Name: ${normalizedName}
        BASE URL: ${url}
        Display Name: ${displayUrlName}
        ------------------------------------------------------
    `
  );

  return {
    originalName: enviormentName,
    normalizedName: normalizedName,
    baseUrl: url,
    displayName: displayUrlName,
  };
}

processTestEnviroment("Node v22");

/**
 * Solution 1.3.2
 * Extracting information from a string and making an object with it
 * @param {string} testResultString
 * @returns {Object} Object containing the information from the input string
 * Object properties: `testName`, `status`, `duration`
 */
function extractTestInfo(testResultString) {
  let [testName, status, duration] = testResultString.split(":");
  duration = duration.replace("ms", "");
  console.log(
    `
            ----------------- Extracted Test Information -------------------
            Original String : ${testResultString}
            Test Name: ${testName}
            Status: ${status}
            Duration: ${duration}
            ---------------------------------------------------------
        `
  );

  return {
    testName,
    status,
    duration,
  };
}

console.log(extractTestInfo("TestName:PASSED:250ms"));

/**
 * Solution 1.3.3
 * Creates a Summary with test information
 * @param {string} testName
 * @param {string} enviorment
 * @param {string | number} userCount
 * @param {string | number} avgResponseTime
 * @returns {Object} Containing properties: `enviorment`, `testName`, `userCount`, `avgResponseTime`, `totalExecutionTime`
 */
function buildTestSummary(testName, enviorment, userCount, avgResponseTime) {
  const totalExecutionTime = Number(userCount) * Number(avgResponseTime);

  console.log(
    `
            ------------- Build Test Summary ------------- 
            Enviorment: ${enviorment}
            Test Name: ${testName}
            User Count: ${userCount}
            Average Response Time: ${avgResponseTime}
            Total Execution time: ${totalExecutionTime}
            ----------------------------------------------
        `
  );

  return {
    enviorment,
    testName,
    userCount,
    avgResponseTime,
    totalExecutionTime,
  };
}

console.log(buildTestSummary("Random test", "Node_v22", 22, 186));
