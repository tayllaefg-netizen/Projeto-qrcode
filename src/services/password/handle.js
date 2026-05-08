import permittedCharacters from "./utils/permitted-characters.js";
import { randomInt } from "node:crypto";

async function handle() {
  let characters = [];
  let password = "";

  const passwordLength = Number(process.env.PASSWORD_LENGTH) || 12;
  characters = await permittedCharacters();

  if (characters.length === 0) {
    throw new Error("Nenhum caractere permitido para gerar senha.");
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = randomInt(characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;
