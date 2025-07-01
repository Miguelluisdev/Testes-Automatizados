## 🤖 **Plano de Testes Automatizados - DemoSaaS**

### 📌 1. **Identificação**

* **Nome do Projeto**: DemoSaaS - Sistema de Gestão e Colaboração de Projetos
* **Versão Avaliada**: Demo pública
* **Ambiente de Testes**: [https://demo-saas.bugbug.io/](https://demo-saas.bugbug.io/)
* **Tipo de Teste**: Automatizado (E2E + Regressão)
* **Data do Documento**: 01/07/2025
* **Responsável**: Miguel Luis

---

### 🎯 2. **Objetivo**

Automatizar os principais fluxos funcionais do sistema DemoSaaS para garantir estabilidade, reduzir esforço manual e acelerar a detecção de falhas durante os ciclos de desenvolvimento, com foco em testes End-to-End, smoke test e regressão contínua.

---

### 🧩 3. **Escopo**

**Incluído:**

* Testes de login e recuperação de senha
* Navegação entre módulos do sistema
* Cadastro e gerenciamento de usuários e organizações
* Compartilhamento e colaboração entre contas
* Dashboard e visualização de projetos
* Testes de regressão e smoke test integrados ao CI

**Excluído:**

* Testes mobile
* Integrações com ferramentas externas (ex: Slack, e-mail, etc.)
* Testes de performance ou carga

---

### 🚦 4. **Critérios de Entrada e Saída**

**Critérios de Entrada:**

* Ambiente acessível
* Usuários de teste válidos
* Scripts atualizados e versionados

**Critérios de Saída:**

* Todos os testes executados conforme escopo
* Bugs identificados reportados
* Relatório de execução salvo (local ou CI)
* Evidências de erro armazenadas

---

### 🌐 5. **Ambientes de Teste**

* **Ambiente demo principal**:
  [https://demo-saas.bugbug.io/](https://demo-saas.bugbug.io/)
* Dados podem ser resetados ou não persistir entre sessões

---

### 🧪 6. **Tipos de Testes Automatizados**

| Tipo de Teste           | Aplicação no Projeto             |
| ----------------------- | -------------------------------- |
| ✅ Testes de Regressão   | A cada alteração ou build        |
| ✅ Testes E2E            | Simulam o uso real do sistema    |
| 🔜 Testes de API        | Futuro: verificação de endpoints |
| 🔜 Testes de Integração | Futuro: interações entre módulos |

---

### 👤 7. **Responsabilidades**

| Atividade                | Responsável    |
| ------------------------ | -------------- |
| Criação dos testes       | Miguel Luis    |
| Manutenção e melhorias   | Miguel Luis    |
| Execução local           | QA             |
| Execução CI (automática) | GitHub Actions |

---

### 🔁 8. **Frequência de Execução**

* Local: a cada nova feature ou bug fix
* CI/CD:

  * Em cada Pull Request
  * Push na `main`
  * Manualmente via workflow

---

### 🛠️ 9. **Ferramentas Utilizadas**

| Ferramenta         | Uso                                  |
| ------------------ | ------------------------------------ |
| **Cypress**        | Testes End-to-End                    |
| **JavaScript**     | Linguagem base dos testes            |
| **Cypress Cloud**  | Execuções remotas e histórico        |
| **Git & GitHub**   | Versionamento e colaboração          |
| **GitHub Actions** | CI/CD e execução automatizada        |
| **Page Objects**   | Organização e reutilização de código |

---

### 📄 10. **Módulos Automatizados (em progresso)**

| Código RF | Módulo                          | Status           |
| --------- | ------------------------------- | ---------------- |
| RF01      | Autenticação de Usuário         | 🔜 A implementar |
| RF02      | Cadastro de Usuário             | 🔜 A implementar |
| RF03      | Criação de Organização          | 🔜 A implementar |
| RF04      | Gerenciamento de Conta          | 🔜 A implementar |
| RF05      | Navegação                       | 🔜 A implementar |
| RF06      | Dashboard de Projetos e Tickets | 🔜 A implementar |
| RF07      | Compartilhamento e Colaboração  | 🔜 A implementar |
| RF08      | Recuperação de Senha            | 🔜 A implementar |

---

### 📁 11. **Entregáveis**

* Scripts de testes (.cy.js ou .js)
* Relatórios de execução via CI e Cypress Cloud
* Evidências de falhas (prints, logs, vídeos)
* Código limpo e comentado com Page Objects
* Workflows CI configurados no GitHub