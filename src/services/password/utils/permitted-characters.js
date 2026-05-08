//extract method
async function permittedCharacters() {
  let permitted = [];
  const hasPasswordConfig =
    process.env.UPPERCASE_LETTERS ||
    process.env.LOWERCASE_LETTERS ||
    process.env.NUMBERS ||
    process.env.SPECIAL_CHARACTERS;

  const useUppercase = process.env.UPPERCASE_LETTERS === "true";
  const useLowercase = process.env.LOWERCASE_LETTERS === "true";
  const useNumbers = hasPasswordConfig ? process.env.NUMBERS === "true" : true;
  const useSpecialCharacters = hasPasswordConfig
    ? process.env.SPECIAL_CHARACTERS === "true"
    : true;

  if (useUppercase) permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (useLowercase) permitted.push(..."abcdefghijklmnopqrstuvwxyz");

  if (useNumbers) permitted.push(..."0123456789");

  if (useSpecialCharacters) permitted.push(..."!@#$%^&*()-_");

  return permitted;
}

export default permittedCharacters;
