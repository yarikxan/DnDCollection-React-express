const mongoose = require('mongoose');

/*Schema defined in left->right top->down pattern, based on workshop page
    For better understanding look at workshop page's first line and compare it with
    schema's fields starting with imgURL
*/
const Schema = mongoose.Schema;

const skillSchema = new Schema({
	name: String,
	value: Boolean,
}, {_id: false});

const statSchema = new Schema({
	name: String,
	value: Number,
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
    Inspiration:{ 
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
    		{name: "Constitution", value: 0, 
    			skills: []},
    		{name: "Strenght",value: 0,
    			skills: [{name: "Athletics", value: false}]},
    		{name: "Agility", value: 0,
    			skills: [{name: "Acrobatics", value: false}, {name: "Selight of hands", value: false}, {name: "Stealth", value: false}]},
    		{name: "Intelligence", value: 0,
    			skills: [{name: "Arcana", value: false}, {name: "Nature", value: false}, {name: "History", value: false},
    					 {name: "Religion", value: false}, {name: "Investigation", value: false}]},
    		{name: "Wisdom", value: 0,
    			skills: [{name: "Medicine", value: false}, {name: "Insight", value: false}, {name: "Perception", value: false},
    					 {name: "Survival", value: false}, {name: "Animal Handling", value: false}]},
    		{name: "Charisma", value: 0,
    			skills: [{name: "Deception", value: false}, {name: "Perfomance", value: false}, {name: "Intimidation", value: false},
    					 {name: "Persuasion", value: false}]},
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
