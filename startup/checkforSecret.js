require('dotenv').config();
require('config');

module.exports = function() {

    // Check for the presence of the environment variable used for signing the auth token
 if (!process.env.SECRET_KEY) {

    throw new Error('RITADEL SECRET KEY IS MISSING');

 }
 else {
     console.info('We found Ritadel Secret key');
 }
 
};
