import Cipher from "../core/cipher";

export interface CaesarCipherOptions {
  shift: number;
}

class CaesarCipher extends Cipher {
  private shift: number;

  constructor(options: CaesarCipherOptions) {
    super();
    this.shift = options.shift;
  }

  encode(source: string): string {
    return source.replace(/[A-Z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 65 + this.shift) % 26) + 65)
    );
  }

  decode(source: string): string {
    return source.replace(/[A-Z]/g, (char) =>
      String.fromCharCode(
        ((char.charCodeAt(0) - 65 - this.shift + 26) % 26) + 65
      )
    );
  }
}

export default CaesarCipher;
