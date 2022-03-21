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

/*
userController.deleteUser = (req, res, next) => {
//grab username from req.body.username --- potentially user_id?
const {username} = req.body.username;
//query db to find user to be deleted
const deleteQuery = `DELETE FROM USERS WHERE username = ${username}`;
if (err) {
  return next({
    log: 'userController.deleteUser query failed',
    message: {err: err}
  })
} else {
  return next();
}
}

userController.updateUser = (req, res, next) => {
  //grab username from req.body.username --- potentially username
  const {username, learn_language, known_language} = req.body.data;
  //query db to isolate user's details
  const updateLearnQuery = `UPDATE users SET learn_language = ${learn_language} WHERE username = ${username}`
  //update details
  db.query(updateLearnQueary) -------> left off here before lunch
  //throw err if need be
  //go to next piece of middleware
  const updateKnownQuery = `UPDATE users SET `
  //update details
  //throw err if need be
  //go to next piece of middleware
}
*/

module.exports = userController;