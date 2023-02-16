const Kriptograf = require("./index.js");

var sentenceEN = "Kriptograf is the awesome tool!";
var sentenceRS = "Криптограф је страва алат!";
var sentenceME = "с́утра ћу ићи да једем и има да из́једем много пасуља!";
var sentenceMK = "oвој господин ќе плати сè.";

var speed = 20;

const Cryptograph = Kriptograf();

Cryptograph.setSubset('sr-Cyrl');
Cryptograph.run(sentenceRS, speed, console.log);

// Cryptograph.setSubset('sr-Cyrl-ME');
// Cryptograph.run(sentenceME, speed, console.log);

// Cryptograph.setSubset('mk-MK');
// Cryptograph.run(sentenceMK, speed, console.log);

// Cryptograph.setSubset('en');
// Cryptograph.run(sentenceEN, speed, console.log);