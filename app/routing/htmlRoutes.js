//npm path module
var path  = require('path');

module.exports = function(app) {
    //GET route to display the survey.html page
    app.get('/survey',function(req,res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    //GET route to display the home.html page by default
   app.get('*',function(req,res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    
};
