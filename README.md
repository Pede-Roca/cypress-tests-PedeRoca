# Cypress Automated Tests

Este repositório contém os testes automatizados End-to-End (E2E) utilizando o [Cypress](https://www.cypress.io/) para validação de funcionalidades do sistema.

## 🧪 Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js

## 📁 Estrutura do Projeto

```bash
cypress/
  ├── e2e/               # Testes E2E
  │   ├── login.cy.js    # Teste de login
  │   ├── addProductToCart.cy.js # Teste carrinho de compras 
  │   └── finalizarPedido.cy.js # Teste finalização de compras
  ├── fixtures/          # Dados fictícios para os testes
  ├── support/           # Arquivos de suporte (comandos customizados, etc.)
cypress.config.js        # Configurações do Cypress
package.json             # Dependências e scripts
```
# Como executar os testes

## Instalar dependências

```npm install```
## Executar os testes no modo interativo
```npx cypress open```

## Executar os testes no modo headless(linha de comando)
```npx cypress run```
