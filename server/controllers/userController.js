const { user } = require('pg/lib/defaults');
const db = require('../database.js');

const userController = {};

userController.verifyUser = (req, res, next) => {
  //check to make sure input is valid
  if(typeof req.body !== 'object' || !req.body.username || !req.body.password) {
    next({
      log: 'invalid input',
      message: { err: 'invalid input'}
    })
  } else {
    //query string
    let str = 'SELECT * FROM users WHERE username = $1';
    let arr = [req.body.username];
    // query the database to get user info
    db.query(str, arr, (err, response) => {
      //handle query error if there is one
      if(err) {
        next({
          log: 'userController.verifyUser query failed',
          message: { err: err }
        })
      } else {
        //grab response row when matching username
        const user = response.rows[0];
        //handle incorrect password
        if(user.password !== req.body.password) {
          next({
            log: 'invalid password',
            status: 401,
            message: { err: 'invalid password'}
          })
          //if password matches, pass to next middleware funciton
        } else {
          res.locals.data = {
            username: user.username,
            user_id: user.user_id,
            known_language: user.known_language,
            learn_language: user.learn_language
          }
          next();
        }
      }
    })
  }
};

userController.createUser = (req, res, next) => {
 console.log(req.body)
  if(typeof req.body !== 'object' || !req.body.username || !req.body.password || !req.body.email || !req.body.known_language || !req.body.learn_language) {
   
    next('userController.creatUser: invalid input')
  } else {
    //query string
    const str = `INSERT INTO users(username, password, known_language, learn_language, email)
    VALUES($1, $2, $3, $4, $5)`
    const arr = [req.body.username, req.body.password, req.body.known_language, req.body.learn_language, req.body.email];
    //query the database to add user
    db.query(str, arr, (err, response) => {
      //handle query error if there is one
      if(err) {
        // console.log(req.body);
        next({
          log: 'userController.createUser query failed',
          message: {err: err }
        })  
      } else {
        next();

      }
    })
  }
};


//method to delete user
userController.deleteUser = (req, res, next) => {
// //grab username and password from req.body --- potentially user_id?
const {username, password} = req.body;

// //query db to find user to be deleted
const deleteQuery = `DELETE FROM users WHERE username = $1 AND password = $2`;
//store variable in array to pass to db.query
const arr = [username, password];

//query the database
db.query(deleteQuery, arr, (err, response) => {
if (err) {
  return next({
    log: 'userController.deleteUser query failed',
    message: {err: err}
  })
} else {
  //after succesfull deletion, pass to next middleware, no need to send info
  return next();
  }
  })
}


/*
//method to update user info
userController.updateUser = (req, res, next) => {
  //grab username from req.body.username --- potentially username
  const {username, password, learn_language, known_language} = req.body.data;
  //query db to isolate user's details
  const updateLearnQuery = `UPDATE users SET learn_language = ${learn_language} WHERE username = ${username}`
  const arr = [username, password]
  //update details
  db.query(updateLearnQueary, arr (err, response) => {
    if (err {
      return next({
        log: 'userController.updateUserLearn query failed',
        message: {err: err},
      })
    }) else {
      return next();
    })
  }
  const updateKnownQuery = `UPDATE users SET known_language = ${known_language} WHERE username = ${username}`
  //update details
  db.query(updateKnownQuery, (err, response) => {
    if (err {
      return next({
        log: 'userController.updateUserKnown query failed'
        message: {err: err};
      })
    }) else {
      return next();
    }
  })
}
*/

module.exports = userController;