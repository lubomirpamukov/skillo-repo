const testConfig = {
  suiteName: "loginTest",
  enviroment: "stagging",
};

testConfig.maxTimeoutMs = 2000;
testConfig.retryCount = 3;

const testUser1 = {
  username: "Pesho",
  email: "pesho@abv.bg",
  password: "secretSanta123",
  role: "user",
  active: true,
};

const testUser2 = {
  username: "Georgi",
  email: "gemorgi@gmail.com",
  password: "tralala123",
  role: "pastor",
  active: false,
};

const testUser3 = {
  username: "Lucky",
  email: "lucky@luk.com",
  password: "zamundabanana123",
  role: "admin",
  active: false,
};

testUser3["role"] = "user";

const testCases = [
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
  {
    name: "search_functionality_test",
    status: "PASS",
    duration: 760,
    priority: "medium",
  },
  {
    name: "add_to_cart_test",
    status: "FAIL",
    duration: 880,
    priority: "high",
  },
  {
    name: "remove_item_cart_test",
    status: "PASS",
    duration: 640,
    priority: "low",
  },
];

export function getFailedTests(cases) {
  return cases.filter((test) => {
    return test.status === "FAIL";
  });
}

//console.log("getFailedTests result: ", getFailedTests(testCases));

export function getHighPriorityNames(cases) {
  return cases
    .filter((testCases) => testCases.priority === "high")
    .map((testCases) => testCases.name);
}

//console.log("getHighPriorityNames result: ", getHighPriorityNames(testCases));

export function getTotalDuration(cases) {
  return cases.reduce((acc, currentCase) => {
    return acc + currentCase.duration;
  }, 0);
}

//console.log("getTotalDuration result: ", getTotalDuration(testCases));
