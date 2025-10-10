/**
 * Solution 4.3
 * @param {Array<string>} names ["login_test", "logout_test", "register_test"]
 * @param {Array<number>} times [1000,2000,300]
 * @returns {Array<number>} [ 2, 0, 1 ] sorted idex array by time execution
 */
function sortIndiciesByTime (names, times) {
    let indices = names.map(function(_, index) {
        return index;
    });
    return indices.slice().sort(function(a,b) {
       return  times[a] - times[b];
    });
};

// console.log("======================= Sort Indexies By Time ================================");
// console.log(sortIndiciesByTime(["login_test", "logout_test", "register_test"], [1000,2000,300]));
// console.log(`==============================================================================`);

/**
 * Solution 4.4
 * Function orders items based on their length
 * @param {Array<string>} names ["login_test", "logout_test", "registration_test"]
 * @returns {Array<string>} [ 'Name', 'Name3', 'Name123' ]
 */
function sortByNamesLength (names) {
    return names.slice().sort(function(a,b) {
        return a.length - b.length;
    })
}

// console.log(`====================== Sort By Names Length =======================`);
// console.log(sortByNamesLength(["login_test", "logout_test", "registration_test"]));
// console.log(`===================================================================`);

/**
 * Solution 4.5
 * Function that takes a string of priorities and orders them base on importance
 * @param {Array<string>} priorities ["HIGH", "HIGH", "LOW", "MEDIUM"]
 * @returns {Array<string>} ordered by priority [ 'HIGH', 'HIGH', 'MEDIUM', 'LOW' ]
 */
function sortByPriority (priorities) {
    let priorityMap = {
        HIGH: 1,
        MEDIUM: 2,
        LOW: 3
    }

    return priorities.slice().sort(function(a,b) {
        return priorityMap[a] - priorityMap[b]
    })
}

// console.log(`================= Sort By Priority ====================`);
// console.log(sortByPriority(["HIGH", "HIGH", "LOW", "MEDIUM"]));
// console.log(`=======================================================`);

/**
 * Solution 4.6
 * Function that takes array of tests and sort them by their priority
 * @param {Array<Array>} tests [["test2", "PASS", 1450, "MEDIUM"],["test1", "PASS", 450, "HIGH"],["test1", "PASS", 450, "HIGH"]]
 * @returns sorted on priority copy of the array
 */
function sortFailedByPriorityThenTime (tests) { 
    let priorityMap = {
        HIGH: 1,
        MEDIUM: 2,
        LOW: 3
    };

    return tests.slice().sort(function(a,b) {
        const [ , , ,priorityA] = a;
        const [ , , ,priorityB] = b;
        return priorityMap[priorityA] - priorityMap[priorityB];
    })
}
const TESTS = [
    ["test2", "PASS", 1450, "MEDIUM"],
    ["test1", "PASS", 450, "HIGH"],
    ["test1", "PASS", 450, "HIGH"],

];
console.log(`============ Sort Failed By Priority Then Time ====================`);
console.log(sortFailedByPriorityThenTime(TESTS));
console.log(`===================================================================`)