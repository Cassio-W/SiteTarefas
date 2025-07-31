# 📋 TaskManager Portfolio Project

Projeto pessoal em desenvolvimento para o meu portfólio! Um site simples onde você pode **criar, editar, excluir e organizar tarefas** com título, descrição, data final, status e muito mais. 💼✅

---

## 🛠 Tecnologias

### 📦 Backend
- 🚀 [NestJS](https://nestjs.com/) com [Node.js](https://nodejs.org/)
- 🧠 TypeScript
- 🗄 [Prisma ORM](https://www.prisma.io/)
- 🐘 PostgreSQL (via [Neon](https://neon.tech/))
- 🔐 JWT para autenticação
- 🧪 Testes automatizados (em breve)

### 💻 Frontend
- ⚛️ [React](https://reactjs.org/)
- 💨 [Tailwind CSS](https://tailwindcss.com/)
- ⚡️ [Vite](https://vitejs.dev/) para build e dev server rápidos
- 🌐 [React Router](https://reactrouter.com/) para navegação SPA
- 📡 [Axios](https://axios-http.com/) para requisições HTTP

---

## ✨ Funcionalidades

- 📌 Criar tarefas personalizadas
- 📝 Editar e atualizar tarefas existentes
- ❌ Deletar tarefas
- 📅 Adicionar data final e status
- 🔐 Cadastro e login de usuários
- ✅ Verificação de login e autenticação via token

---

## ⚙️ Configuração do Banco de Dados

Antes de iniciar o backend, você precisa configurar a conexão com seu banco PostgreSQL.

1. Crie um arquivo `.env` dentro da pasta `backend/` com o seguinte conteúdo:

```bash
DATABASE_URL="postgresql://<USUARIO>:<SENHA>@<HOST>:<PORTA>/<NOME_DO_BANCO>?schema=public"
JWT_SECRET="sua_chave_secreta_aqui"
```

> 🔁 Substitua os valores `<USUARIO>`, `<SENHA>`, `<HOST>`, `<PORTA>` e `<NOME_DO_BANCO>` pelas suas informações do PostgreSQL (ou da Neon, se estiver usando).

2. Em seguida, rode o comando abaixo para aplicar as migrations do banco de dados:

```bash
cd backend
npx prisma migrate dev
```

---

## 🧪 Como rodar o projeto localmente

Se quiser testar o projeto em sua máquina, siga os passos abaixo:

1. Clone o repositório.

2. Instale as dependências:

```bash
cd frontend && npm install
cd ../backend && npm install
cd ..
npm install
```

3. Inicie o projeto com:

```bash
npm run dev
```