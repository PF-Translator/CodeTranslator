const express = require('express');

const quizController = require(/**/);

const router = express.Router();

//route to get questions
router.get('/question', verifyUser, getQuestion, (req, res) => {
  res.status(200);
  //need to include (username, question, answers on response)
  //need to verify user
  //middleware: verify user, get the question
});

//route to get answers
router.get('/answer', (req, res) => {
  res.status(200);
})

//route to get user
router.get('/user', (req, res) => {
  res.status(200);
});


//route to update user details
router.patch('/update', (req, res) => {
  res.status(200);
})

//route to post user
router.post('/createUser', (req, res) => {
  res.status(200);
})

//route to delete user

router.delete('/delete', (req, res) => {
  res.status(200);
})

module.exports = router;