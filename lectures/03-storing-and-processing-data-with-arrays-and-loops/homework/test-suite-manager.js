import {
  initializeTestData,
  buildTestQue,
} from "./task01/test-data-manager.js";
import {
  processAllTestUsers,
  simulateTestExecution,
  retryFailedTest
} from "./task02/test-processing-engine.js";
import { analyzeTestResults, generateDetailedTestReport } from "./task03/advanced-test-processor.js";

function executeFullTestSuite() {
  let [users, enviroments, browsers] = initializeTestData();
  console.log(
    `
        =============== Finish data inicialization ==============
            Created users: ${users}
            Created enviroments: ${enviroments}
            Created browser types: ${browsers}
        =========================================================    
        `
  );
  let usersCopy = [...users];
  buildTestQue(usersCopy);

  console.log(
    `
            ========== BUILDING TEST QUEUE AND ADDING USERS =================
            Final test queue result: ${usersCopy}
            =================================================================
        `
  );
  let processedUsers = processAllTestUsers(users);

  console.log(
    `
            ============== PROCESSED USERS ====================
            Processed users result : ${processedUsers}
            ====================================================
        `
  );
  const TEST_NAME = ["test1", "test2", "test3", "test4"];
  const TEST_STATUS = ["pass", "failed", "pass", "pass"];
  const EXECUTION_TIME = [123, 3456, 4567, 234];
  let [criticalFailures, slowTests, quickPasses] = analyzeTestResults(
    TEST_NAME,
    TEST_STATUS,
    EXECUTION_TIME
  );

  console.log(
    `
            ================== ANALYZED TEST RESULTS =================
            Critical faliures: ${criticalFailures}
            Slow Tests: ${slowTests}
            Quick Tests: ${quickPasses}
            ==========================================================
        `
  );
}


function runTestSuiteDemo() {
  let [users, enviroments, browsers] = initializeTestData();
  let executionResults = simulateTestExecution(users);
  let failedTestNames = [];

  for (let i = 0; i < executionResults.length; i++) {
    const curTest = executionResults[i];
    if (curTest.includes("FAIL")) {
        const failedTestName = curTest.split(":")[0];
        failedTestNames.push(failedTestName)
    }
  }
  console.log(`========== FAILED TESTS ==============`)
  console.log(`Failed tests: ${failedTestNames}`)
  console.log(`=======================================`)

  while (failedTestNames.length > 0) {
    const curTest = failedTestNames.pop();
    const [testPassed, attempt] = retryFailedTest(curTest)
    console.log(`Test ${testPassed} on attempt ${attempt}`)
  }
  let analyzedResults = analyzeTestResults(users, ["pass","pass","pass"], [123,456,789])
  console.log(analyzedResults)

  generateDetailedTestReport(users, ["pass", "pass", "pass"], [123,456,789], enviroments);
  executeFullTestSuite()
}

runTestSuiteDemo();
