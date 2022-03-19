const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
//require controller that we setup here
const quizRouter = require('./routes/quiz.js');
const userRouter = require('./routes/user.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client'));

// handle user request
app.use('/user', userRouter);

//handle quiz request
app.use('/quiz', quizRouter)


// error handler for bad requests
app.use((req, res) => {
  res.status(404).send('Page not found');
})

//global handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'global error handler: unknown middleware error',
    status: 500,
    message: { err: 'An error occurred'}
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log(`Always listening on port: ${PORT}...`);
})

module.exports = app;