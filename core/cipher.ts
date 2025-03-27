abstract class Cipher {
  protected defaultLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor() {
    if (new.target === Cipher) {
      throw new Error(
        "Cipher is an abstract class and cannot be instantiated directly"
      );
    }
  }

  abstract encode(text: string): string;
  abstract decode(text: string): string;

  process(type: "encrypt" | "decrypt", text: string): string {
    if (!type) throw new Error("Type cannot be empty");
    if (!text) throw new Error("Text cannot be empty");

    return type === "encrypt" ? this.encode(text) : this.decode(text);
  }
}

export default Cipher;
