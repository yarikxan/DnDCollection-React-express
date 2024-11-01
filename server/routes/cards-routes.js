const express = require('express');
const path = require('path');
const multer = require('multer');
const cardController = require('../controllers/cards-controller')

const router = express.Router();

const imgStorage = multer.diskStorage({
	destination: (req,res,cb) => { cb(null, '/home/yarikxan/Desktop/jest/react/client/public/img')},
	filename: (req,file,cb) => {
			    const fileName = req.query.cardId;
			    cb(null, fileName + path.extname(file.originalname));
		    }
});
const uploadImg = multer({storage: imgStorage});

router.get('/api/getCards', cardController.getCards);

router.get('/api/countCards', cardController.countCards);

router.get('/api/createCard', cardController.createCard);

router.get('/api/getCard', cardController.getCard);

router.post('/api/updateCard', cardController.updateCard)

router.post('/api/uploadImg', uploadImg.single('file'), cardController.uploadImg)

module.exports = router;
