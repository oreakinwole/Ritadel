module.exports = function() {
    
    process.on('uncaughtException' , (ex) => {
    console.error('We got an uncaught Exception');
    });

    process.on('unhandledRejection', (ex) => {
    console.error('We got an unhandeld promise rejection');
    });
      
};