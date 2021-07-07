const { greenBright, blueBright, redBright } = require('chalk');

function timeSlice(input) {
    return ('00' + input).slice(-2);
}

function timestamp() {
    const ts = new Date();
    return `${timeSlice(ts.getHours())}:${timeSlice(ts.getMinutes())}:${timeSlice(ts.getSeconds())}`;
}

module.exports = {
    log: (message) => {
        console.log(blueBright(timestamp()), `| ${greenBright('System')} → ${message.toString()}`);
    },

    error: (message) => {
        console.log(blueBright(timestamp()), `| ${redBright('Error')} → ${message.toString()}`);
    },

    debug: (message) => {
        if (process.env.DEBUG) {
            console.log(blueBright(timestamp()), `| ${blueBright('Debug')} → ${message.toString()}`);
        }
    },
};