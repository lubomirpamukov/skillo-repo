/**
 * Solution 2.1.3
 *Function that process objects in an array
 * @param {Array<Object>} testUsers a
 * @returns {number} number of processed users
 */
function processAllTestUsers(testUsers) {
  console.log(`------------ Process All Test Users ---------------`);
  for (let i = 0; i < testUsers.length; i++) {
    const currentUser = testUsers[i];
    console.log(`Processing user ${i + 1} : ${currentUser.email}`);
  }
  console.log(`Total users processed: ${testUsers.length}`);
  console.log(`---------------------------------------------------`);
  return testUsers.length;
}
const TEST_USERS = [
  {
    email: "test@mail.com",
  },
  {
    email: "test2@mail.com",
  },
  {
    email: "test3@mail.com",
  },
  {
    email: "test4@mail.com",
  },
];
console.log(processAllTestUsers(TEST_USERS));

/**
 * Solution 2.1.4
 * Function that filters emails based on validity, returns 2 arrays [`validEmails`, `invalidEmails`]
 * @param {Array<string>} emailArray
 * @returns {[Array<string>]} returns [`validEmails`, `invalidemails`]
 */
function validateAllEmails(emailArray) {
  let validEmails = [];
  let invalidEmails = [];

  console.log(`------------------ Validate All Emails ---------------------`);
  for (let i = 0; i < emailArray.length; i++) {
    let currentEmail = emailArray[i];
    let isValid = currentEmail.includes("@");
    isValid ? validEmails.push(currentEmail) : invalidEmails.push(currentEmail);
    console.log(
      `Email ${i + 1} : ${currentEmail} - ${isValid ? "VALID" : "INVALID"}`
    );
  }
  console.log(`Total emails count: ${emailArray.length}`);
  console.log(`Valid emails count: ${validEmails}`);
  console.log(`Invalid emails count: ${invalidEmails}`);
  console.log(`-----------------------------------------------------------`);

  return [validEmails, invalidEmails];
}
const TEST_EMAILS = [
  "test@mail.com",
  "test2@mail.com",
  "test3mail.com",
  "test4@mail.com",
];

console.log(validateAllEmails(TEST_EMAILS));

/**
 * Solution 2.1.5
 * Function that takes response times calculates total and average response time
 * @param {Array<number>} responseTimesArray
 * @returns {Array<number>} returns [`totalTime`, `averageTime`, `slowestTime`]
 */
function calculateResponseTimes(responseTimesArray) {
  let totalTime = 0;
  let slowestTime = 0;

  console.log(`--------------- Calculate Response Time ------------------`);
  for (let i = 0; i < responseTimesArray.length; i++) {
    let currentResponseTime = responseTimesArray[i];
    totalTime += currentResponseTime;
    if (currentResponseTime > slowestTime) slowestTime = currentResponseTime;
    console.log(`Response time ${i + 1} : ${currentResponseTime}ms`);
  }
  const avgTime = totalTime / responseTimesArray.length;
  console.log(`Average response time: ${avgTime}ms`);
  console.log(`Slowest response time: ${slowestTime}ms`);
  console.log(`----------------------------------------------------------`);
  return [totalTime, avgTime, slowestTime];
}

const TEST_RESPONSE_TIMES = [123, 444, 566, 345, 2345];
console.log(calculateResponseTimes(TEST_RESPONSE_TIMES));

/**
 * Solution 2.1.6
 * Function that mimics test execution and returns a string with test name and fail/pass value
 * @param {Array<object>} testCases 
 * @returns  {Array<string>} returns array with a value fail/pass value for each test
 */
function simulateTestExecution(testCases) {
  let executionResults = [];

  for (let i = 0; i < testCases.length; i++) {
    let currentTest = testCases[i];
    let isPassing = i % 3 === 0;
    let result = `${currentTest.name}: ${isPassing ? "PASS" : "FAIL"}`;
    executionResults.push(result);
  }

  let passCount = 0;
  let failCount = 0;
  for (let i = 0; i < executionResults.length; i++) {
    executionResults[i].includes("PASS") ? passCount++ : failCount++;
  }
  console.log(
    `
        -------------- Simulate Test Execution -----------------
        Executed Tests: ${executionResults}
        Test Passed: ${passCount}
        Test Failed: ${failCount}
        --------------------------------------------------------    
        `
  );
  return executionResults
}

const TESTS = [{name: "test4"},{name: "test5"},{name: "test6"},{name: "test7"},{name: "test8"},{name: "test9"},{name: "test10"}]
console.log(simulateTestExecution(TESTS))

/**
 * Solution 2.2.1
 * @param {string} testName 
 * @returns {Array<boolean,number>} returns array with innformation [`testPassed`, `arrempt`]
 */
