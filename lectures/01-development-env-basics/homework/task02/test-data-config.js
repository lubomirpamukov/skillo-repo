export const BASE_URL = "https://demo-qa-site.com";
export const DEFAULT_TIMEOUT = 30000;
export const API_ENDPOINTS = {
  login: "login",
  users: "users",
  products: "products",
};

export let testUserEmail = "testEmail@example.com";
export let testUserPassword = "securePassword123$";
export let adminUserEmail = "admin@example.com";
export let expectedWelocmeMessage = "Welcome to your dashboard.";
export let userName = "tester";
export let debugMode = true;
export let runSlowtests = false;
export let useTestData = true;

export function validateEmail(email) {
  const hasAt = email.includes("@");
  const hasDot = email.includes(".");
  console.log(hasAt && hasDot);
  return hasDot && hasAt;
}

export function validatePassword(password) {
  const isValid = password.length > 8 ? true : false;
  console.log(isValid);
  return isValid;
}

export function generateUniqueEmail(userName) {
  let uniqueEmail = `${userName}${Date.now()}@testmail.com`;
  console.log(uniqueEmail);
  return uniqueEmail;
}

export function logTestConfiguration() {
  const timestamp = new Date().toISOString();
  console.log("=== Test Configuration ===");
  console.log(`Loaded at: ${timestamp}`);
  console.log(`BASE_URL: ${BASE_URL}`);
  console.log(`DEFAULT_TIMEOUT: ${DEFAULT_TIMEOUT}`);
  console.log("API_ENDPOINTS:", API_ENDPOINTS);
  console.log(`testUserEmail: ${testUserEmail}`);
  console.log(`testUserPassword: ${testUserPassword}`);
  console.log(`adminUserEmail: ${adminUserEmail}`);
  console.log(`expectedWelocmeMessage: ${expectedWelocmeMessage}`);
  console.log(`debugMode: ${debugMode}`);
  console.log(`runSlowtests: ${runSlowtests}`);
  console.log(`useTestData: ${useTestData}`);
  console.log("=========================");
}

//logTestConfiguration()
