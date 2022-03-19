const db = require('../database.js');

const quizController = {};


 

// we need methods for each type of request that will be made
//get request for logins


//post request to create new users and their preferences
quizController.addNewUserAndPref = (req, res, next) => {
    const queryString = '';
}



//get request to query user table for existing user
quizController.getUser = (req, res, next) => {
    const queryString = '';
}


//controller to get answers
quizController.getAnswers = (req, res, next) => {
    const queryString = '';
    db.qquery(queryString).then((data) => {


    })
}
 
  //route to get user

  
  
//Controller to update user details
quizController.addUserDetails = (req, res, next) => {
    
    const queryString = ''; 
}

//Controller to post user to user table 
quizController.postUser = (req, res, next) => {
    
    const queryString = '';
}
  
//route to delete user
quizController.deleteUser = (req,res, next) => {
    
    const queryString = '';

    next();
}

module.exports = quizController;