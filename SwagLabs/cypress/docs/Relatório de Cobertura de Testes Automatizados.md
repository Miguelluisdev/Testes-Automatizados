# 📊 Relatórios de Testes Automatizados - DemoSaaS

Este documento reúne os **relatórios de execução automatizada** dos testes end-to-end realizados no sistema **DemoSaaS**, utilizando **Cypress** integrado a um pipeline de **CI/CD**.

---

## ✅ Visão Geral da Execução

- **Total de Testes Executados:** 19
- ✅ **Testes Passaram:** 17
- ❌ **Testes Falharam:** 1
- ⏭️ **Testes Ignorados:** 1
- ⏱️ **Tempo Total:** 1 minuto e 13 segundos

---

## 🧪 Resultado por Cenário

| Cenário                                   | Arquivo                                  | Testes | Passing | Failing | Skipped |
|------------------------------------------|------------------------------------------|--------|---------|---------|---------|
| Autenticação de Usuário                  | CT_RF01-Autenticação de Usuário.cy.js     | 3      | ✅ 3     | ❌ 0     | -       |
| Cadastro de Usuário                      | CT_RF02-Cadastro de Usuário.cy.js         | 7      | ✅ 7     | ❌ 0     | -       |
| Criação de Organização                   | CT_RF03-Criação de Organização.cy.js      | 3      | ✅ 3     | ❌ 0     | -       |
| Gerenciamento de Conta                   | CT_RF04-Gerenciamento de Conta.cy.js      | 5      | ✅ 3     | ❌ 1     | ⏭️ 1     |
| Dashboard de Projetos e Tickets          | CT_RF05-Dashboard de Projetos e Tickets.js| 1      | ✅ 1     | ❌ 0     | -       |

---

## ⚠️ Considerações Técnicas

Durante a execução automatizada, **alguns testes falharam ou foram ignorados devido a limitações e instabilidades do próprio sistema DemoSaaS**:

### ❗ Principais Problemas Encontrados

- **Instabilidade nos seletores**: Muitos elementos possuem classes dinâmicas ou mudam após atualização da página, quebrando os testes com frequência.
- **Comportamento imprevisível**: A mesma funcionalidade às vezes retorna erro ou se comporta de forma diferente, mesmo com os mesmos dados.
- **Limite de requisições**: O site bloqueia tentativas sucessivas com o erro _“Too many requests. Please try again later.”_, dificultando execuções em sequência nos pipelines.
- **Funcionalidades incompletas ou instáveis**: Algumas funcionalidades (como alteração de senha ou organização) não respondem adequadamente às ações esperadas.
- **Componentes ocultos ou sobrepostos**: Alguns botões ou menus requerem uso de `{ force: true }` por estarem parcialmente ocultos, o que não é ideal.

---

## 💬 Conclusão

> Apesar do esforço em aplicar boas práticas e garantir cobertura dos principais fluxos da aplicação, **o DemoSaaS não é um ambiente ideal para testes automatizados contínuos**, especialmente em pipelines.
