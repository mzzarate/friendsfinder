//creating a path from friends.js to apiRoutes.js by importing friends.js
var friends = require('../data/friends');



module.exports = function(app) {

    app.get('/api/friends',function(req,res) {
        res.json(friends);
    });

    app.post('/api/friends',function(req,res) {
        //the comparison(bring in code from survey.html)
        //matchmaker logic
        //set up a variable to capture best match
        //loop through all the total differences
        //for every score if it is less than or equal to 0 
        //set that index to best match
        //final answer = friends[bestmatch]
        if(friends.length < 10 ) {
            friends.push(req.body);
            res.json(true);
        } 
        else {
            friends.push(req.body);
            res.json(false);
        }     
    });
};
