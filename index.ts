import { CipherFactory } from "./cipher-factory";

// Membuat CaesarCipher dengan opsi yang benar
const caesarCipher = CipherFactory.createCipher("caesar", {
  shift: 3,
});
console.log(caesarCipher.encode("HELLO")); // "KHOOR"

// Membuat VigenereCipher dengan opsi yang benar
const vigenereCipher = CipherFactory.createCipher("vigenere", {
  key: "SECRET",
});
console.log(vigenereCipher.encode("HELLO")); // "Encrypted with Vigenere"
