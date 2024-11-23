// Service to handle OWASP ZAP scans

const { exec } = require("child_process");

const runZapScan = (url) => {
    return new Promise((resolve, reject) => {
        const command = `zap-cli -p 8080 quick-scan ${url}`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(`ZAP Scan Error: ${stderr}`);
            }
            resolve(stdout);
        });
    });
};

module.exports = { runZapScan };
