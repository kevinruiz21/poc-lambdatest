
const { config } = require('./wdio.conf')
const sharedCapabilities = {
    'sauce:options': {
        // 'tunnel-identifier': 'my-tunnel-123',
        build: `Build ${Math.ceil(Date.now() / 1000)}`,
        "screenResolution": '1280x960'
    }
}

exports.config = {
    ...config,
    ...{
        maxInstances: 30,
        user: process.env.SAUCELABS_USER_POC,
        key: process.env.SAUCELABS_KEY_POC,
        region: "us",
        sauceConnect: false,
        services: [['sauce', {
            sauceConnect: false,
            // Provide specific Sauce Connect options
            // Go to
            // https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide
            // for more options
            // Options need to be camelCase, so `--addtional-arg foo` will become `additionalArg: "foo"`
            sauceConnectOpts: {
                // This will write the sc logs to a file
                logfile: './sc.log',
                // ...
            }
        }]],
        capabilities: [
            {
                ...sharedCapabilities,
                "browserName": 'chrome',
                "browserVersion": '90.0',
                "platformName": 'Windows 10',
            },
            {
                ...sharedCapabilities,
                "browserName": 'firefox',
                "browserVersion": '87.0',
                "platformName": 'Windows 10',
            },
            {
                ...sharedCapabilities,
                "browserName": 'MicrosoftEdge',
                "browserVersion": '89.0',
                "platformName": 'Windows 10',
            },
            {
                ...sharedCapabilities,
                "browserName": 'chrome',
                "browserVersion": '89.0',
                "platformName": 'macOS 10.15',
            },
            {
                ...sharedCapabilities,
                "browserName": 'MicrosoftEdge',
                "browserVersion": '89.0',
                "platformName": 'macOS 10.15',
            },
            {
                ...sharedCapabilities,
                "browserName": 'firefox',
                "browserVersion": '87.0',
                "platformName": 'macOS 10.15',
            },
            {
                ...sharedCapabilities,
                "browserName": 'safari',
                "browserVersion": '13.1',
                "platformName": 'macOS 10.15',
            }
        ]
    },
}