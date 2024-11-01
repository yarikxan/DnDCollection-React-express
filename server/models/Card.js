const mongoose = require('mongoose');

/*Schema defined in left->right top->down pattern, based on workshop page
    For better understanding look at workshop page's first line and compare it with
    schema's fields starting with imgURL
*/
const Schema = mongoose.Schema;

const skillSchema = new Schema({
	name: String,
	value: Number,
}, {_id: false});

const statSchema = new Schema({
	name: String,
	value: Number,
	save: Boolean,
	skills: [skillSchema],
}, {_id: false});

const cardSchema = new Schema({
    cardType:{ //PC, NPC, Monster
    	type: String,
    	default: "",
    },  
    description:{ 
    	type: String,
    	default: "",
    },


    imgIdURL:{ //  img/cards/id
    	type: String,
    	default: "",
    }, 
    name:{ 
    	type: String,
    	default: "",
    },
    race:{ 
    	type: String,
    	default: "",
    },
    class:{ 
    	type: String,
    	default: "",
    },
    backstory:{ 
    	type: String,
    	default: "",
    },
    alignment:{ 
    	type: String,
    	default: "",
    },
    level:{ 
    	type: Number,
    	default: 1,
    },
    exp:{ 
    	type: Number,
    	default: 0,
    },


    armorClass:{ 
    	type: Number,
    	default: 0,
    },
    speed: { 
    	type: Number,
    	default: 0,
    },
    inspiration:{ 
    	type: Number,
    	default: 0,
    },
    initiative:{ 
    	type: Number,
    	default: 0,
    },


    gold:{ 
    	type: Number,
    	default: 0,
    },
    hits:{ 
    	type: Number,
    	default: 0,
    },
    maxHits:{ 
    	type: Number,
    	default: 0,
    },
    tempHits:{ 
    	type: Number,
    	default: 0,
    },
    hitDices:{ 
    	type: String,
    	default: "",
    },

    stats:{ 
    	type:[statSchema],
    	default: [
    		{name: "Constitution", value: 10, save: false, 
    			skills: []},
    		{name: "Strenght",value: 10, save: false,
    			skills: [{name: "Athletics", value: 0}]},
    		{name: "Agility", value: 10, save: false,
    			skills: [{name: "Acrobatics", value: 0}, {name: "Selight of hands", value: 0}, {name: "Stealth", value: 0}]},
    		{name: "Intelligence", value: 10, save: false,
    			skills: [{name: "Arcana", value: 0}, {name: "Nature", value: 0}, {name: "History", value: 0},
    					 {name: "Religion", value: 0}, {name: "Investigation", value: 0}]},
    		{name: "Wisdom", value: 10, save: false,
    			skills: [{name: "Medicine", value: 0}, {name: "Insight", value: 0}, {name: "Perception", value: 0},
    					 {name: "Survival", value: 0}, {name: "Animal Handling", value: 0}]},
    		{name: "Charisma", value: 10, save: false,
    			skills: [{name: "Deception", value: 0}, {name: "Perfomance", value: 0}, {name: "Intimidation", value: 0},
    					 {name: "Persuasion", value: 0}]},
    	]
    },

    profinciencies:{ 
    	type: String,
    	default: "",
    },

    lore:{ //Backstory 
    	type: String,
    	default: "",
    }, 
    alliesAndOrgs:{ 
    	type: String,
    	default: "",
    },
    appearance:{ 
    	type: String,
    	default: "",
    },

    personalityTraits:{ 
    	type: String,
    	default: "",
    },
    ideals:{ 
    	type: String,
    	default: "",
    },
    bonds:{ 
    	type: String,
    	default: "",
    },
    flaws:{ 
    	type: String,
    	default: "",
    },

    notes1:{ 
    	type: String,
    	default: "",
    },
    notes2:{ 
    	type: String,
    	default: "",
    },
    notes3:{ 
    	type: String,
    	default: "",
    },
    notes4:{ 
    	type: String,
    	default: "",
    },

    items: {
        type: [Schema.Types.ObjectId],
        ref: "Item",
    },
    skills:{ 
    	type: String,
    	default: "",
    },

    spells: {
        type: [Schema.Types.ObjectId],
        ref: "Spell",
    },

    inventory:{ 
    	type: String,
    	default: "",
    },
    treasures:{ 
    	type: String,
    	default: "",
    },

    inFavs:{ 
    	type: Number,
    	default: 0,
    },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
