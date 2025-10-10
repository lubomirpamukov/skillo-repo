/**
 * Solution 1.3
 * @param {Array<string>} results ["PASS", "PASS", FAIL] 
 * @returns {Array<string>} [ '✅ PASSED', '❌ FAILED' ]
 */
function buildVisualStatuses (results) {
    let result = results.map(function(result){
        if (result === "PASS") {
            return `\u2705 PASSED`
        } else return `\u274C FAILED`
    })

    return result
}
console.log("=============== Build Visual Statuses =================")
console.log(buildVisualStatuses(["PASS", "FAIL"])); 
console.log("=======================================================")
/**
 * Solution 1.4
 * @param {Array<number>} times [11,22,33,44]
 * @returns {Array<string>} [ '11ms', '22ms', '33ms', '44ms' ]
 */
function formatExecutionTimes (times) {
    return times.map(function(time){
        return `${time}ms`
    })
}

console.log("=============== Format Execution Times ================")
console.log(formatExecutionTimes([11,22,33,44]))
console.log("=======================================================")

/**
 * Solution 1.5
 * Function that generates test email based on Id
 * @param {Array<number>} ids [1,2,3]
 * @returns {Array<string>} ['testuser1@example.com','testuser2@example.com','testuser3@example.com'
]
 */
function generateTestEmails (ids) {
    return ids.map(function(id){
        return `testuser${id}@example.com`
    })
}

console.log("=============== Generate Test Emails ==================")
console.log(generateTestEmails([1,2,3]))
console.log("=======================================================")

/**
 * Solution 1.6
 * @param {Array<number>} times [299,300,301,999,1000,1001]
 * @returns {Array<string>} [ 'Fast', 'Normal', 'Normal', 'Normal', 'Slow', 'Slow' ]
 */
function ratePerformance (times) {
    return times.map(function(time){
        if (time < 300) {
            return "Fast"
        } else if (time < 1000) {
            return "Normal"
        } else return "Slow"
    })
}

console.log("=============== Rate Performance ======================")
console.log(ratePerformance([299,300,301,999,1000,1001]))
console.log("=======================================================")

