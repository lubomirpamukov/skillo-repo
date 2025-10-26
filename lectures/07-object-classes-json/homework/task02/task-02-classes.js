export class TestUser {
  constructor(username, email, password, role, active) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.active = active;
  }

  isValidEmail() {
    let isLongEnough = this.email.length > 8;
    let isAt = this.email.includes("@");
    return isLongEnough && isAt;
  }

  isValidPassword() {
    const isValidLength = this.password.length >= 8;
    const hasNumbers = /\d/.test(this.password);
    return isValidLength && hasNumbers;
  }

  validate() {
    return this.isValidEmail() && this.isValidPassword();
  }

  getInfo() {
    return `${this.username}, ${this.role}, ${this.active}`;
  }
}

let testUser = new TestUser("lubo", "lu@1", "password123", "admin", true);

// console.log(testUser.isValidEmail());
// console.log(testUser.isValidPassword());
// console.log(testUser.validate());
// console.log(testUser.getInfo());

export class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.duration = 0;
  }

  start() {
    this.status = "RUNNING";
  }

  complete(status, durationMs) {
    this.status = status;
    this.duration = durationMs;
  }

  getSummary() {
    return `${this.duration < 1000 ? `${this.duration}ms` : `${this.duration / 1000}s`}`;
  }
}

// const test1 = new TestCase("login", "testing loging in functionality");

// console.log("Console log after object initialization: ", test1);
// test1.start();
// console.log("Console log after start() function was called", test1);
// test1.complete("PASS", 6000);
// console.log("Console log after complete() was called", test1);
// console.log("Console log getSummarty()", test1.getSummary());
