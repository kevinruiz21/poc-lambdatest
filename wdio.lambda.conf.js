
const { config } = require('./wdio.conf')
const shareCapabilities = {
    build: `Build ${Math.ceil(Date.now() / 1000)}`,
    network: true,
    performance: true,
    visual: true
}

exports.config = {
    ...config,
    ...{
        maxInstances: 30,
        services: [
            ['lambdatest', {
                tunnel: true,
            }]
        ],
        user: process.env.LAMBDA_USER_POC,
        key: process.env.LAMBDA_KEY_POC,
        capabilities: [
            {
                ...shareCapabilities,
                "platform": "Windows 10",
                "browserName": "Chrome",
                "version": "90.0"
            },
            {
                ...shareCapabilities,
                "platform": "Windows 10",
                "browserName": "Firefox",
                "version": "87.0"
            },
            {
                ...shareCapabilities,
                "platform": "Windows 10",
                "browserName": "MicrosoftEdge",
                "version": "89.0"
            },
            {
                ...shareCapabilities,
                "platform": "MacOS Catalina",
                "browserName": "Chrome",
                "version": "89.0"
            },
            {
                ...shareCapabilities,
                "platform": "MacOS Catalina",
                "browserName": "MicrosoftEdge",
                "version": "89.0"
            },
            {
                ...shareCapabilities,
                "platform": "MacOS Catalina",
                "browserName": "Firefox",
                "version": "87.0"
            },
            {
                ...shareCapabilities,
                "platform": "MacOS Catalina",
                "browserName": "Safari",
                "version": "13.0"
            }
        ],
        path: "/wd/hub",
        hostname: "hub.lambdatest.com",
        port: 80
    }
}