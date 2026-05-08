import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  const result = await prompt.get(promptSchemaQRCode);
  await handle(null, result);
}

export default createQRCode;
