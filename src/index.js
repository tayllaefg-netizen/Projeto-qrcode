import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.start();

  try {
    const choose = await prompt.get(promptSchemaMain);

    if (choose.select === "1") await createQRCode();
    if (choose.select === "2") await createPassword();
  } catch (err) {
    console.log(err);
  }
}

main();
