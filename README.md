# 🧪 Testes Automatizados

Repositório dedicado à automação de testes de sites que já passaram por uma bateria de testes manuais. Os testes automatizados aqui desenvolvidos têm como base os cenários, casos de teste e documentação disponíveis no repositório de testes manuais:  
🔗 [Acesse o repositório de testes manuais](https://github.com/Miguelluisdev/testes-manuais)

---

## 📌 Objetivo

Este projeto tem como objetivo:

- Automatizar os cenários e casos de teste previamente validados manualmente;
- Aumentar a cobertura de testes e a confiabilidade das aplicações testadas;
- Promover boas práticas em automação de testes;
- Servir como referência e apoio para a comunidade de QA e profissionais em transição de carreira.

---

### 🔧 Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) — Framework de automação de testes end-to-end.
* [Cypress Cloud](https://www.cypress.io/cloud/) — Plataforma para monitoramento e análise de execuções de testes em nuvem.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — Linguagem principal utilizada nos testes automatizados.
* [Cucumber / Gherkin](https://cucumber.io/docs/gherkin/) — Utilizado para escrita de cenários em linguagem natural (BDD), quando necessário.
* [Page Objects Pattern](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/) — Padrão de projeto usado para organizar e desacoplar os elementos das páginas dos testes.
* [Git](https://git-scm.com/) — Sistema de controle de versão.
* [GitHub](https://github.com/) — Plataforma de hospedagem de código, controle de versão e integração contínua.
* [GitHub Actions](https://docs.github.com/actions) — Ferramenta de CI/CD usada para executar os testes automatizados de forma contínua.
  
---

## 🧭 Estrutura do Projeto

```

Testes-Automatizados/
│
├── site-exemplo-01/
│   ├── cypress/
│   ├── cypress.config.js
│   └── package.json
│
├── site-exemplo-02/
│   ├── ...
│
└── README.md

````

Cada pasta representa um projeto individual com seus próprios testes automatizados, organizados de forma modular para facilitar o entendimento e a manutenção.

---

## 🚀 Como Executar os Testes

> **Pré-requisitos:** Node.js e npm instalados.

```bash
# Instalar dependências
npm install

# Executar os testes no modo interativo
npx cypress open

# Executar os testes em modo headless
npx cypress run
````

*Consulte a documentação específica em cada subpasta para mais detalhes sobre os comandos e configurações.*

---

## 🤝 Contribuições

Este repositório é aberto à colaboração! Caso tenha ideias de melhorias, sugestões de sites para testar, feedbacks ou deseje contribuir com novos testes automatizados, sinta-se à vontade para abrir uma issue ou pull request.

---

## 👨‍💻 Autor

**Miguel Luis**
[GitHub](https://github.com/Miguelluisdev) • [LinkedIn](https://www.linkedin.com/in/miguel-luis-07b063358/)
