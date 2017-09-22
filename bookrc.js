
process.on('uncaughtException', function(err) {
    console.error(err);
    process.exit(1);
});

module.exports = log;
