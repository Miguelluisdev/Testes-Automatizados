# 🧪 Testes Automatizados - DemoSaaS

Este repositório contém uma bateria de testes automatizados desenvolvidos com **Cypress** para o sistema **DemoSaaS**. O objetivo principal foi colocar em prática os conceitos de automação de testes aplicando boas práticas e avaliando a viabilidade do sistema como um ambiente de testes automatizados.

---

## ✅ Funcionalidades Testadas

- Autenticação (login)
- Cadastro de usuários
- Criação e gerenciamento de organizações
- Alteração de dados da conta
- Alteração de senha
- Visualização e criação de tickets

---

## 🔧 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/) – para geração dinâmica de dados
- JavaScript ES6+
- Page Objects (parcialmente aplicado)
- Custom Commands (para login)

---

## 🚀 Boas Práticas Aplicadas

- ✅ Separação de responsabilidades com Page Objects
- ✅ Uso de dados dinâmicos com Faker.js
- ✅ Automação de cenários críticos (Happy Path e Negativos)
- ✅ Validação de mensagens e comportamentos esperados
- ✅ Reutilização de código com comandos customizados (`cy.login()`)

---

## 💡 Aprendizados e Ajustes

Durante o desenvolvimento dos testes:

- Inicialmente usei **Page Objects**, mas percebi que a forma de aplicação estava incorreta. Após pesquisa, refatorei alguns arquivos para aderir às boas práticas.
- Decidi pausar o uso de Page Objects em alguns casos para focar na clareza e simplicidade dos testes, principalmente ao lidar com instabilidades e limitações da aplicação.
- Trabalhei na **redução de repetição de código**, mas ainda é um ponto que preciso evoluir mais.
- Aprendi que nem sempre vale automatizar tudo: **funcionalidades instáveis ou de baixa prioridade** demandam esforço extra e tornam a automação menos produtiva.

---

## ⚠️ Limitações Encontradas

Durante os testes no DemoSaaS, foram identificados diversos pontos que dificultam a automação:

### ❌ Problemas Técnicos

- **Seletores ruins e inconsistentes:** Alguns mudam dinamicamente a cada reload, o que quebra os testes mesmo com boa estratégia de targeting.
- **Limite de requisições:** Após 3 ou 4 requisições (principalmente login), o sistema retorna `Too many requests`.
- **Funcionalidades instáveis:** Algumas telas e ações mudam de comportamento, exibem erros aleatórios ou não completam o fluxo esperado.

### ❗ Conclusão Técnica

> A automação de testes exige que as funcionalidades sejam minimamente estáveis e os seletores bem definidos. O sistema DemoSaaS, embora útil para aprendizado manual, **não é ideal para testes automatizados em larga escala**. Recomendamos foco em testes manuais para funcionalidades instáveis e automatização apenas para os fluxos críticos e mais sólidos.

