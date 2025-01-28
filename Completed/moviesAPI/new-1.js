import cryptoJs from "crypto-js";

const secretkey = "lh+V!G9I=g^AwN!^[";
// const iv = "00d0b4ae362e965b6b4829fe58f0346e";
const format = {
  stringify: function (wordArray) {
    try {
      return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    } catch (e) {
      throw new Error("Malformed UTF-8 data");
    }
  },
  parse: function (utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  },
};
const encrypted =
  "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";
let wordArray = cryptoJs.enc.Base64.parse(encrypted);
let iv = cryptoJs.lib.WordArray.create(wordArray.words.slice(0, 4));
let ciphertext = cryptoJs.lib.WordArray.create(wordArray.words.slice(4));
const crypto = cryptoJs.AES.decrypt(
  {
    ciphertext: ciphertext,
  },
  cryptoJs.enc.Hex.parse(cryptoJs.SHA256(secretkey).toString()),
  {
    iv: iv,
  }
);

console.log(crypto.toString(cryptoJs.enc.Utf8));

// [ 158 ] lib
// [ 161 ] create
// [ 162 ] words
// [ 163 ] slice
// [ 155 ] enc
// [ 157 ] parse
// [ 162 ] words
// [ 163 ] slice
// [ 165 ] AES
// [ 165 ] AES
// [ 166 ] decrypt
