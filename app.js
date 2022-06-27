const { DB }  = require('./db');
const { Player } = require("./entities/player");

const p1 = new Player("Felipe", "Miosso", []);
DB.players.push(p1);

console.log(DB.players);
