import { formatExecutionTime } from "../task01/functions-declarations-basics.js";

export function isValidEmail(email) {
  const hasAtSymbol = email.includes("@");
  const hasDotSymbol = email.includes(".");
  const isNotEmpty = email.length > 0;

  return hasAtSymbol && hasDotSymbol && isNotEmpty;
}

console.log("isValid with valid email:",isValidEmail("test@example.com"));
console.log("isValid with invalid email:",isValidEmail("test@examplecom"));
console.log("is valid with empty string email",isValidEmail(""));

export function formatDuration(miliseconds) {
  return formatExecutionTime(miliseconds);
}

console.log("formatDuration above 1000:",formatDuration(1999));
console.log("formatDuration below 1000:",formatDuration(999));

export function generateTestEmail(baseName, domain = "testcompany.com") {
  return `${baseName}@${domain}`;
}

console.log("generateTestEmail without domain:",generateTestEmail("lubo"));
console.log("generateTestEmail with domain:",generateTestEmail("lubo", "gmail.com"));


