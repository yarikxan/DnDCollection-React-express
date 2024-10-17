const express = require('express');
const cardController = require('../controllers/cards-controller')

const router = express.Router();
const handleError = (res, error) => {
    res.status(500).json({error});
};

router.get('/api/getCards', cardController.getCards);

router.get('/api/countCards', cardController.countCards);

module.exports = router;
