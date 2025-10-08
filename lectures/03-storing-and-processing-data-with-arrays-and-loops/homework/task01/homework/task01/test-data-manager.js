/**
 * Solution 1.1.3
 * @returns {Array}
 */
function initializeTestData() {
  let testUsers = [];
  let testEnviorment = ["development", "staging", "production"];
  let browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];
  console.log(
    `
            ---------- Initialize Test Data -----------
            Length of tesUsers: ${testUsers.length}
            Length of testEnviorment: ${testEnviorment.length}
            Length of browserTypes: ${browserTypes.length}
            -------------------------------------------
        `
  );
  return [testUsers, testEnviorment, browserTypes];
}

console.log(initializeTestData());
const [testUsers, testEnviorment, browserTypes] = initializeTestData();

/**
 * Solution: 1.1.4
 *
 * @param {Array<string>} testUsers Array of test users
 * @param {Array<string>} testEnviorment Array enviorment names
 * @param {Array<string>} browserTypes Array of types of browsers
 * @returns {number} count of total array elements
 */
function displayTestDataInfo(testUsers, testEnviorment, browserTypes) {
  const firstUser = testUsers[0];
  const firstTestEnv = testEnviorment[0];
  const firstBrowserType = browserTypes[0];

  const lastUser = testUsers[testUsers.length - 1];
  const lastTestEnv = testEnviorment[testEnviorment.length - 1];
  const lastBrowserType = browserTypes[browserTypes.length - 1];

  console.log(
    `First enviorment: ${firstTestEnv}, Last browser: ${lastBrowserType}`
  );
  return testUsers.length + testEnviorment.length + browserTypes.length;
}

console.log(displayTestDataInfo(testUsers, testEnviorment, browserTypes));

/**
 * Solution 1.2.1
 * Function that adds a new element to an array and prints
 * @param {Array<string>} userArray
 * @param {string} newUserEmail
 * @returns {number} returns total length of the array
 */
function addTestUsers(userArray, newUserEmail) {
  userArray.push(newUserEmail);
  console.log(
    `
            ------------- Display Test Data -------------
            Initial Array length: ${userArray.length - 1}
            Current Array length: ${userArray.length}
            Complete Array: ${userArray}
            ---------------------------------------------
        `
  );

  return userArray.length;
}

addTestUsers(["User1", "User1", "User1", "User2"]);

/**
 * Solution 1.2.2
 * @returns {Array}
 */
function buildTestQue() {
  let testQue = [];
  console.log(`-------- Build Test Queue -----------`);
  testQue.push("login_test");
  console.log(`Added login_test, Queue length: ${testQue.length}`);
  testQue.push("logout_test");
  console.log(`Added logout_test, Queue length: ${testQue.length}`);
  testQue.push("registration_test");
  console.log(`Added registration_test, Queue length: ${testQue.length}`);
  testQue.push("password_reset");
  console.log(`Added password_test, Queue length: ${testQue.length}`);
  testQue.push("profile_update");
  console.log(`Added profile_test, Queue length: ${testQue.length}`);
  console.log(`-------------------------------------`);
  return testQue;
}

console.log(buildTestQue());

/**
 * Solution 1.2.3
 * @param {Array} testQueue
 * @returns {number} returns queue length
 */
function processTestQueue(testQueue) {
  let numberOfTests = testQueue.length;
  console.log(`----------- Process Test Queue --------------------`);
  while (testQueue.length > 0) {
    let lastTest = testQueue.pop();
    console.log(`Processing: ${lastTest}, Remaining: ${testQueue.length}`);
  }
  console.log(`All tests processed, queue is empty`);
  console.log(`-------------------------------------------------`);
  return numberOfTests;
}

console.log(processTestQueue(["Test1", "Test1", "Test1"]));

/**
 * Solution 1.2.4
 * @returns Array of nested arrays
 */
function manageTestResult() {
  let passedTests = [];
  let failedTests = [];
  let skippedTests = [];

  passedTests.push("login_functionality");
  passedTests.push("user_registration");

  failedTests.push("payment_processing");
  skippedTests.push("email_notifications");

  console.log(
    `
            ---------- Managa Test Result ------------
            Passed tests : ${passedTests.length}
            Failed tests: ${failedTests.length}
            Skipped tests: ${skippedTests.length}
            ------------------------------------------
        `
  );

  return [passedTests, failedTests, skippedTests];
}

console.log(manageTestResult());

/**
 * Solution 1.3.1
 * Function that switches first and last element positions
 * @param {Array<string>} enviromentsArray
 * @returns returns a new array with switched values
 */
function rotateTestEnviroments(enviromentsArray) {
  let rotatedArray = [...enviromentsArray];
  let firstEnviroment = rotatedArray[0];
  let lastEnviroment = rotatedArray.pop();
  rotatedArray.push(firstEnviroment);
  rotatedArray[0] = lastEnviroment;

  console.log(
    `
            ------------- Rotate Test Enviroment -------------
            Original array: ${enviromentsArray}
            Rotated array; ${rotatedArray}
            --------------------------------------------------
        
        `
  );
  return rotatedArray;
}

console.log(rotateTestEnviroments(["production", "staging", "development"]));

/**
 * Solution 1.3.2
 * Function that validates array and return array with validation data for each array
 * @param {Array} testUsers 
 * @param {Array} testEnviorments 
 * @param {Array} browserTypes 
 * @returns {Array} returns array with validation issues
 */
function validateTestDataIntegrity(testUsers, testEnviorments, browserTypes) {
  let validationIssues = [];
  testUsers.length === 0
    ? validationIssues.push("No test users defined")
    : validationIssues.push(null);
  testEnviorments.length < 2
    ? validationIssues.push("Insufficient enviroments")
    : validationIssues.push(null);
  browserTypes.length < 3
    ? validationIssues.push("Not enought browsers for testing")
    : validationIssues.push(null);

  console.log(
    `
            ------------- Validate Test Data Integrity -----------
            Test users result: ${validationIssues[0]}
            Enviroment results: ${validationIssues[1]}
            Browser Results: ${validationIssues[2]}
            ------------------------------------------------------

        `
  );

  return validationIssues;
}

console.log(validateTestDataIntegrity(["test"], [], ["chrome"]));

/**
 * Solution 1.3.3
 * Function that takes test arrays and create a report.
 * @param {Array} passedTests 
 * @param {Array} failedTests 
 * @param {Array} skippedTests 
 * @returns {Array<number>} returns [`totalTestCount`, `passedTestCount`, `failedTestCount`, `skippedTestsCount`]
 */
function generateTestReport (passedTests, failedTests, skippedTests) {
    let totalTests = passedTests.length + failedTests.length + skippedTests.length;
    let firstFailedTest = failedTests[0] !== undefined ? failedTests[0] : null
    console.log(
        `
            ------------ Generate Test Report -------------
            Complete test count: ${totalTests}
            ${firstFailedTest ? `First failed test: ${firstFailedTest}` : ''}
            -----------------------------------------------
        `
    )
    return [totalTests, passedTests.length, failedTests.length, skippedTests.length]
}

console.log(generateTestReport(["test1", "test2"],["test3"],["test4"]))
