# API de Upload de Imagens

Esta é uma API simples para realizar uploads de imagens. Ela permite que os usuários enviem suas imagens para o servidor e fornece URLs para acessar essas imagens posteriormente.

## Funcionalidades Principais

- Upload de imagens para o servidor.
- Recuperação de URLs para as imagens enviadas.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Multer (para gerenciamento de uploads de arquivos)
- MongoDB (ou outro banco de dados para armazenar metadados das imagens)

## Como Usar

### Configuração

1. Clone este repositório: `git clone https://github.com/erickbarrosr/image_upload_backend.git`
2. Navegue até o diretório do projeto: `cd image_upload_backend`
3. Instale as dependências: `npm install`
4. Para executar: `npm run start`

### Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

1. `PORT=8080`
2. `UPLOAD_DIR=uploads`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar esta API.
