const db = require('../database.js');

const quizController = {};


 

// we need methods for each type of request that will be made
//get request for logins


 /* 
 //res.locals.data =
    {
        userId:
        learnLanguage:
        learnLanguageTable:
        knownLanguage:
        knownLanguageTable:
    }
*/

// {

//   learnLanguageTable:
      
//   knownLanguageTable:
// }


//grab lesson row based on the user (or the userID)
quizController.getLessons = async (req, res, next) => {

  try{
  // grab known language and learn language as variables from the front end
  // create variables for each: learn and known
  //the following two variables are strings
  const learnLang = res.locals.data.learn_language;
  const knownLang = res.locals.data.known_language;

  //query users table to get their learn_language and known_language  
  learnQueryString = `SELECT * FROM ${learnLang}`;
  // from user known language table join the user learn_language table 
  knownQueryString = `SELECT * FROM ${knownLang}`;

  // invoking database query utilizing learnQueryString  
  //asigning the async invocation to a variable called learn
  let learn = await db.query(learnQueryString) 
    //if we find a match to our query, store data response under a lable
  // else return and console log err message not found
  res.locals.data.learn_languageTable = learn.rows;

  let known = await db.query(knownQueryString)

  res.locals.data.known_languageTable = known.rows;
  return next();
  }catch (error) {
    return next({
      log: 'quiz.Controller.getLesons query failed;',
      status: 422,
      message: { err: error },
    })
  }
}
 


  




module.exports = quizController;