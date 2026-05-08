# Projeto QR Code

Aplicacao de terminal feita em Node.js para gerar QR Codes e senhas aleatorias. O projeto foi organizado em camadas simples para separar entrada de dados, regras de negocio e servicos.

## O que o projeto faz

- Gera QR Code no terminal a partir de um link informado pelo usuario.
- Gera uma senha aleatoria sempre que a opcao de senha e selecionada.
- Permite configurar o tamanho e os tipos de caracteres da senha usando variaveis de ambiente.

## Tecnologias usadas

- Node.js
- prompt
- qrcode-terminal
- chalk
- crypto nativo do Node.js

## Como instalar

Clone o repositorio e instale as dependencias:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto. Voce pode copiar o modelo abaixo ou usar o arquivo `.env.example`:

```env
UPPERCASE_LETTERS=false
LOWERCASE_LETTERS=false
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

## Como executar

Use o comando:

```bash
npm start
```

O programa exibe um menu:

```text
1 - QRCODE
2 - PASSWORD
```

Ao escolher `1`, informe o link que sera transformado em QR Code e escolha o tipo de exibicao. Ao escolher `2`, uma senha aleatoria sera gerada automaticamente no console.

## Como o codigo foi feito

O ponto de entrada fica em `src/index.js`. Esse arquivo inicia o `prompt`, mostra o menu principal e chama o servico correto de acordo com a escolha do usuario:

- Opcao `1`: chama `createQRCode`.
- Opcao `2`: chama `createPassword`.

Os schemas dos prompts ficam em `src/prompts-schema`. Eles definem quais perguntas aparecem no terminal e quais valores sao aceitos.

## Fluxo do QR Code

Os arquivos do QR Code ficam em `src/services/qr-code`.

O arquivo `create.js` pede ao usuario o link e o tipo de QR Code. Depois disso, ele chama o `handle.js`.

O arquivo `handle.js` usa a biblioteca `qrcode-terminal` para transformar o link digitado em um QR Code no terminal. Quando tudo da certo, ele exibe a mensagem:

```text
QR Code gerado com sucesso:
```

Logo abaixo aparece o QR Code que pode ser lido por um celular.

## Fluxo da senha aleatoria

Os arquivos da senha ficam em `src/services/password`.

O arquivo `create.js` chama o gerador de senha e imprime o resultado no console:

```text
Senha gerada:
```

O arquivo `handle.js` monta a senha. Ele le as configuracoes do `.env`, busca os caracteres permitidos e sorteia cada caractere usando `crypto.randomInt`, uma API nativa do Node.js para gerar numeros aleatorios de forma mais apropriada.

O arquivo `utils/permitted-characters.js` decide quais caracteres podem entrar na senha:

- Letras maiusculas, se `UPPERCASE_LETTERS=true`.
- Letras minusculas, se `LOWERCASE_LETTERS=true`.
- Numeros, se `NUMBERS=true`.
- Caracteres especiais, se `SPECIAL_CHARACTERS=true`.

Com a configuracao atual do exemplo, a senha usa numeros e caracteres especiais, com tamanho de 12 caracteres.

## Estrutura do projeto

```text
src/
  index.js
  prompts-schema/
    prompt-schema-main.js
    prompt-schema-qrcode.js
  services/
    password/
      create.js
      handle.js
      utils/
        permitted-characters.js
    qr-code/
      create.js
      handle.js
```

## Observacoes

O arquivo `.env` nao deve ser enviado para o GitHub, porque ele guarda configuracoes locais. Por isso, o projeto inclui `.env.example` como modelo para quem baixar o repositorio.
