import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x255c2e3e9482AA459C3507009c4dCD349567d2C6");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Masked Man",
        description: "This NFT will give you access to MooDao!",
        image: readFileSync("scripts/assets/membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();