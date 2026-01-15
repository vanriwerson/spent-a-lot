# 💸 SpentALot

> **Aplicação pessoal de controle de gastos mensais**, com visualização da saúde financeira inspirada no conceito de **livro-caixa (gráfico T)**.
> Aplicação mobile desenvolvida com foco em **simplicidade**, **clareza visual** e **persistência local**, permitindo registrar ganhos e despesas diretamente pelo navegador.

Por ser uma aplicação autoral, tomei a liberdade de criar um nome impactante. **SpentALot** é um trocadilho entre _“spent a lot”_ (gastei demais) e **axolotl**, mascote carismático que representa o app.

---

## 🚀 Tecnologias Utilizadas

- [**React 18**](https://react.dev/): Biblioteca para construção de interfaces declarativas e reativas.
- [**Vite**](https://vitejs.dev/): Ferramenta de build e dev server rápido para projetos frontend modernos.
- [**Vite PWA Plugin**](https://vite-pwa-org.netlify.app/): Plugin oficial para Vite que simplifica a criação de **Progressive Web Apps**, automatizando a geração do **manifest**, registro do **Service Worker**, cache de assets e suporte a atualização automática.
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
│   ├── contexts/         # Contextos da aplicação (estados compartilhados)
│   ├── helpers/          # Funções auxiliares (formatação, geração de id)
│   ├── hooks/            # Hooks customizados (ex: análise de instalação PWA)
│   ├── pages/            # Páginas da aplicação
│   ├── services/         # Cálculos e manipulação do localstorage
│   ├── styles/           # Estilos globais e variáveis CSS
│   ├── types/            # Tipagens TypeScript (domínio financeiro)
│   ├── App.tsx           # Estrutura principal da aplicação
│   └── main.tsx          # Ponto de entrada
│
└── package.json          # Dependências e scripts
```

---

## ✨ Features Disponíveis

### Tab Lançamentos

- Form para a entrada da base de cálculos:
  - Salário líquido
  - Carga horária de trabalho semanal
  - Lista de ganhos e gastos

---

### Tab Saúde (Gráfico T)

- Separação clara entre:
  - **Entradas (ganhos)**
  - **Saídas (gastos)**
- Cálculo automático de:
  - Total de ganhos
  - Total de gastos
  - Saldo restante
  - Custo 100 (Conceito aprendido com a Nath Arcuri (Me Poupe). Faz pensar um pouco antes de gastar ^^)
- Indicação visual:
  - Porcentagem de salário utilizada
  - Gastos extrapolando ganhos

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
- Layout simples e acessível
- Feedback visual imediato após cada lançamento

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
