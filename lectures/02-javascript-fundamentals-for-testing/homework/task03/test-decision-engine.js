/**
 * Solution 3.1.3
 * Checks for test result and count of execution and determines the final outcome of the test
 * @param {string} testResult
 * @param {number} retryCount
 * @returns {string} returns `complete`, `retry`, `abort` based on the provided input
 */
export function determineTestAction(testResult, retryCount) {
  if (testResult === "pass") {
    console.log("Successfully passed");
    return "complete";
  } else if (testResult === "fail" && retryCount < 3) {
    console.log("Retry runing the test");
    return "retry";
  } else if (testResult === "fail" && retryCount >= 3) {
    console.log("Test failed");
    return "abort";
  }
}

console.log(determineTestAction("fail", 2));

/**
 * Solution 3.1.4
 * Function validating email password and age
 * @param {string} email
 * @param {string} password
 * @param {number} age
 * @returns {string} returns "valid" if data pass all the validation
 */
function validateTestData(email, password, age) {
  const isEmailValid = email.length > 0 && email.includes("@");
  const isPasswordValid = password.length >= 8;
  const isAgeValid = age >= 18 && age <= 100;

  if (!isEmailValid) {
    const errMsg = `Failed email validation: email must contain atleast 1 character and "@" symbol`;
    return errMsg;
  }

  if (!isPasswordValid) {
    const errMsg = `Password validation failed: password must containt at least 8 characters`;
    return errMsg;
  }

  if (!isAgeValid) {
    const errMsg = `Invalid age: age must be between 18 and 100 inclusive`;
    return errMsg;
  }

  return "valid";
}

console.log(validateTestData("emai@lem.com", "password1234", "18"));

/**
 * Solution 3.1.5
 * Function that calculates and grades the test success rate
 * @param {number} totalTests
 * @param {number} passedTests
 * @param {string} environment
 * @returns {Object} returns object containing properties `successRate`, `grade`, `environment`
 */
function processTestResult(totalTests, passedTests, environment) {
  const successRate = ((passedTests / totalTests) * 100).toFixed();
  let excellent = 95;
  let good = 85;
  let acceptable = 70;
  let grade = "";

  if (environment === "production") {
    excellent += 5;
    good += 5;
    acceptable += 5;
  }

  if (successRate >= excellent) grade = "excellent";
  else if (successRate >= good) grade = "good";
  else if (successRate >= acceptable) grade = "acceptable";
  else grade = "needs improvment";

  return {
    successRate,
    grade,
    environment,
  };
}

console.log(processTestResult(100, 74, "production"));

/**
 * Solution 3.2.1
 * @param {boolean} isPassed
 * @returns {string}
 */
function getTestStatus(isPassed) {
  let result = isPassed ? "PASSED" : "FAILED";
  console.log(result);
  return result;
}

getTestStatus(false);

/**
 * Solution 3.2.2
 * Function that returns timeout value based on enviorment
 * @param {string} environment
 * @returns {number} returns a timeout range based on enviorment
 */
function determineTimeOut(environment) {
  const result = environment === "production" ? 30000 : 10000;
  console.log(
    `
            ---------- Determine Timeout ---------------
            Enviorment: ${environment}
            Timeout set to : ${result}
        `
  );
  return result;
}

console.log(determineTimeOut("development"));
/**
 * Solution 3.2.1
 * @param {number} durationMs
 * @returns {string} returns duration with unit based on the quantity
 */
function formatTestDuration(durationMs) {
  let result = durationMs < 1000 ? durationMs + "ms" : durationMs / 1000 + "s";
  console.log(
    `Original duration ${durationMs} => formated duration: ${result}`
  );
  return result;
}

console.log(formatTestDuration(1001));

/**
 * Solution 3.2.4
 * Functions that sets priority level based on errors and response time
 * @param {number} errorCount
 * @param {number} responseTime
 * @returns
 */
function getTestPriority(errorCount, responseTime) {
  const priorityLevel =
    errorCount > 0 ? "high" : responseTime > 1000 ? "medium" : "low";
  console.log(
    `
            ------------ Get Test Priority ----------
            Are there any errors? : ${errorCount}
            If there errors return string "high"

            If there are no errors check response time: ${responseTime}ms
            If response time is more than 1000ms log "medium" else log "low"

            Input parameters: errorCount = ${errorCount}, responseTime = ${responseTime}ms
            Prirority level is : ${priorityLevel}
            -----------------------------------------
        `
  );
  return priorityLevel;
}

//console.log(getTestPriority(0, 100));

/**
 * Solution 3.3.1
 * Function that returns different config settings based on enviorment
 * @param {string} enviorment
 * @returns {Object} returns object with properties: `enviorment`, `timeout`, `debug`
 */
