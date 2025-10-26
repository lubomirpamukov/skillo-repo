let connected = true;

function connect() {
  if (connected) {
    console.log("alredy connected");
  } else {
    connected = true;
    console.log("Connected");
  }
}

function disconnect() {
  if (connected) {
    connected = false;
    console.log("Disconnected");
  } else {
    console.log("alredy disconnected");
  }
}

function runOperation(config) {
  if (!connected) throw new Error("Not connected");
  if (config.shouldFail) throw new Error("Operation failed: " + config.name);

  return {
    ok: true,
    name: config.name,
  };
}

const successConfig = {
  name: "tests",
  shouldFail: false,
};

const failConfig = {
  name: "tests",
  shouldFail: true,
};

function runWithCleanup(config) {
  connect();
  try {
    const result = runOperation(config);
    return {
      ok: true,
      data: result,
    };
  } catch (error) {
    console.log(error.name, error.message);
    return {
      ok: false,
    };
  } finally {
    disconnect();
  }
}

console.log("=========== SUCCESS CONFIG ============");
console.log(runWithCleanup(successConfig));
console.log("=========== FAIL CONFIG ===============");
console.log(runWithCleanup(failConfig));
