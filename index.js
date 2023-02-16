var Subset = require('./subsets.js');

function Kriptograf() {
  var sentence;
  var decrypted;
  var placeholders = Subset.en_alphabet;

  function encrypt() {
    var o = sentence.split("");

    for (let i = 0; i < o.length; i++) {
      if (placeholders.includes(o[i])) {
        o[i] = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
    }
    return o.join("");
  }

  function decrypt() {
    var enc = decrypted.split("").filter(x => !!x);
    if(decrypted.length !== sentence.length){
      decrypted = encrypt();
    }
    for (let i = 0; i < sentence.length; i++) {
      if (enc[i] !== sentence[i]) {
        let r = placeholders[Math.floor(Math.random() * placeholders.length)];
        enc[i] = r;
        var newSentence = enc.join("");
        if(newSentence.length === sentence.length){
          decrypted = newSentence;
        }
      }
    }
    return decrypted;
  }

  const run = (s, speed = 20, cb = (s) => null) => {
    sentence = s;
    decrypted = encrypt();
    let interval = setInterval(() => {
        const isDone = decrypted === sentence;
        decrypted = decrypt();
        cb(decrypted);
        if(isDone){
            clearInterval(interval);
        }
    }, speed);
  }

  function setSubset(subset){
    if(Subset[subset]){
        placeholders = Subset[subset];
    }
  }
  function addSubset(subset){
    if(Subset[subset]){
        placeholders = [...placeholders, ...Subset[subset]];
    }
  }

  return {
    run,
    sentence,
    encrypt,
    decrypt,
    decrypted,
    setSubset,
    addSubset
  };
}

module.exports = Kriptograf;
