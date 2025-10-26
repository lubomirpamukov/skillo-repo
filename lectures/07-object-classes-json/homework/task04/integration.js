import { TestUser, TestCase } from "../task02/task-02-classes.js";
import {
  getFailedTests,
  getHighPriorityNames,
  getTotalDuration,
} from "../task01/task-01-objects.js";
import { toJson } from "../task03/task-03-json.js";

const users = [
  new TestUser("bomani", "bomani@abv.bg", "supersecurePass123", "admin", false),
  new TestUser(
    "bomani1",
    "bomani1@abv.bg",
    "super1securePass123",
    "user",
    false
  ),
];

const cases = [
  {
    name: "goto_dashboard_test",
    status: "FAIL",
    duration: 900,
    priority: "medium",
  },
  {
    name: "login_valid_credentials_test",
    status: "PASS",
    duration: 350,
    priority: "high",
  },
  {
    name: "login_invalid_password_test",
    status: "PASS",
    duration: 420,
    priority: "medium",
  },
  {
    name: "logout_test",
    status: "PASS",
    duration: 280,
    priority: "low",
  },
  {
    name: "profile_update_test",
    status: "FAIL",
    duration: 1050,
    priority: "high",
  },
];

console.log("Test case before dot notaion update: ", cases[1]);
cases[1].status = "FAIL";
cases[1].duration = 1500;
console.log("Test case after dot notaion update: ", cases[1]);
console.log("===============================================");


const failedTests = getFailedTests(cases);
const highPriorityTests = getHighPriorityNames(cases);
const totalTestDuration = getTotalDuration(cases);

console.log("========= BASIC METRICS ===============");
console.log(
  `Total cases ${cases.length}, total duration ${totalTestDuration}ms, number of failed tests ${failedTests.length}`
);
console.log("=========== PRIORITY HIGHLIGHTS ================");
console.log(
    `High priority test names` , highPriorityTests
)
console.log("================ USER VALIDATION =================");
users.forEach((user) => {
    console.log(`${user.getInfo()} ${user.validate()}`)
})
console.log("========== JSON SUMMARY ===================");
const mainFunctionalities = {
    suiteName: "main_functionality",
    enviroment: "dev",
    totalCases: cases.length,
    failedCount: failedTests.length,
    highPriorityTests: highPriorityTests
}

const jsonSuiteData = toJson(mainFunctionalities)
console.log(`Json object of type ${typeof jsonSuiteData}: `, jsonSuiteData)