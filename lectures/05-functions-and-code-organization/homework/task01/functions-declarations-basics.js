export function countPassedTests(results) {
  let counter = 0;
  for (let i = 0; i < results.length; i++) {
    const currentResult = results[i];
    if (currentResult === "PASS") {
      counter++;
    }
  }
  return counter;
}

const TEST_STATUS = ["PASS", "FAIL", "SKIP", "PASS"];
const TEST_NAMES = ["login", "logout", "register", "delete_account"]

console.log(countPassedTests(TEST_STATUS));

export function formatExecutionTime(miliseconds) {
  return miliseconds < 1000
    ? `${miliseconds}ms`
    : `${(miliseconds / 1000).toFixed(1)}s`;
}

console.log(formatExecutionTime(999))


export function findFailedTests (testNames, testResults) {
    let failedTest = [];
    for (let i = 0; i < testNames.length; i++) {
        const currentName = testNames[i];
        const currentResult = testResults[i];
        if (currentResult === "FAIL") failedTest.push(currentName);
    }

    return failedTest
}

console.log(findFailedTests(TEST_NAMES, TEST_STATUS))


