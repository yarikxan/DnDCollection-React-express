const countCardsHelper = require('../helpers/countCards');
const config = require('../config');
const Card = require('../models/Card')

const handeError = (res, error) => {
    res.status(500).json({error});  
};

const cardController = {

    getCards: async (req,res) => {
        const page = parseInt(req.query.page);
        const pageSize = config.other.pagination.pagesize;
        
        const cardType = req.query.cardType || "";
        const cardClass = req.query.cardClass || "";
        const minLevel = req.query.minLevel? parseInt(req.query.minLevel) : 1;
        const maxLevel = req.query.maxLevel? parseInt(req.query.maxLevel) : 20;
        const cardName = req.query.cardName || "";

        const filter = {
            level: {
                $gte: minLevel,
                $lte: maxLevel,
            },
        };
        if(cardType) {filter.cardType = cardType;}
        if(cardClass) {filter.class = cardClass;}
        if(cardName) {filter.name = cardName;}

        try{
            const response = await Card.find(filter)
                .skip(page-1)
                .limit(pageSize);
            const cards = await response;
            const count = await countCardsHelper(cardType, cardName, cardClass, minLevel, maxLevel);
            res.status(200).json({
                cards,
                count,
                totalPages: Math.ceil(count/pageSize),
            });
        } catch(error) {
            console.error('Error fetching cards', error);
            throw new Error('failed to retrieve cards')
        };
    },

    countCards: async (req,res) => {
        const cardType = req.query.cardType || "";
        const cardClass = req.query.cardClass || "";
        const minLevel = req.query.minLevel? parseInt(req.query.minLevel) : 1;
        const maxLevel = req.query.maxLevel? parseInt(req.query.maxLevel) : 20;
    
        try {
        const count = await countCardsHelper(cardType, cardClass, minLevel, maxLevel);
        res.status(200).json(count);
        } catch(error) {
            console.error('Error counting cards', error);
            throw new Error('Failed to retrieve cards')
        };
    },

    updateCard: async (req,res) => {
        const cardToSave = req.body.card;
        
        try {
        	const result = await Card.findByIdAndUpdate(cardToSave._id, cardToSave, {new: true});
        	
        	if (!result){
        		return res.status(404).json({error: "Card not found"});
        	}
        } catch (err) {
        	return res.status(500).json({error: err});
        }
    },

    getCard: async (req,res) => {
    	try {
    		const existingCard = await Card.findById(req.query.id);
    		return res.status(200).json({card: existingCard});
    	} catch (err) {
    		return res.status(500).json({error: err, query: req.query.id});
    	}

    },
    
    createCard: async (req,res) => {
    	const newCard = new Card({});
    	try{
    		const savedNewCard = await newCard.save();
	        return res.status(200).json({card: savedNewCard});
    	} catch (err) {
    		console.log(err)
    		return res.status(500).json({error: err});
    	}
    },
    
    uploadImg: async (req, res) => {
    	const filePath = req.file.path.match(/\/img\/\w+\.\w+/)[0]; //От полного пути отрезается только часть, нужная для vite, чтобы найти нужный файл
    	const cardId = req.query.cardId;
    	
    	try {
    	    const result = await Card.findByIdAndUpdate(cardId, {imgIdURL: filePath}, {new: true});
    	    
    	    return res.status(200).json({imgIdURL: filePath});
    	    if(!result) {
    	        return res.status(404).json({error: "Card not found"});
    	    }
    	    
    	} catch (err) {
    	    console.log(err);
    	    return res.status(500).json({error: "Failed to upload a file"});
    	}
    },

}

module.exports = cardController;
