const defaultEnvironmentConfig = {
    baseUrl:'https://demo-qa-site.com/development',
    timeout: 15000,
    debugMode: true
}

function loadEnviormentConfig () {
    console.log("Default Configuration is loaded.")
    console.log(defaultEnvironmentConfig);
    return defaultEnvironmentConfig;
}

loadEnviormentConfig()