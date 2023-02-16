const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special_characters = [".",  ",", "!", "?", "+", "-", "=", "%", "#", "&", "*", "^", "~"];

const en = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const rs_cyrillic = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "ђ",
  "е",
  "ж",
  "з",
  "и",
  "ј",
  "к",
  "л",
  "љ",
  "м",
  "н",
  "њ",
  "о",
  "п",
  "р",
  "с",
  "т",
  "ћ",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "џ",
  "ш",
];
const rs_latin = [
  "a",
  "b",
  "c",
  "č",
  "ć",
  "d",
  "dž",
  "đ",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "lj",
  "m",
  "n",
  "nj",
  "o",
  "p",
  "r",
  "s",
  "š",
  "t",
  "u",
  "v",
  "z",
  "ž",
];
const me_cyrillic = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "ђ",
  "е",
  "ж",
  "з",
  "з́",
  "и",
  "ј",
  "к",
  "л",
  "љ",
  "м",
  "н",
  "њ",
  "о",
  "п",
  "р",
  "с",
  "с́",
  "т",
  "ћ",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "џ",
  "ш",
];
const me_latin = [
  "a",
  "b",
  "c",
  "č",
  "ć",
  "d",
  "dž",
  "đ",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "lj",
  "m",
  "n",
  "nj",
  "o",
  "p",
  "r",
  "s",
  "š",
  "ś",
  "t",
  "u",
  "v",
  "z",
  "ž",
  "ź",
];
const mk_cyrillic = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "ѓ",
  "е",
  "ж",
  "з",
  "ѕ",
  "и",
  "ј",
  "к",
  "л",
  "љ",
  "м",
  "н",
  "њ",
  "о",
  "п",
  "р",
  "с",
  "с́",
  "т",
  "ќ",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "џ",
  "ш",
];

// https://www.alchemysoftware.com/livedocs/cat12/language_codes/Language.htm

module.exports = {
    numbers,
    special_characters,
    
    'en': en,

    'sr-Cyrl': rs_cyrillic,
    'sr-Latn': rs_latin,

    'sr-Latn-BA': rs_latin,
    'sr-Cyrl-BA': rs_cyrillic,

    'sr-Cyrl-ME': me_cyrillic,
    'sr-Latn-ME': me_latin,

    'mk-MK': mk_cyrillic,

    'hr-HR': rs_latin,
}