/**
 * Solution 5.3
 * Function takes array and returns summary with array data
 * @param {Array} row 
 * @returns {string} summary string
 */
export function readTestRoad (row) {
    const [name,status,time,priority] = row;
    return `summary: ${status} ${name} (${time}ms) - ${priority}`;
};

// console.log(`============== Read Test Road ==================`);
// console.log(readTestRoad(["login_test", "FAIL", 450, "HIGH"]));
// console.log(`================================================`);

/**
 * Solution 5.4
 * @param {Array} tests 
 * @returns {Array} containing first and last elelemtn
 */
function extractFirstLast (tests) {
    const[first] = tests;
    const[last] = tests.slice(-1);
    return [first, last];
};

// console.log(`=============== Extract First Last =================`);
// console.log(extractFirstLast([1,3,2,5,4]));
// console.log(`====================================================`);

/**
 * Solution 5.5
 * Function that takes a collection tests a filters only passing test with time less than 500 ms
 * @param {Array<Array>} tests [ ["alpha", "PASS", 1450, "MEDIUM"] ]
 * @returns {Array<string>} name of passing tests with time under 500 ms
 */
export function quickPassedAlphabetical (tests) {
    return tests.filter(function(test) {
        const [ ,status,time] = test;
        if (status === "PASS" && time < 500) return test
    }).map(function(test) {
        const [name] = test;
        return name;
    }).sort();
}

const TESTS = [
    ["alpha", "PASS", 1450, "MEDIUM"],
    ["beta", "PASS", 450, "HIGH"],
    ["gama", "PASS", 450, "HIGH"],

];

// console.log(`============= Quick Passed Alphabetical tests ===================`);
// console.log(quickPassedAlphabetical(TESTS));
// console.log(`=================================================================`)