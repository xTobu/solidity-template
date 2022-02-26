import { expect } from "chai";

export function shouldBehaveLikeGreeter(): void {
  it("1. should return the new greeting once it's changed", async function () {
    expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Hello, world!");

    await this.greeter.setGreeting("Bonjour, le monde!");
    expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Bonjour, le monde!");
  });

  it("2. test not allowed greeting", async function () {
    // https://stackoverflow.com/a/69868855/11378085
    await expect(this.greeter.setGreeting("Test")).to.be.revertedWith("greeting is Test");
  });
}
