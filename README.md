# 🔐 Projeto QR Code


Aplicação de terminal feita em **Node.js** para gerar **QR Codes** e **senhas aleatórias**. O projeto foi criado para praticar JavaScript, uso de pacotes npm, prompts no terminal e organização de arquivos por serviços.


---


## 🚀 Funcionalidades


- Gerar QR Code a partir de um link
- Exibir o QR Code diretamente no terminal
- Gerar senhas aleatórias
- Configurar os caracteres da senha pelo arquivo `.env`


---


## 🛠️ Tecnologias utilizadas


![Node.js](https://img.shields.io/badge/Node.js-0d1117?style=for-the-badge&logo=node.js&logoColor=339933)
![JavaScript](https://img.shields.io/badge/JavaScript-0d1117?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NPM](https://img.shields.io/badge/NPM-0d1117?style=for-the-badge&logo=npm&logoColor=CB3837)


---


## ▶️ Como executar


Clone o repositório:


```bash
git clone https://github.com/tayllaefg-netizen/Projeto-qrcode.git
```


Acesse a pasta:


```bash
cd Projeto-qrcode
```


Instale as dependências:


```bash
npm install
```


Execute o projeto:


```bash
npm start
```


---


## ⚙️ Configuração da senha


Crie um arquivo `.env` na raiz do projeto:


```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```


---


## 📂 Estrutura


```bash
src/
├── index.js
├── prompts-schema/
└── services/
    ├── password/
    └── qr-code/
```


---


## 👩‍💻 Autora


Feito por **Tayla**.


[![GitHub](https://img.shields.io/badge/GitHub-tayllaefg--netizen-0d1117?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tayllaefg-netizen)