export function handleTestEnviorment(enviorment) {
  switch (enviorment) {
    case "development":
      console.log(`Using dev settings`);
      return {
        enviorment: "development",
        timeout: 1000,
        debug: "development",
      };
    case "staging":
      console.log(`Using staging settings`);
      return {
        enviorment: "staging",
        timeout: 10000,
        debug: "staging",
      };
    case "production":
      console.log(`Using production settings`);
      return {
        enviorment: "production",
        timeout: 30000,
        debug: "production",
      };

    default:
      console.log(`Unknown enviorment`);
      return {
        enviorment: "unknown",
        timeout: 50000,
        debug: "unknown",
      };
  }
}

console.log(handleTestEnviorment("development"));

/**
 * Solution 3.3.2
 * Functions that takes status code and returns more information about the statusCode
 * @param {number} statusCode
 * @returns {string} returns string with information for the status code
 */
function processHTTPStatusCode(statusCode) {
  switch (statusCode) {
    case 200:
      return "Success - Request completed";
    case 201:
      return "Created - Resource created successfully";
    case 400:
      return "Bad Request - Check your data";
    case 401:
      return "Unautharized - Authentication required";
    case 404:
      return "Not Found - Resource doesn't exist";
    case 500:
      return "Server Error - Internal server error";
    default:
      return `Unexpected status code: ${statusCode}`;
  }
}

console.log(processHTTPStatusCode(400));

/**
 * Solution 3.3.3
 * Selects and returns a specific array of test data based on the test type.
 * @param {string} testType - The type of test data to select ('login', 'registration', 'api', 'performance').
 * @returns {Array<Object>} An array of test data objects.
 */
function selectTestDataSet(testType) {
  let testDataSet = [];
  let dataSetName = "";

  switch (testType.toLowerCase()) {
    case "login":
      testDataSet = [
        { user: "validUser", pass: "securePass", expected: true },
        { user: "invalidUser", pass: "wrongPass", expected: false },
        { user: "empty", pass: "empty", expected: false },
      ];
      dataSetName = "Login Test Data";
      break;

    case "registration":
      testDataSet = [
        { username: "newUser", email: "new@mail.com", expected: "success" },
        { username: "short", email: "short@mail.com", expected: "fail_length" },
        {
          username: "existingUser",
          email: "used@mail.com",
          expected: "fail_duplicate",
        },
      ];
      dataSetName = "Registration Test Data";
      break;

    case "api":
      testDataSet = [
        { endpoint: "/users/1", method: "GET", expectedStatus: 200 },
        { endpoint: "/items", method: "POST", expectedStatus: 201 },
        { endpoint: "/admin", method: "DELETE", expectedStatus: 403 },
      ];
      dataSetName = "API Endpoint Test Data";
      break;

    case "performance":
      testDataSet = [
        { page: "/", expectedLoadTime: "2s", expectedConnections: 5 },
        { page: "/dashboard", expectedLoadTime: "5s", expectedConnections: 10 },
      ];
      dataSetName = "Performance Test Data";
      break;

    default:
      testDataSet = [];
      dataSetName = "Unknown Test Type";
      break;
  }

  console.log(
    `
    ------------------------------------------------------------
        Selected Data Set: ${dataSetName}
     `
  );
  console.log(
    `
        Data Set Count: ${testDataSet.length} test scenarios.
    ------------------------------------------------------------
     `
  );

  return testDataSet;
}

console.log(selectTestDataSet("login"));

function complexTestDesicion (userRole, enviorment,testType,hasPermission) {
    let result = {
        allowed: null,
        reason: null,
        logLevel: null
    }

    if (userRole === "admin") {
        console.log("Trace: User is admin. Proceeding to enviorment check.")
        if (enviorment === "production") {
            console.log("Enviorment is production. Proceeding to check test type")
            if (testType === "critical") {
                console.log("Test is critical")
                result.allowed = true;
                result.reason = `Allowed: Admin executing ${testType} test on production`
                result.logLevel = "extra_logging"
            } else {
                console.log("Test is not critical")
                result.allowed = true;
                result.reason = `Allowed: Admin executing ${testType} test on production`
                result.logLevel = "standart_logging"
            }
        } else {
            console.log("Enviorment is not production. proceeding to allow all tests")
            result.allowed = true,
            result.reason = "Allowed: Enviorment is not production all test allowed"
            result.logLevel = "standart_loging"
        }
    } else if (userRole === "tester") {
        console.log("User is tester. Proceeding to check for permision.")
        if (hasPermission === true) {
            console.log("Tester has permision. Proceeding to check enviorment")
            if (enviorment != "production") {
                console.log("Enviroment is not production")
                result.allowed = true;
                result.reason = "User is tester and has premission to execute test in non production enviroment";
                result.logLevel = "standart_logging"
            } else {
                console.log("Enviorment is production")
                result.allowed = false;
                result.reason = "Tester cant execute test in production"
                result.logLevel = "forbbiden_testing"
            }

        }
    } else {
        result.allowed = false;
        result.reason = "Denied to execute tests"
        result.logLevel = "forbbiden_testing"
    }

    return result
}

console.log(complexTestDesicion("tester", "production", "not_critical", true))