function retryFailedTest (testName) {
    let attempts = 0;
    let maxRetries = 3;
    let testPassed = false;

    console.log(`-------------- Retry Failed Test -----------------------`)
    while (attempts <= maxRetries && !testPassed) {
        
        if (attempts === 3) testPassed = true;
        console.log(`Retry attempt ${attempts} for ${testName}: ${testPassed ? "PASS" : "FAIL"}`)
        
        attempts++;
    }
    console.log(`--------------------------------------------------------`)
    if (testPassed) {
        return  [testPassed, attempts]
    } else return null
}

console.log(retryFailedTest("test1"))

//2.2.2
/**
 * Solution 2.2.2
 * @param {Array<string>} testQueue 
 * @returns returns array with number of processed tests and array with the remaining unprocessed tests
 */
function monitorTestQue (testQueue) {
    let processedCount = 0;
    let maxProcessingTime = 10;
    let originalTestLength = testQueue.length

    console.log(`--------------- Monitor Test Que ----------------------------------------------------`)
    while(testQueue.length > 0 && processedCount < maxProcessingTime) {
        testQueue.pop();
        processedCount ++;
        console.log(`Processed test ${processedCount}, Queue remaining: ${testQueue.length}`);
    }
    console.log(`Total number of tests: ${originalTestLength}`)
    console.log(`Processed tests: ${processedCount}`)
    console.log(`Reason for stoping: ${testQueue.length === 0 ? "Test Queue empty" : "Time Limit Reached"}`)
    console.log(`--------------------------------------------------------------------------------------`)
    return [processedCount, testQueue]
}

console.log(monitorTestQue(['test1','test2','test3','test1','test2','test3','test1','test2','test3','test1','test2','test3','test1','test2','test3',]))

/**
 * Solution 2.2.3
 * @param {number} expectedDuration 
 * @returns {Array<boolean, number>}
 */
function waitForTestCompletion (expectedDuration) {
    let elapsedTime = 0;
    let testComplete = false;

    console.log(`---------------Wait For Test Completion -----------------`)
    while (!testComplete && elapsedTime < expectedDuration * 2) {
        if (elapsedTime >= expectedDuration) testComplete = true;
        console.log(`Waiting elapsed time: ${elapsedTime}`)
        elapsedTime++;
    }
    console.log(`Test result: ${testComplete ? "Completed" : "Timeout"}`);
    console.log(`---------------------------------------------------------`)

    return [testComplete,elapsedTime]
}

console.log(waitForTestCompletion(10));

/**
 * Soulution 2.2.4
 * Functions that processes test results and return count of passed tests fail tests and sucess percentage.
 * @param {Array} testResults 
 * @returns {Array<number>} returns array with [`passCount`, `failCount`, `successRate`]
 */
function processTestResultsStream (testResults) {
    let passCount = 0;
    let failCount = 0;
    let currentIndex = 0;

    console.log(`-------- Process Test Results Stream -------------`)
    while (currentIndex < testResults.length) {
        let currentResult = testResults[currentIndex];
        if (currentResult === "pass") {
            passCount ++;
        }else failCount++;

        console.log(`Processing result ${currentIndex + 1}: ${currentResult}`)
        currentIndex++;
    }
    console.log(`--------------------------------------------------`)

    let successRate = passCount / testResults.length * 100;
    return [passCount, failCount, successRate]
}

console.log(processTestResultsStream(["pass", "pass", "fail","pass"]))

/**
 * Solution 2.3.1
 * Function that process array with for and while loop and compares performance
 * @param {Array} dataArray 
 * @returns {Array<number>} [`forProcessCount`, `whileProcessCount`]
 */
function compareLoopApproaches (dataArray) {
    console.log(`---------- Compare for loop vs while loop approaches ----------------`);
    
    let forProcessCount = 0;
    console.log(`For Loop Starts`)
    let forLoopStart = Date.now();
    for (let i = 0; i < dataArray.length ; i ++) {
        console.log(`For loop processed item number: ${forProcessCount++} => element data: ${dataArray[i]}`)
    }
    let forLoopEnd = Date.now()

    console.log(`For loop processed ${forProcessCount} in ${forLoopEnd - forLoopStart}ms`)
    console.log("For Loop ends")
    console.log(`======================================================================`)
    console.log(`While Loop starts`)
    let index = 0;
    let whileProcessCount = 0;
    let whileLoopStart = Date.now();
    while (index < dataArray.length) {
        console.log(`While loop processed item number: ${whileProcessCount++} => element data ${dataArray[index]}`)
        index++
    }
    let whileLoopEnd = Date.now()
    console.log(`While loop processed ${whileProcessCount} in ${whileLoopEnd - whileLoopStart}ms`)

    return [forProcessCount, whileProcessCount]
}

console.log(compareLoopApproaches([1,2,3,4,5,65,7]))

