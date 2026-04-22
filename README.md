# Calculadora

## Descrição
Este projeto é uma calculadora básica desenvolvida com React e Vite como parte de um trabalho de conclusão de curso.

A aplicação realiza operações matemáticas simples em uma interface visual clara e objetiva.

## Funcionalidades
- Soma
- Subtração
- Multiplicação
- Divisão
- Uso de números decimais
- Limpar tudo com `C`
- Apagar o último caractere com `⌫`
- Exibição da operação atual no visor
- Tratamento de divisão por zero com mensagem de erro

## Tecnologias utilizadas
- React
- Vite
- Styled Components

## Estrutura do projeto
- `src/App.jsx`: lógica principal da calculadora
- `src/components/Input`: visor da calculadora
- `src/components/Buttons`: botões da calculadora
- `src/styles.js`: estilo geral da aplicação
- `src/global.js`: estilos globais

## Como executar o projeto
No terminal, dentro da pasta do projeto, execute:

```bash
npm install
npm start
```

Depois, abra no navegador:

```bash
http://localhost:5173/
```

## Como gerar a build
Para gerar a versão de produção, execute:

```bash
npm run build
```

Os arquivos gerados ficarão na pasta `dist`.

## Objetivo acadêmico
O objetivo deste projeto é apresentar, de forma simples, o desenvolvimento de uma aplicação web com interface interativa utilizando React.
