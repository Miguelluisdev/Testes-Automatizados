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

> **Importante:** para executar os testes de um site você sempre deve **entrar na pasta desse site** (por exemplo `cd site-exemplo-01`) antes de rodar os comandos abaixo — cada subprojeto tem suas dependências/configurações isoladas.

---

## 🚀 Passo a passo — Como executar os testes

### 🛠 Pré-requisitos gerais

Instale as ferramentas abaixo (links oficiais):

* Node.js (inclui `npm`) — [https://nodejs.org/](https://nodejs.org/)
* Python 3 — [https://www.python.org/](https://www.python.org/)
* pip (gerenciador de pacotes Python) — geralmente já vem com o Python.
* Git — [https://git-scm.com/](https://git-scm.com/)

> Dica: no macOS você também pode usar `brew` para instalar (`brew install node`, `brew install python`).

---

### 1) Clonar o repositório (local)

```bash
# clonar o repositório principal
git clone https://github.com/Miguelluisdev/Testes-Automatizados.git
cd Testes-Automatizados
```

### 2) Entrar na pasta do site que deseja executar

Cada site tem suas dependências próprias. Exemplo:

```bash
cd site-exemplo-01
```

> Repita esse passo para cada site que quiser executar.

---

### 3) Instalar dependências do Cypress (por site)

Dentro da pasta do site:

```bash
# instalar dependências Node (package.json)
npm install
```

Se o projeto usa `npm ci` em CI, pode usar `npm ci` localmente quando quiser instalar de forma reprodutível.

---

### 4) Executar testes Cypress

No diretório do site (ex.: `site-exemplo-01`):

```bash
# abrir Cypress em modo interativo (útil durante desenvolvimento)
npx cypress open

# executar testes em modo headless (CI / execução local sem GUI)
npx cypress run
```

Se desejar executar apenas uma spec específica:

```bash
npx cypress run --spec "cypress/e2e/meu_teste.cy.js"
```

---

### 5) Instalar dependências do Robot Framework (por site)

Dentro da pasta do site (ex.: `site-exemplo-01`), crie um ambiente Python isolado (opcional, recomendado):

```bash
# criar virtualenv (recomendado)
python -m venv .venv
# ativar (Linux/macOS)
source .venv/bin/activate
# ativar (Windows PowerShell)
.\\.venv\\Scripts\\Activate.ps1
```

Instale o Robot Framework e bibliotecas necessárias:

```bash
pip install --upgrade pip
pip install robotframework
pip install robotframework-seleniumlibrary
pip install webdriver-manager
```

> Observação: alguns projetos podem incluir um `requirements.txt` com versões fixas — se existir, use `pip install -r requirements.txt`.

---

### 6) Executar testes Robot Framework

Ainda no diretório do site (presumindo estrutura `robot/tests/`):

```bash
# executar toda a suíte de testes Robot
robot robot/tests/

# executar um arquivo de testes específico
robot robot/tests/minha_suite.robot
```

Resultados serão gerados em `report.html`, `log.html` e `output.xml` (padrão do Robot Framework) no diretório em que os testes foram executados.

---

### 7) Executar tudo de uma vez (opcional / script)

Se quiser um comando na raiz do subprojeto para executar ambos (Cypress + Robot) você pode criar scripts no `package.json`. Exemplo de scripts:

```json
"scripts": {
  "test:cypress": "cypress run",
  "test:robot": "robot robot/tests/",
  "test:all": "npm run test:cypress && npm run test:robot"
}
```

> Para executar: `npm run test:all` (lembre-se de estar na pasta do site).

---

## ⚠️ Dicas 

* Certifique-se de que os drivers do navegador (ChromeDriver / geckodriver) estejam acessíveis ao Robot Framework. O `webdriver-manager` pode ajudar a baixar/gerenciar drivers automaticamente.
* Caso o Robot não encontre o Chrome/Firefox, verifique o PATH ou instale o driver com `webdriver-manager`.
* Se algum teste espera dados de teste (fixtures), verifique os arquivos na pasta `fixtures/` do subprojeto.
* Para evitar “flaky tests”, use esperas explícitas e seletores resilientes (data-attributes).
* Em CI (GitHub Actions), prefira rodar `npx cypress run --record` com variável de ambiente para o token, e `robot` com opções para gerar relatórios.

---

## 🤝 Contribuições

Este repositório é aberto à colaboração! Caso tenha ideias de melhorias, sugestões de sites para testar, feedbacks ou deseje contribuir com novos testes automatizados (em Cypress ou Robot Framework), sinta-se à vontade para abrir uma issue ou pull request.

---

## 👨‍💻 Autor

**Miguel Luis**
[GitHub](https://github.com/Miguelluisdev) • [LinkedIn](https://www.linkedin.com/in/miguel-luis-07b063358/)
