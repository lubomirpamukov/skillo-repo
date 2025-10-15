const testEnviroment = "stagging";
let maxRetries = 3;

function runTest(testName) {
    let attempts = 1;
    let testResults;

    if (attempts === maxRetries) {
        testResults = "PASS";
    } else {
        testResults = "FAIL";
    }
    console.log(attempts) // here we can call attempts and use it becouse it inside the runTest function scope
    return `Test: ${testName} in enviroment: ${testEnviroment} with status: ${testResults}`
}

// console.log(attempts) uncomenting this like withh throw error: attempts is not defined, becouse we are trying to call it in the global scope,
//and the variable attempts scope is the function runTest

console.log(runTest("login"));

function configureRetries(newMaxRetries) {
    return maxRetries = newMaxRetries;
}


console.log("maxRetries before calling configureRetries:", maxRetries)
configureRetries(5)
console.log("maxRetries after calling configureRetries :",maxRetries)