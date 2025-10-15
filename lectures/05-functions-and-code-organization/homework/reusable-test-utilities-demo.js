import {
  countPassedTests,
  formatExecutionTime,
  findFailedTests,
} from "./task01/functions-declarations-basics.js";
import { isValidEmail } from "./task02/parameters-and-returns.js";
import {
  formatTestResultArrow,
  calculateAverageArrow,
} from "./task03/function-types.js";

const NAMES = ["login", "logout", "register", "update", "delete", "authorize"];
const RESULTS = ["PASS", "SKIP", "FAIL", "PASS", "PASS", "FAIL"];
const TIMES = [999, 450, 600, 1400, 4000, 750];

console.log(`=========== BASIC METRICS ====================`);
let passedTests = countPassedTests(RESULTS);
console.log("Passed tests:", passedTests);
console.log(
  "Success rate:",
  `${((passedTests / RESULTS.length) * 100).toFixed(1)}%`
);
console.log(`==============================================`);

console.log(`=========== FAILURES =====================`);
let failedTests = findFailedTests(NAMES, RESULTS);
console.log(failedTests);
console.log(`==========================================`);

console.log(`=========== FORMATED TIMES =====================`);
TIMES.map((time) => console.log(formatExecutionTime(time)));
console.log(`================================================`);

console.log(`=========== EMAIL VALIDATION (SAMPLE) =====================`);
let invalidEmail = isValidEmail("email") ? "valid" : "invalid";
let emptyStringEmail = isValidEmail("") ? "valid" : "invalid";
let validEmail = isValidEmail("lubo@gmail.com") ? "valid" : "invalid";
console.log("Invalid email:" , invalidEmail);
console.log("Empty string email:" , emptyStringEmail);
console.log("Valid email:" , validEmail);
console.log(`===========================================================`);
