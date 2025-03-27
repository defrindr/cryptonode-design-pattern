import Cipher from "../core/cipher";

export interface VigenereCipherOptions {
  key: string;
}

class VigenereCipher extends Cipher {
  private key: string;

  constructor(options: VigenereCipherOptions) {
    super();
    this.key = options.key;
  }

  encode(text: string): string {
    return this._transformText(text, true);
  }

  decode(text: string): string {
    return this._transformText(text, false);
  }

  private _transformText(text: string, isEncrypt: boolean): string {
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (!/[A-Za-z]/.test(char)) {
        result += char;
        continue;
      }

      const base = char === char.toUpperCase() ? 65 : 97;
      const shift = this.key.charCodeAt(keyIndex % this.key.length) - 65;
      const shiftValue = isEncrypt ? shift : -shift;
      result += String.fromCharCode(
        ((char.charCodeAt(0) - base + shiftValue + 26) % 26) + base
      );
      keyIndex++;
    }

    return result;
  }
}

export default VigenereCipher;
