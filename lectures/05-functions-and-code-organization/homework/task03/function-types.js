function formatTestResultDecl(testName, status) {
  let icon = status === "PASS" ? "✅" : "❌";
  return `${icon} ${testName} ${status}`;
}

console.log("Delcaration function", formatTestResultDecl("login", "PASS"));
console.log("Delcaration function", formatTestResultDecl("logout", "FAIL"));

const formatTestResultExpression = function (testName, status) {
  let icon = status === "PASS" ? "✅" : "❌";
  return `${icon} ${testName} ${status}`;
};

console.log("Expression function", formatTestResultExpression("login", "PASS"));
console.log(
  "Expression function",
  formatTestResultExpression("logout", "FAIL")
);

const formatTestResultArrow = (testName, status) => {
  let icon = status === "PASS" ? "✅" : "❌";
  return `${icon} ${testName} ${status}`;
};

console.log("Arrow function", formatTestResultArrow("login", "PASS"));
console.log("Arrow function", formatTestResultArrow("logout", "FAIL"));

function calculateAverageDecl(numbers) {
  const sum = numbers.reduce(function (sum, curNum) {
    return (sum += curNum);
  }, 0);

  return sum / numbers.length;
}

console.log(
  "Calculate Average function declaration:",
  calculateAverageDecl([1, 2, 3])
);

const calculateAverageExpression = function (numbers) {
  let sum = numbers.reduce((sum, cur) => sum + cur);
  return sum / numbers.length;
};

console.log(
  "Calculate Average function expression:",
  calculateAverageExpression([1, 2, 3])
);

const calculateAverageArrow = (numbers) => {
  let sum = numbers.reduce((sum, cur) => sum + cur);
  return sum / numbers.length;
};

console.log(
  "Calculate Average function arrow:",
  calculateAverageExpression([1, 2, 3])
);
