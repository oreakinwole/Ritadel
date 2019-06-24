const express = require('express');
const app = express();

require('./startup/checkforSecret')();  // To check if the secret used to generate a digital signature for our authentication process is present in our environment before starting the app
require('./startup/handlerrors');        // To handle uncaught and unhandled promise rejection Errors
require('./startup/startroutes') (app);   //To start up our Express routes
require('./startup/db')();    // Connect to database, Monogo DB              

  
  // port to be used for app. First option, whatever port provided in the production environment or use port 3000
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.info(`Listening on port ${port}...`));