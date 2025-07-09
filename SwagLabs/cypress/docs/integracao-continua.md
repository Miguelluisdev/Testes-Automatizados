## ⚙️ **Documentação de CI/CD – SwagLabs Testes Automatizados**

### 📌 1. **Objetivo do CI/CD**

Garantir a execução contínua, automática e rastreável dos testes automatizados do DemoSaaS. A integração contínua (CI) com **GitHub Actions** permite identificar falhas em cada alteração no código, manter a confiabilidade da suíte e gerar evidências de execução (logs, prints e vídeos).

---

### 🚀 2. **Ferramenta Utilizada**

* **GitHub Actions** – Plataforma de automação nativa do GitHub para CI/CD
* **Cypress** – Framework de automação de testes E2E
* **Cypress Cloud** *(opcional)* – Plataforma de monitoramento e dashboard de execuções

---

### 🗂️ 3. **Estrutura do Workflow**

O arquivo principal do pipeline está localizado em:

```
.github/workflows/cypress-tests.yml
```

---

### 🧱 4. **Conteúdo do `cypress-tests.yml`**

```yaml
  swaglabs-tests:
    name: SwagLabs - Cypress Tests
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: SwagLabs

    steps:
      - uses: actions/checkout@v3

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests for SwagLabs
        uses: cypress-io/github-action@v6
        with:
          working-directory: SwagLabs

```

> ⚠️ **Importante**: Se estiver testando um site externo (como o OrangeHRM Demo), remova as etapas `build`, `start` e `wait-on`.

---

### 📡 5. **Integração com Cypress Cloud (opcional)**

Se desejar acompanhar execuções com logs detalhados e dashboards no [Cypress Cloud](https://cloud.cypress.io):

1. Crie uma conta no Cypress Cloud
2. Gere um `Record Key`
3. Adicione ao GitHub como `CYPRESS_RECORD_KEY` (em Settings > Secrets)
4. Atualize o step do Cypress no workflow:

```yaml
      - name: ⚙️ Executar Cypress com Cypress Cloud
        uses: cypress-io/github-action@v6
        with:
          record: true
          key: ${{ secrets.CYPRESS_RECORD_KEY }}
```

---

### 🧪 6. **Quando os testes são executados?**

* **Push** na branch `main`
* **Pull Request** para a branch `main`

> Pode ser personalizado para rodar em outras branches, tags, cron jobs (agendado), etc.

---

### 📂 7. **Evidências e Relatórios**

* Prints e vídeos são automaticamente armazenados em:

  * `cypress/videos`
  * `cypress/screenshots`

* Esses arquivos são enviados como **artifacts do GitHub Actions** se algum teste falhar.

---

### 🛠️ 8. **Manutenção e Personalização**

* Atualize o arquivo `.yml` se:

  * Mudar a baseUrl
  * Adicionar variáveis de ambiente (`.env`)
  * Alterar o comando de execução (`npx`, `npm run`, etc.)
* Use workflows diferentes para ambientes distintos (ex: staging vs produção)

---

### ✅ 9. **Benefícios da Integração**

* Feedback rápido após cada push/PR
* Histórico de falhas e execuções
* Facilita validação de mudanças antes do merge
* Apoia uma cultura de qualidade contínua
