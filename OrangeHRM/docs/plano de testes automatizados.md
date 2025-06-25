## 🤖 **Plano de Testes Automatizados - OrangeHRM (Demo)**

### 📌 1. **Identificação**

* **Nome do Projeto**: OrangeHRM - Sistema de Gestão de Recursos Humanos
* **Versão Avaliada**: Demo pública
* **Ambiente de Testes**: [https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)
* **Tipo de Teste**: Automatizado (E2E + Regressão)
* **Data do Documento**: 24/06/2025
* **Responsável**: Miguel Luis

---

### 🎯 2. **Objetivo**

Automatizar os principais fluxos funcionais do sistema OrangeHRM Demo para garantir estabilidade, reduzir esforço manual e acelerar a detecção de falhas durante ciclos de desenvolvimento, usando testes End-to-End com foco em regressão e validação contínua.

---

### 🧩 3. **Escopo**

**Incluído:**

* Testes automatizados de autenticação
* Navegação entre módulos do sistema
* Validação de formulários e campos obrigatórios
* Fluxos principais dos módulos: PIM, Leave, Recruitment, Admin
* Testes de regressão e smoke test a cada execução no CI

**Excluído:**

* Testes mobile
* Integrações externas (ex: envio de e-mails ou APIs não visíveis na demo)
* Testes de performance ou carga

---

### 🚦 4. **Critérios de Entrada e Saída**

**Critérios de Entrada:**

* Ambiente acessível
* Dados de login válidos disponíveis
* Scripts atualizados no repositório

**Critérios de Saída:**

* Todos os testes do escopo executados com sucesso
* Bugs identificados reportados
* Relatório de execução gerado (local ou CI)
* Evidências arquivadas (logs, prints ou vídeos)

---

### 🌐 5. **Ambientes de Teste**

* **Ambiente único de demo**:
  [https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)
* Dados não persistem entre sessões (reseta a cada login)

---

### 🧪 6. **Tipos de Testes Automatizados**

| Tipo de Teste           | Aplicação no Projeto                 |
| ----------------------- | ------------------------------------ |
| ✅ Testes de Regressão   | A cada alteração ou build            |
| ✅ Testes E2E            | Fluxos completos simulando o usuário |
| 🔜 Testes de API        | Futuro: validações de endpoints REST |
| 🔜 Testes de Integração | Futuro: comunicação entre módulos    |

---

### 👤 7. **Responsabilidades**

| Atividade                | Responsável         |
| ------------------------ | ------------------- |
| Criação dos testes       | Miguel Luis         |
| Manutenção e melhorias   | Miguel Luis         |
| Execução local           | QA |
| Execução CI (automática) | GitHub Actions      |

---

### 🔁 8. **Frequência de Execução**

* Local: durante desenvolvimento ou validação de novas funcionalidades
* CI/CD:

  * Pull Requests
  * Push na branch principal
  * Manualmente (via workflow)

---

### 🛠️ 9. **Ferramentas Utilizadas**

| Ferramenta         | Uso                                       |
| ------------------ | ----------------------------------------- |
| **Cypress**        | Automação de testes E2E                   |
| **JavaScript**     | Linguagem base dos testes                 |
| **Cypress Cloud**  | Monitoramento e histórico das execuções   |
| **Git & GitHub**   | Versionamento e repositório de código     |
| **GitHub Actions** | Integração contínua e execução automática |
| **Page Objects**   | Organização e reutilização de comandos    |

---

### 📄 10. **Módulos Automatizados (em progresso)**

| Código RF | Módulo                | Status           |
| --------- | --------------------- | ---------------- |
| RF01      | Login                 | 🔜 A implementar  |
| RF02      | Dashboard             | 🔜 A implementar  |
| RF03      | PIM - Funcionários    | 🔜 A implementar  |
| RF04      | Férias (Leave)        |🔜 A implementar  |
| RF05      | Recrutamento          | 🔜 A implementar |
| RF06      | Administração (Admin) | 🔜 A implementar |

---

### 📁 11. **Entregáveis**

* Casos de teste automatizados (.js / .cy.js)
* Relatórios de execução (CI e/ou Cypress Cloud)
* Prints ou vídeos em caso de falhas
* Código-fonte com documentação inline
* Workflows de CI configurados
