/**
 * Solution 3.3
 * Function that takes array with statuses and sums each status counts
 * @param {Array<string>} results takes ["PASS", "FAIL", "SKIP"] return [1,1,1]
 * @returns {Array<number>} [ passCount, failedCount, skippedCount ]
 */
function countResultsByType (results) {
    return results.reduce(function(acc,cur){
        let [passCount, failedCount, skippedCount] = acc;
        
        if (cur === "PASS") passCount ++
        else if (cur === "FAIL") failedCount ++
        else if (cur == "SKIP") skippedCount ++
        return [passCount, failedCount, skippedCount];
    },[0,0,0]);
}

console.log(`================= Count results By Type ============================`);
console.log(countResultsByType(["PASS", "FAIL", "SKIP"]))
console.log(`====================================================================`);

/**
 * Solution 3.4
 * Function that calculates average time for passed tests
 * @param {Array<string>} results ["PASS", "PASS", "FAIL"]
 * @param {Array<number>} times [100, 200, 300]
 * @returns {number} average pass time for test
 */
function averageTimeForPassed(results,times) {
    let [totalTime, passCount] = results.reduce(function(acc, cur, index){
        let [totalTime, passedCount] = acc;
        const time = times[index];
        if (cur === "PASS") {
            totalTime += time;
            passedCount++;
        }
        return [totalTime, passedCount];
    }, [0,0]);

    return passCount > 0 ? totalTime / passCount.toFixed() : 0;
}

const TEST_STATUSES = ["PASS", "PASS", "FAIL"];
const TEST_RESPONSE_TIMES = [100, 200, 300]

console.log(`===================== Average Time For Passed ===========================`);
console.log(averageTimeForPassed(TEST_STATUSES,TEST_RESPONSE_TIMES ));
console.log(`==========================================================================`);

/**
 * Solution 3.5
 * Function that finds the index of the slowers test
 * @param {Array<string>} names ["Test1", "Test2", "Test3"]
 * @param {Array<number>} times [400,100,200]
 * @returns {number} index of the slowest test
 */
function findSlowestTest (names, times) {
   if (names.length <= 0 || times.length <= 0) return - 1;
   let slowestTestTime = 0;
   return names.reduce(function(acc, name, index){
    let testTime = times[index];
    if (testTime > slowestTestTime) {
        slowestTestTime = testTime;
        acc = index;
    }
    return acc;
   }, 0);
};

console.log(`======================= Find Slowest Test ===========================`);
console.log(findSlowestTest(["Test1", "Test2", "Test3"], [400,100,200]));
console.log(`=====================================================================`);


