const db = require('../database.js');

const userController = {};

userController.verifyUser = (req, res, next) => {
  if(typeof req.body !== 'object' || !req.body.username || !req.body.password) {
    next('userController.verifyUser: invalid input')
  } else {
    //do stuff
  }
};

userController.createUser = (req, res, next) => {
  if(typeof req.body !== 'object' || !req.body.username || !req.body.password || !req.body.email) {
    next('userController.creatUser: invalid input')
  } else {
    str = `INSERT INTO users(username, password, email)
    VALUES($1, $2, $3)`
    arr = [req.body.username, req.body.password, req.body.email];
    db.query(str, arr, (err, response) => {
      if(err) {
        next({
          log: 'userController.createUser query failed',
          message: {err: err }
        })  
      } else {
        //do something

      }
    })
  }
};

module.exports = userController;