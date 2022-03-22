const express = require('express');
const quizController = require('../controllers/quizController.js');
const userController = require('../controllers/userController.js');

const router = express.Router();


//route to get questions and answers
// router.get('/quiz', quizController.getLessons, (req, res) => {
//   res.status(200).json(res.locals.data);
//   //insert response of row that we grab in quizController
// })

//login/verify user and get lesson
router.post('/login',userController.verifyUser, quizController.getLessons, (req, res) => {
   res.status(200).json(res.locals.data);
});


//add/create user
router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

//update user details
router.patch('/update', (req, res) => {
  res.status(200);
  // Have not implemented yet
})

// //delete user
router.delete('/delete', userController.deleteUser, (req, res) => {
  res.status(200).send('this be deleted');
})

module.exports = router;