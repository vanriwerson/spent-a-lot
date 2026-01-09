# SpentALot 💸

> **Aplicação pessoal de controle de gastos mensais**, inspirada no conceito clássico de **livro-caixa (gráfico T)**.  
> Desenvolvida com foco em **simplicidade**, **clareza visual** e **persistência local**, permitindo registrar ganhos e despesas diretamente pelo navegador, inclusive no celular.

O nome **SpentALot** é um trocadilho entre _“spent a lot”_ (gastei demais) e **axolotl**, mascote carismático que representa o app.

---

## 🚀 Tecnologias Utilizadas

- [**React 18**](https://react.dev/): Biblioteca para construção de interfaces declarativas e reativas.
- [**Vite**](https://vitejs.dev/): Ferramenta de build e dev server rápido para projetos frontend modernos.
- [**TypeScript**](https://www.typescriptlang.org/): Tipagem estática para maior segurança e previsibilidade.
- [**CSS3 (Vanilla)**](https://developer.mozilla.org/docs/Web/CSS): Estilização manual, sem frameworks, com foco em controle total da UI.
- **LocalStorage**: Persistência de dados no navegador, funcionando como “database” local.
- **Git & GitHub**: Versionamento e deploy da aplicação.

---

## 📂 Estrutura do Projeto

```
spent-a-lot/
│
├── public/
│   └── icons/            # Ícones e assets públicos (PWA)
│
├── src/
│   ├── assets/           # Imagens e recursos visuais (mascote, ícones)
│   ├── components/       # Componentes reutilizáveis da interface
│   ├── hooks/            # Hooks customizados (ex: persistência no localStorage)
│   ├── pages/            # Páginas da aplicação
│   ├── types/            # Tipagens TypeScript (domínio financeiro)
│   ├── utils/            # Funções auxiliares e cálculos
│   ├── styles/           # Estilos globais e variáveis CSS
│   ├── App.tsx           # Estrutura principal da aplicação
│   └── main.tsx          # Ponto de entrada
│
└── package.json          # Dependências e scripts
```

---

## ✨ Conceitos e Destaques Técnicos

### 📊 Livro-caixa (Gráfico T)

- Separação clara entre:
  - **Entradas (ganhos)**
  - **Saídas (gastos)**
- Cálculo automático de:
  - Total de ganhos
  - Total de gastos
  - Saldo restante
- Indicação visual quando:
  - O gasto se aproxima do limite
  - O saldo é ultrapassado

---

### 💾 Persistência Local

- Os dados são armazenados utilizando **LocalStorage**.
- Estrutura pensada para:
  - Fácil leitura
  - Atualização incremental
  - Possível migração futura para backend
- Ideal para uso pessoal

---

### 📱 Mobile-first

- Interface pensada para uso diário no celular
- Inputs simples e acessíveis
- Feedback visual imediato após cada lançamento

---

## 🧩 Funcionalidades

- ➕ Registro de ganhos e despesas
- 📆 Organização por mês/ano
- 📊 Visualização de saldo em tempo real
- ⚠️ Alerta visual ao exceder o orçamento
- 💾 Persistência automática no navegador

---

## 💻 Rodando o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/vanriwerson/spent-a-lot.git
cd spent-a-lot
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

> Aplicação disponível em `http://localhost:5173`

### 4. Build para produção

```bash
npm run build
```

---

## 🚀 Deploy

A aplicação é compatível com **GitHub Pages**, pois utiliza apenas recursos estáticos.

O deploy consiste em:

- Build da aplicação com Vite
- Publicação da pasta `dist/`

---

## 👨‍💻 Sobre o Desenvolvedor

[**Bruno Riwerson Silva**](https://www.linkedin.com/in/bruno-riwerson/) é um **desenvolvedor full-stack** com foco em **engenharia de software**, **boas práticas** e **experiência do usuário**.

Atua com:

- **React & TypeScript**
- **Node.js e .NET**
- **Arquiteturas organizadas (MSC / Clean Code)**
- **Bancos de dados relacionais e NoSQL**
- **Aplicações desktop, web e APIs**

Busca sempre criar soluções **claras, funcionais e bem estruturadas**, priorizando a manutenção e a experiência real de uso.
