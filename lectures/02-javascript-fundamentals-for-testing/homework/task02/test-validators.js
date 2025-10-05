/**
 * Solution 2.1.3
 * Stricly comaprese 2 status codes
 * @param {string | number} expectedCode
 * @param {string | number} actualCode
 * @returns
 */
function validateStatusCode(expectedCode, actualCode) {
  const result = Number(expectedCode) === Number(actualCode) ? true : false;
  console.log(
    `
            -----------Validate Status Code -------------
            Expected Status Code : ${expectedCode}
            Actual Status Code: ${actualCode}
            Comparison result: ${result}
        `
  );

  return result;
}

console.log(validateStatusCode(404, "404"));

/**
 * Solution 2.1.4
 * Validates response time
 * @param {string | number} actualTime
 * @param {string | number} maxAllowedTime
 * @returns {boolean} returns true if acutalTime is <= maxAllowedTime
 */
function validateResponseTime(actualTime, maxAllowedTime) {
  const result = Number(actualTime) <= Number(maxAllowedTime);
  console.log(
    `Response time ${actualTime}ms is within limit ${maxAllowedTime}ms: ${result}`
  );
  return result;
}

console.log(validateResponseTime("1232", 244));

/**
 * Solution 2.1.5
 * @param {string | number} responseTime
 * @param {string | number} minTime
 * @param {string | number} maxTime
 * @returns {boolean} returns true if response time is witin the specific range
 */
function validatePerformanceRange(responseTime, minTime, maxTime) {
  const result =
    Number(responseTime) >= Number(minTime) &&
    Number(responseTime) <= Number(maxTime);

  console.log(
    `
            ------------ Validate Performance Range ------------
            Minimun Time for the response: ${minTime}ms
            Maximum Time for the response: ${maxTime}ms
            Actual Response Time: ${responseTime}ms
            Is Actual response time within the range: ${result ? "yes" : "no"}
            ----------------------------------------------------
        `
  );
  return result;
}

console.log(validatePerformanceRange(20, 1, 20));

/**
 * Solution 2.1.6
 * This function comapres 2 versions and return true if versions are different
 * @param {string} currentVersion
 * @param {string} requiredVersion
 * @returns {boolean} returns true if version are different and false if versions are the same
 */
function compareVersions(currentVersion, requiredVersion) {
  const result = currentVersion != requiredVersion;
  console.log(
    `
            ------------ Validate Perofmance Range -----------
            Current version: ${currentVersion}
            Required version: ${requiredVersion}
            Are versions different: ${result}
            --------------------------------------------------
        `
  );
  return result;
}

console.log(compareVersions("1.2.3", "1.2.3"));
/**
 * Solution 2.2.1
 * Checks if string "error" is present in the input message case insensitive
 * @param {string} errorMessage
 * @returns returns true if `error` exist in the message
 */
function validateErrorMessage(errorMessage) {
  const errorMessageNormalized = errorMessage.toLowerCase();
  const doErrorExist = errorMessageNormalized.includes("error");
  const result = doErrorExist ? errorMessageNormalized.indexOf("error") : null;
  doErrorExist ? console.log(`Error start index: ${result}`) : null;

  return doErrorExist;
}

console.log(validateErrorMessage("new eRror message"));

/**
 * Solution 2.2.2
 * Extracts ID from string
 * @param {string} responseText
 * @returns {string} returns extracted ID
 */
function extractUserIdFromResponse(responseText) {
  const result = responseText.indexOf("ID:");
  const output = responseText.slice(result + 3).trim();
  console.log(
    `
            ----------- Extract User ID From Response ---------
            Response text: ${responseText}
            Starting index of ID: ${result + 3}
            Extracted Identifier: ${output}
            ---------------------------------------------------
        `
  );

  return output;
}

extractUserIdFromResponse("User created successfully with ID:     12345");

/**
 * Solution 2.2.3
 * Validates if email format is valid.
 * @param {string} email
 * @returns {boolean} returns true if email has valid format
 */
function validateEmailFormat(email) {
  const hasAt = email.includes("@");
  const hasDot = email.includes(".");
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  const isAtBeforeDot = atIndex < dotIndex;

  console.log(
    `
      ---------- Validate Email Format -----------
      Email to validate: ${email}
      Do email contains "@": ${hasAt}
      Do email contains ".": ${hasDot}
      Is there a dot after "@": ${isAtBeforeDot}
      Is Email valid: ${hasAt && hasDot && isAtBeforeDot}
      --------------------------------------------
    `
  );
  return hasAt && hasDot && isAtBeforeDot;
}

console.log(validateEmailFormat("valid@email.com"));

/**
 * Solution 2.2.4
 * Creates array with the values from the provided csv file
 * @param {string} csvString
 * @returns {Array} returns array with the data from the csv file
 */
function processTestDataCSV(csvString) {
  const result = csvString.split(",");

  console.log(
    `
            ------------ Process Test Data -----------
            Data: ${csvString}
            Processed Data: [${result}]
            ------------------------------------------
        `
  );

  return result;
}

console.log(processTestDataCSV("test1,test2,test3,test4"));

/**
 * Solution 2.2.5
 * Normalizes string input
 * @param {string} testName
 * @returns {string} returns normalised string
 */
