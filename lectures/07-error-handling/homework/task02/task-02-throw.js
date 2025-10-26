function validateRequired(value, fieldName) {
  if (!value) throw new Error(fieldName + " is required");
  return fieldName + " " + value;
}

//console.log(validateRequired(null, "Hello"));

function validateArray(data, fieldName) {
  if (!Array.isArray(data)) throw new TypeError(fieldName + " must be array");
  return `${fieldName}: ${data}`;
}

try {
  console.log(validateArray("string", "tests"));
} catch (error) {
  console.log(error.name, error.message);
}

function validateRange(value, min, max, fieldName) {
  if (value < min || value > max)
    throw new RangeError(fieldName + ` must be between ${min} and ${max}`);
  return `${fieldName}: ${value}`;
}

try {
  console.log(validateRange(10, 12, 20, "Failed Tests"));
} catch (error) {
  console.log(error.name, error.message);
}

function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".") || email.length <= 5)
    throw new Error("Invalid email format");
  return email;
}

try {
  console.log(validateEmail("12@."));
} catch (error) {
  console.log(error.name, error.message);
}

function validatePassword(password) {
  let hasNumber = false;
  let isValidLength = password.length >= 8;
  for (let char of password) {
    if (!isNaN(char) && char !== " ") {
      hasNumber = true;
      break;
    }
  }

  if (!hasNumber || !isValidLength)
    throw new Error("Password does not meet minimum requirements");
  return true;
}

try {
  console.log(validatePassword("lubo"));
} catch (error) {
  console.log(error.name, error.message);
}

function validateTestResults(results) {
  results.forEach((result, index) => {
    if (
      !(
        result.status === "PASS" ||
        result.status === "FAIL" ||
        result.status === "SKIP"
      ) &&
      !result.duration >= 0
    )
      throw new Error(`Invalid test result at index ${index}`);
  });

  return true;
}

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
    status: "PASSa",
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
];

try {
  console.log(validateTestResults(cases));
} catch (error) {
  console.log(error.name, error.message);
}
