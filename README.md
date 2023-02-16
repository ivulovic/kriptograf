# Kriptograf

## About

Text decryption effect.

[Github Repository](https://github.com/ivulovic/kriptograf)

## Demo Example

[Demo Example](https://ivn.rs/craft/cryptograph)

## Install

```
yarn add @ivnv/kriptograf
```

## Usage

```
import Kriptograf from "@ivnv/kriptograf";


var sentenceEN = "Kriptograf is the awesome tool!";
var sentenceRS = "Криптограф је страва алат!";
var sentenceHR = "Kriptograf je odličan alat!";
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

// Cryptograph.setSubset('hr-HR');
// Cryptograph.run(sentenceHR, speed, console.log);

// Cryptograph.setSubset('en');
// Cryptograph.run(sentenceEN, speed, console.log);

```

## Test

```
yarn run test
```
