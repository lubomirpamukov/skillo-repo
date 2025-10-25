const testUser1 = {
  username: "Pesho",
  email: "pesho@abv.bg",
  password: "secretSanta123",
  role: "user",
  active: true,
};

const caseList = [
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
    name: "profile_update_test",
    status: "FAIL",
    duration: 1050,
    priority: "high",
  },
  {
    name: "add_to_cart_test",
    status: "FAIL",
    duration: 880,
    priority: "high",
  },
];

function toJson(value) {
    return JSON.stringify(value)
}

function fromJson(jsonString) {
    return JSON.parse(jsonString)
}

let testUserJson = toJson(testUser1)

console.log(typeof testUser1)
console.log(testUser1);
console.log("---------------------------------")
console.log(typeof testUserJson)
console.log(testUserJson)
console.log("-------------------------------")

let backToObject = fromJson(testUserJson)

console.log(typeof backToObject)
console.log(backToObject)
console.log(backToObject.username)