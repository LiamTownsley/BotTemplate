function setup() {
    console.log('Databse Module Ready!')
}

function getPrefix() {
    return process.env.PREFIX;
}

module.exports = {
    setup,
    getPrefix,
};