const express = require('express');
const app = express();

require('./startup/checkforSecret')();  // To check if the secret used to generate a digital signature for our authentication process is present in our environment before starting the app
require('./startup/handlerrors');        // To handle uncaught and unhandled promise rejection Errors
require('./startup/startroutes')(app);   //To start up our Express routes
require('./startup/db')();    // Connect to database, Monogo DB              

require('./startup/prod')(app);



if ( process.env.NODE_ENV === 'production') {

  app.use(express.static('../client/build'));


  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

  // port to be used for app. First option, whatever port provided in the production environment or use port 3000
    const port = process.env.PORT || 5000;
    const server = app.listen(port, () => console.info(`Listening on port ${port}...`));

    module.exports = server;