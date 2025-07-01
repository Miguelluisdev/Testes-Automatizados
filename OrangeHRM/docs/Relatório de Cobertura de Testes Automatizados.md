# ✅ Projeto de Testes Automatizados - OrangeHRM

Este repositório contém testes automatizados end-to-end desenvolvidos com **Cypress** para a versão pública de demonstração do sistema [OrangeHRM](https://opensource-demo.orangehrmlive.com). O projeto foi construído com foco em aprendizado, boas práticas de QA e simulação de cenários reais dentro da rotina de testes.

---

## 📁 Estrutura de Testes

Todos os testes estão organizados por cenários reais de uso da aplicação:

| Arquivo                          | Módulo                    | Descrição                                                      |
|----------------------------------|----------------------------|----------------------------------------------------------------|
| `Cenário 01-Login.cy.js`         | Login                      | Casos de login com credenciais válidas e inválidas             |
| `Cenário 02-PIM.cy.js`           | Funcionários (PIM)         | Pesquisa e visualização de colaboradores                       |
| `Cenário 03-Leave.cy.js`         | Solicitação de Férias      | Aplicação e validação de pedidos de licença                    |
| `Cenário 04-Admin.cy.js`         | Administração de Usuários  | Criação e verificação de novos usuários                        |
| `Cenário 05-Chat.cy.js`          | Mural / Buzz               | Publicações com texto e imagem                                 |
| `Fail-site.cy.js`                | Verificação de Instabilidade | Detecta falhas ou indisponibilidade do site OrangeHRM         |

---

## ✅ Funcionalidades Testadas

- [x] Login e autenticação
- [x] Solicitação de férias com e sem dados
- [x] Criação de novos usuários (Admin)
- [x] Tentativa de criação com usuários já existentes
- [x] Validações de campos obrigatórios
- [x] Publicações no feed (texto e imagem)
- [x] Busca por funcionários cadastrados
- [x] Verificação de falhas de carregamento do sistema

---

## 🔧 Custom Commands

O projeto conta com **comandos personalizados** no `support/commands.js`, como:

```js
Cypress.Commands.add("login", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  cy.get('input[name="username"]').type("Admin");
  cy.get('input[name="password"]').type("admin123");
  cy.get(".orangehrm-login-button").click();
});
````

Isso melhora a reutilização e evita repetição de código nos testes.

---

## 🧪 Cobertura de Testes

> **Observação:** Como é um projeto de testes end-to-end, não há geração de cobertura de código por arquivos `.js`, mas sim cobertura funcional baseada nos módulos e casos de uso reais.

| Módulo               | Cobertura de Casos                          |
| -------------------- | ------------------------------------------- |
| Login                | ✅ Totalmente testado                        |
| PIM (Funcionários)   | ✅ Pesquisa validada                         |
| Leave (Licenças)     | ✅ Solicitações e validações de campos       |
| Admin (Usuários)     | ✅ Criação, duplicatas e erros de formulário |
| Buzz (Mural)         | ✅ Texto, imagem e verificação               |
| Estabilidade do Site | ✅ Teste extra para simular queda            |

---

## ⚠️ Desafios Enfrentados

Durante os testes automatizados, alguns desafios foram observados:

### ❌ Falta de seletores semânticos

* Muitos elementos utilizam seletores como `:nth-child()` ou classes dinâmicas (`data-v-*`), o que **quebra facilmente os testes** quando o site é atualizado.
* Exemplo de seletor problemático:

  ```js
  .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper
  ```

### 🔄 Mudanças constantes no sistema

* Durante os testes, o site **mudou comportamentos** como:

  * Novos rótulos
  * Filtros diferentes
  * Funcionalidades ocultas dependendo do dia

### 🛑 Site fora do ar

* Em alguns momentos, o OrangeHRM Demo ficou **totalmente indisponível**, causando falhas nos testes de CI e localmente.
* Criei um teste de **verificação de disponibilidade** antes de rodar a suíte principal.

---

## 💬 Importância da Comunicação em QA

Um dos aprendizados foi que **boas práticas de QA não dependem apenas de ferramentas, mas da comunicação com o time**:

* Quando um QA entende o funcionamento do sistema e comunica falhas recorrentes, isso ajuda o time de dev a corrigir na raiz.
* Documentar seletores fracos ou instabilidades ajuda os times a priorizar melhorias na aplicação.

---

## 💡 Considerações Finais

O OrangeHRM é um excelente sistema para quem deseja:

* Aprender testes automatizados na prática
* Trabalhar com múltiplos módulos e funcionalidades
* Enfrentar desafios reais como:

  * Instabilidades
  * Falta de boas práticas de frontend
  * Validações condicionais

Apesar das dificuldades, é um **ótimo laboratório para treinar testes robustos, dinâmicos e resilientes**.

---

## 🛠️ Tecnologias

* Cypress 12+
* Node.js 18+
* GitHub Actions (CI/CD)
* Estrutura Padrão + comandos customizados

---

## 📷 Prints & Evidências

As imagens dos testes, falhas e execuções estão disponíveis na pasta `/screenshots`.

---

## 🚀 Contribua

Se você também automatiza no OrangeHRM ou encontrou formas de tornar os testes mais estáveis, **sinta-se à vontade para contribuir** com sugestões, melhorias ou novas abordagens.
