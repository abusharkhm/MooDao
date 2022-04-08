import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x065AF9Ee9cC90cC2dbE6a7cBA5AEE528a7eF01a1");

(async () => {
  try {
    const amount = 1000000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log("✅ There now is", totalSupply.displayValue, "$MOO in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();