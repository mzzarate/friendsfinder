//npm express module
var express = require('express');

//telling node an express server is being created
var app = express();

//sets the port the server will run on
var PORT  = process.env.PORT || 8080;

//allows data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//starts the express server
app.listen(PORT,function() {
    console.log('Server listening on: http://localhost:' + PORT);
    
});