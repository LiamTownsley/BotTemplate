module.exports = {
    name: 'eval',
    execute: (message, args, client) => {
        if (message.author.id == process.env.OWNER_ID) {
            eval(args.join(' '));
        }
    }
}