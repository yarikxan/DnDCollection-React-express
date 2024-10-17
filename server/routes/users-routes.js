const express = require('express');
const userController = require('../controllers/users-controller');

const router = express.Router();

router.get('/api/user/:username', userController.getUser);

router.post('/api/createUser', userController.createUser, (err) => {console.log(err)});

router.post('/api/authUser', userController.authUser, (err) => {console.log(err)});

router.patch('/api/changeUser', userController.changeUserData, (err) => {console.log(err)});

router.patch('/api/changeUserPassword', userController.changeUserPassword);

module.exports = router;
