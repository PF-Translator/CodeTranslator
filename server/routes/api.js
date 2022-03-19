const express = require('express');

const quizController = require(/**/);

const router = express.Router();

//route to get questions
router.get('/question', verifyUser, getQuestion, (req, res) => {
  res.status(200)
  //need to include (username, question, answers on response)
  //need to verify user
  //middleware: verify user, get the question
});

//route to get answers
router.get('/answer', (req, res) => {
  res.status(200)
})

//route to get user
router.get('/user', (req, res))


//route to update user details

//route to post user

//route to delete user