import {
  generateTestUserName,
  buildTestURL,
} from "./task01/test-data-generators.js";
import { validateCompleteAPIResponse } from "./task02/test-validators.js";
import {
  handleTestEnviorment,
  determineTestAction,
} from "./task03/test-decision-engine.js";


function executeTestScenario(
  scenarioName,
  enviorment,
  userRole,
  expectedResult
) {
  const testUserName = generateTestUserName(scenarioName);
  const testURL = buildTestURL(enviorment, "/test", "random-id");
  const validateApi = validateCompleteAPIResponse(200, 800, true, 0);
  const testEnviroment = handleTestEnviorment(enviorment);
  const testActions = determineTestAction("pass", 5);

  const result = {
    scenarioName,
    enviorment,
    userRole,
    expectedResult,
    processed: {
      testUserName,
      testURL,
      validateApi,
      testEnviroment,
      testActions,
    },
    timestamp: new Date().toISOString(),
  };

  console.log("=== Test Scenario Result ===");
  console.log(JSON.stringify(result, null, 2));
  return result;
}

executeTestScenario("scenario", "production", "admin",);

