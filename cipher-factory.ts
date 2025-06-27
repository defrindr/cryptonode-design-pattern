import CaesarCipher, { CaesarCipherOptions } from "./encryptions/caesar";
import Cipher from "./core/cipher";
import VigenereCipher, { VigenereCipherOptions } from "./encryptions/vigenere";

// Union type untuk opsi berdasarkan cipher
type CipherOptionsMap = {
  caesar: CaesarCipherOptions;
  vigenere: VigenereCipherOptions;
};

type CipherType = keyof CipherOptionsMap;
type CipherConstructor<T> = new (options: T) => Cipher;

// Factory Pattern
class CipherFactory {
  private static cipherMap: {
    [K in CipherType]: CipherConstructor<CipherOptionsMap[K]>;
  } = {
    caesar: CaesarCipher,
    vigenere: VigenereCipher,
  };

  static createCipher<T extends CipherType>(
    type: T,
    options: CipherOptionsMap[T]
  ): Cipher {
    const CipherClass = this.cipherMap[type];

    if (!CipherClass) {
      throw new Error(`Unknown cipher type: ${type}`);
    }

    return new CipherClass(options);
  }
}

export { CipherFactory, CipherType };
