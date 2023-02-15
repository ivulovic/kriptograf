var Subset = require('./subsets.js');

function Kriptograf() {
  var sentence;
  var decrypted;
  var encryptionStateRef;
  var placeholders = Subset.en_alphabet;

  function encrypt() {
    var o = sentence.split("");

    for (let i = 0; i < o.length; i++) {
      if (placeholders.includes(o[i])) {
        o[i] =
          placeholders[Math.floor(Math.random() * placeholders.length)];
      }
    }
    return o.join("");
  }

  function decrypt() {
    var enc = String(encryptionStateRef).split("");
    for (let i = 0; i < sentence.length; i++) {
      if (enc[i] !== sentence[i]) {
        enc[i] = placeholders[Math.floor(Math.random() * placeholders.length)];
        var newSentence = enc.join("");
        encryptionStateRef = newSentence;
        decrypted = newSentence;
      }
    }
    return decrypted;
  }

  function run(s, speed = 20, cb = (s) => null){
    sentence = s;

    encryptionStateRef = encrypt();

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
