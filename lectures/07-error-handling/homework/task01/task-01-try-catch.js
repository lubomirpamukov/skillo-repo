const user = {
  username: "lubo",
  emaill: "validemail@gmail.com",
};

function safeParse(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return {
      ok: true,
      data: parsed,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

const json = `{"username": "Lubo", "age": 19}`;
console.log(safeParse(json));
console.log(safeParse("invalid"));

function safeGetEmail(user) {
  try {
    if (!user.email || user.email === undefined)
      throw new Error("Email property is null or undefined");
    return user.email;
  } catch (error) {
    console.log(error.message);
    return "<no email>";
  }
}

console.log(safeGetEmail(user));

function safePush(resultsArray, value) {
  try {
    resultsArray.push(value);
    return true;
  } catch (error) {
    return false;
  }
}

let array = [];
let array1 = "not array";
console.log(safePush(array, 1));
console.log(safePush(array1, 1));

function safeSuccessRate(passed, total) {
  if (total === 0) return "0.00%";
  try {
    return `${((passed / total) * 100).toFixed(2)}%`;
  } catch (error) {
    console.log(error.message);
    return "N/A";
  }
}

console.log(safeSuccessRate(10, 10));
console.log(safeSuccessRate(10, 0));


