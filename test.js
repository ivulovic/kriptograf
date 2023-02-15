const Kriptograf = require("./index.js");

var sentenceEN = "Kriptograf is the awesome tool!";
var sentenceRS = "Криптограф је страва алат!";
var speed = 20;

const Cryptograph = Kriptograf();
// Cryptograph.addSubset('number');
Cryptograph.setSubset('rs_cyrilic');
Cryptograph.addSubset('numbers');

Cryptograph.run(sentenceRS, speed, console.log);
// Cryptograph.run(sentenceEN, speed, console.log);