function normalizedTestName(testName) {
  const stepTrim = testName.trim();
  const stepNormalize = stepTrim.toLowerCase();
  const stepReplaceWhiteSpace = stepNormalize.replace(/ /g, "_");
  const stepLengthLimit = stepReplaceWhiteSpace.slice(0, 20);
  console.log(
    `
       ----------- Normalized Test Name --------------------------------
       Name input: ${testName}
       Step 1 remove white spaces: ${stepTrim}
       Step 2 normalize name input: ${stepNormalize}
       Step 3 replace white spaces with "_": ${stepReplaceWhiteSpace}
       Step 4 limit name to 20 characters: ${stepLengthLimit}
       ----------------------------------------------------------------- 
    `
  );
  return stepLengthLimit;
}

console.log(normalizedTestName("  This is a Test name    "));

/**
 * Solution 2.3.1
 * Validate API response with a specific rules returns true if API response passes
 * @param {number} statusCode
 * @param {number} responseTime
 * @param {boolean} hasData
 * @param {number} errorCount
 * @returns {boolean} true if api response passes validations
 */
export function validateCompleteAPIResponse(
  statusCode,
  responseTime,
  hasData,
  errorCount
) {
  const MAX_RESPONSE_TIME = 1000;
  const isStatusCode200AndResponseTimeWithinLimit =
    statusCode === 200 && responseTime <= MAX_RESPONSE_TIME;

  const hasDataAndNoErrors = hasData && errorCount === 0;
  console.log(
    `
        --------- Validate Complete API Response ---------------------------
        Is status code 200 and response time less than 1000ms: ${isStatusCode200AndResponseTimeWithinLimit}
        Does it contains data and no errors: ${hasDataAndNoErrors}
        Is the response valid: ${isStatusCode200AndResponseTimeWithinLimit && hasDataAndNoErrors}
        --------------------------------------------------------------------
    `
  );

  return isStatusCode200AndResponseTimeWithinLimit && hasDataAndNoErrors;
}

console.log(validateCompleteAPIResponse(200, 800, true, 0));
/**
 * Solution 2.3.2
 * Functions that grans enviorment acess based on the provided criteria
 * @param {string} userRole
 * @param {boolean} isAuthenticated
 * @param {string} enviorment
 * @returns {boolean} returns true if user is admin/tester , is authenticated, and enviroment is dev/staging
 */
function checkTestEnviromentAccess(userRole, isAuthenticated, enviorment) {
  const isAdminOrTester = userRole === "admin" || userRole === "tester";
  const isAuthorized = isAuthenticated && isAdminOrTester;
  const isEnvDevorStage = enviorment === "dev" || enviorment === "staging";

  console.log(
    `
            ------------ Check Test Enviorment Access --------------
            Is the user authenticated as "admin" or "tester": [${isAdminOrTester}]
            Is enviorment developlment or staging: [${isEnvDevorStage}]
            Access granted: [${isAuthorized && isEnvDevorStage}]
            --------------------------------------------------------
        `
  );
  return isAuthorized && isEnvDevorStage;
}

console.log(checkTestEnviromentAccess("admin", true, "dev"));

/**
 *Solution 2.3.3
 * @param {boolean} hasErrors
 * @param {boolean} isCancelled
 * @param {boolean} isTimeout
 * @returns {boolean} returns true if there are no errors , the test not cancelled, and the time did not run out
 */
function validateTestNotFailed(hasErrors, isCancelled, isTimeout) {
  const notHasErrors = !hasErrors;
  const notIsCancelled = !isCancelled;
  const notIsTimeOut = !isTimeout;

  console.log(
    `
            -------------- Validate Test not failed ----------------
            Test has errors: ${hasErrors}
            Test cancelled: ${isCancelled}
            Test timeout: ${false}
        `
  );
  return notHasErrors && notIsCancelled && notIsTimeOut;
}

console.log(validateTestNotFailed(false, false, false));

/**
 * Solution 2.3.4
 * Function executes complex validation logic and returns true or false
 * @param {number*} statusCode 
 * @param {number} responseTime 
 * @param {string} userRole 
 * @param {number} dataCount 
 * @param {string} enviorment 
 * @returns {boolean}
 */
function complexValidationScenario(
  statusCode,
  responseTime,
  userRole,
  dataCount,
  enviorment
) {
  const MAX_RESPONSE_TIME = 500;
  const isStatus200AndResponseLessThan500 =
    statusCode === 200 && responseTime < MAX_RESPONSE_TIME;
  const isAdminAndEnviromentDev = userRole === "admin" && enviorment === "dev";

  console.log(
    `
            ------------- Complex Validation Scenario ------------------
            Is status code 200 : ${statusCode === 200}
            Is response time less than ${MAX_RESPONSE_TIME}ms: ${responseTime < MAX_RESPONSE_TIME}
            Are both conditions true: ${isStatus200AndResponseLessThan500 ? "yes" : "no"}

            Is user role admin: ${userRole === "admin"}
            Is Enviorment development: ${enviorment === "dev"}
            Are both conditions true: ${isAdminAndEnviromentDev ? "yes" : "no"}

            Return true if status code is 200 and response time is less than 500 or user is admin and enviorment is "dev"
            -------------------------------------------------------------
        `
  );

  return isStatus200AndResponseLessThan500 || isAdminAndEnviromentDev;
}

console.log(complexValidationScenario(200, 400, "admin" , 3, "dev"))
