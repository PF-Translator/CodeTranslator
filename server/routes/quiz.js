const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();


//route to get questions and answers
router.get('/quiz', (req, res) => {
  res.status(200).json(res.locals.quizDetails);
  //insert response of row that we grab in quizController
})

module.exports = quizRouter;