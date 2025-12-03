# 🧪 Testes Automatizados

Repositório dedicado à automação de testes de sites que já passaram por uma bateria de testes manuais. Os testes automatizados aqui desenvolvidos têm como base os cenários, casos de teste e documentação disponíveis no repositório de testes manuais:
🔗 [Acesse o repositório de testes manuais](https://github.com/Miguelluisdev/testes-manuais)

Além disso, este projeto também incluirá **testes implementados com Robot Framework**, permitindo comparar estratégias, padrões e abordagens de automação entre diferentes ferramentas.

---

## 📌 Objetivo

Este projeto tem como objetivo:

* Automatizar os cenários e casos de teste previamente validados manualmente;
* Aumentar a cobertura de testes e a confiabilidade das aplicações testadas;
* Promover boas práticas em automação de testes;
* Servir como referência e apoio para a comunidade de QA e profissionais em transição de carreira;
* **Explorar múltiplas ferramentas de automação**, integrando testes feitos com Cypress e Robot Framework nos mesmos sites, para fins de aprendizado e comparação técnica.

---

### 🔧 Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) — Framework de automação de testes end-to-end.
* [Cypress Cloud](https://www.cypress.io/cloud/) — Monitoramento e análise de execuções em nuvem.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — Linguagem principal dos testes com Cypress.
* [Cucumber / Gherkin](https://cucumber.io/docs/gherkin/) — Escrita de cenários em linguagem natural (BDD), quando necessário.
* [Page Objects Pattern](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/) — Organização dos elementos e fluxos de página.
* [Robot Framework](https://robotframework.org/) — Framework de automação baseado em palavras-chave, utilizado para expandir a cobertura de testes e diversificar abordagens.
* [SeleniumLibrary](https://robotframework.org/SeleniumLibrary/) — Suporte a testes web dentro do Robot Framework.
* [Git](https://git-scm.com/) — Controle de versão.
* [GitHub](https://github.com/) — Hospedagem do código e versionamento.
* [GitHub Actions](https://docs.github.com/actions) — CI/CD para executar testes automaticamente.

---

## 🧭 Estrutura do Projeto

```
Testes-Automatizados/
│
├── site-exemplo-01/
│   ├── cypress/
│   ├── robot/
│   ├── cypress.config.js
│   ├── robot.config
│   └── package.json
│
├── site-exemplo-02/
│   ├── cypress/
│   ├── robot/
│   ├── ...
│
└── README.md
```

Cada pasta representa um projeto individual com seus próprios testes automatizados, tanto em **Cypress** quanto em **Robot Framework**, organizados de forma modular para facilitar o entendimento, o estudo e a manutenção.

---

## 🚀 Como Executar os Testes

> **Pré-requisitos:** Node.js, npm e Python instalados (para executar Robot Framework).

### Cypress

```bash
# Instalar dependências
npm install

# Modo interativo
npx cypress open

# Modo headless
npx cypress run
```

### Robot Framework

```bash
# Instalar dependências
pip install robotframework
pip install robotframework-seleniumlibrary
pip install webdriver-manager

# Executar testes
robot robot/tests/
```

*Consulte a documentação específica em cada subpasta para mais detalhes sobre configurações e comandos.*

---

## 🤝 Contribuições

Este repositório é aberto à colaboração! Caso tenha ideias de melhorias, sugestões de sites para testar, feedbacks ou deseje contribuir com novos testes automatizados (em Cypress ou Robot Framework), sinta-se à vontade para abrir uma issue ou pull request.

---

## 👨‍💻 Autor

**Miguel Luis**
[GitHub](https://github.com/Miguelluisdev) • [LinkedIn](https://www.linkedin.com/in/miguel-luis-07b063358/)
