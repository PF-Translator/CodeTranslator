const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

//login and verify user
router.post('/login', (req, res) => {
  res.status(200).json(res.locals.user);
  //middleware: verify user
});

//add/create user
router.post('/signup', (req, res) => {
  res.status(200).json(res.locals.user);
});

//update user details
router.patch('/update', (req, res) => {
  res.status(200);
  //TBD on response
})

//delete user
router.delete('/delete', (req, res) => {
  res.status(200).send('this be deleted');
})