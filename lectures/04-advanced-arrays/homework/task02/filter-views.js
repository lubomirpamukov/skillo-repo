/**
 * Solution 2.3
 * Function that filters only failed results
 * @param {Array<string>} results ["FAIL", "PASS"]
 * @returns {Array<string>} ["FAIL"]
 */
function getFailedResults(results) {
  return results.filter(function (result) {
    return result === "FAIL";
  });
}

console.log(`============= Get Failed Results =================`)
console.log(getFailedResults(["FAIL", "PASS"]))
console.log("==================================================")

/**
 * Solution 2.4
 * Function that filters tests with high priority
 * @param {Array<Array>} tests [["test1", "PASS", 450, "HIGH"],["test2", "PASS", 1450, "medium"]]
 * @returns {Array<Array>} [ [ 'test1', 'PASS', 450, 'HIGH' ] ]
 */
function getHighPriorityTests(tests) {
  return tests.filter(function (test) {
    const [testName, status, executionTime, priority] = test;
    return priority === "HIGH";
  });
}

const TESTS = [
  ["test1", "PASS", 450, "HIGH"],
  ["test2", "PASS", 1450, "MEDIUM"],
];

console.log(`================ Get High Priority Tests =======================`);
console.log(getHighPriorityTests(TESTS));
console.log(`================================================================`);

/**
 * Solution 2.5
 * Function that filters all test slower than 1000ms
 * @param {Array<Array>} tests [
    ["test1", "PASS", 450, "HIGH"],
    ["test2", "PASS", 1450, "medium"],
  ]
 * @returns {Array<Array>} [ [ 'test2', 'PASS', 1450, 'medium' ] ]
 */
function getSlowTests(tests) {
  return tests.filter(function (test) {
    const [name, status, time, priority] = test;
    return time > 1000;
  });
}

console.log(`====================== Get Slow Tests============================`);
console.log(getSlowTests(TESTS));
console.log(`=================================================================`);

/**
 * Solution 2.6
 * Function filters test names by keyword
 * @param {Array<string>} names ["name1", "nme2", "nae3"]
 * @param {string} keyword "name"
 * @returns [ 'name1' ]
 */
function findTestByKeyword (names, keyword) {
    return names.filter(function(name){
        return name.includes(keyword);
    })
}

console.log(`=================== Find Test By Keyword =========================`);
console.log(findTestByKeyword(["name1", "nme2", "nae3"], "name"));
console.log(`==================================================================`);

