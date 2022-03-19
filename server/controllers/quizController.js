const db = require('../database.js');

const quizController = {};


 

// we need methods for each type of request that will be made
//get request for logins





//grab lesson row based on the user (or the userID)
//
quizController.getLessons = (req, res, next) => {
    //query users table to get their learn_language and known_language  
    selectString = 'SELECT learn_language a';
    // from user known language table join the user learn_language table 
    fromString = 'FROM user u RIGHT OUTER JOIN lesson l ';

    const queryString;
    db.query(queryString).then((data) => {

    
    })
    //Left outer join => everything 
}
 
  //route to get user

  




module.exports = quizController;