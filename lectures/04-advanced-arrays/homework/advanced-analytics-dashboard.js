import { buildVisualStatuses } from "./task01/map-transformations.js";
import { getFailedResults, getHighPriorityTests, getSlowTests } from "./task02/filter-views.js";
import { countResultsByType, averageTimeForPassed, findSlowestTest } from "./task03/reduce-metrics.js";
import { sortIndiciesByTime, sortFailedByPriorityThenTime } from "./task04/sort-reports.js";
import { quickPassedAlphabetical, readTestRoad } from "./task05/destructing-utils.js";
const rawTestData = [
  ["login_test", "PASS", 438, "MEDIUM"],
  ["signup_test", "FAIL", 512, "HIGH"],
  ["password_reset_test", "PASS", 298, "LOW"],
  ["profile_update_test", "PASS", 367, "MEDIUM"],
  ["notifications_test", "SKIP", 0, "LOW"],
  ["settings_page_test", "FAIL", 1425, "MEDIUM"],
  ["logout_test", "PASS", 254, "LOW"],
];


//getting statuses array from rawTestData
const statuses = rawTestData.reduce(function(acc,curr){
    const [ , status] = curr;
    acc.push(status);
    return acc;
},[])


// getting names array from rawTestData
const names = rawTestData.reduce(function(acc,curr){
    const [name] = curr;
    acc.push(name);
    return acc;
},[])

//getting times array from rawTestData
const times = rawTestData.reduce(function(acc,curr){
    const [, , time] = curr;
    acc.push(time)
    return acc
},[])

console.log(`============== FORMATTED REPORTS ==========`)
const statusResults = buildVisualStatuses(statuses);
// making a console log with test name and test status
for (let i = 0; i < statuses.length; i ++) {
    const name = names[i];
    const status = statusResults[i];
    console.log(`${name} with status ${status}`);
}
console.log("==========================================");


console.log("======================== FILTERED VIEWS =================");
const failedTests = getFailedResults(statuses);
console.log(`Failed tests count: ${failedTests.length}`)

const highPriorityTests = getHighPriorityTests(rawTestData);
console.log(`High priority tests count: ${highPriorityTests.length}`)

const slowTests = getSlowTests(rawTestData);
console.log(`Slow tests count: ${slowTests.length}`);
console.log("=========================================================");



console.log("======================== METRICS ========================");
const resultsCount = countResultsByType(statuses);
console.log(`Tests passed: ${resultsCount[0]}`);
console.log(`Tests failed: ${resultsCount[1]}`);
console.log(`Tests skipped: ${resultsCount[2]}`);

const avgTimeForPassedTest = averageTimeForPassed(statuses, times);
console.log(`Average time for passed test: ${avgTimeForPassedTest.toFixed(1)}`);

const slowestTestIndex = findSlowestTest(names, times);
const slowestTest = rawTestData[slowestTestIndex]
console.log(`Slowest test: ${slowestTest[0]} with time ${slowestTest[2]}ms`)
console.log("=========================================================");


console.log("======================== SORTED ========================");
const fastestTests = sortIndiciesByTime(names, times).slice(0,3)
console.log("Fastest tests:")
console.log(rawTestData[fastestTests[0]])
console.log(rawTestData[fastestTests[1]])
console.log(rawTestData[fastestTests[2]])
console.log("-----------------------------------------------------------")
const sortedTestsByPriority = sortFailedByPriorityThenTime(rawTestData)
console.log(`Sorted tests by Priority and then by time:`)
console.log(sortedTestsByPriority)
console.log("=========================================================");


console.log("======================== QUICK PASSED ========================");
// returns tests names with time less than 500 ms
const quickPassedTests = quickPassedAlphabetical(rawTestData);

// takes the name of the quick tests and find the whole test information
let quckTestsFullData = [];
for (let i = 0; i < quickPassedTests.length; i++) {
    const testName = quickPassedTests[i];
    rawTestData.forEach(function(rawTest) {
        if (rawTest[0] === testName) {
            quckTestsFullData.push(rawTest)
        }
    })
}

// prints all the data for the quick tests
quckTestsFullData.forEach(function(test) {
    const result = readTestRoad(test)
    console.log(result)
})
console.log("==============================================================");
