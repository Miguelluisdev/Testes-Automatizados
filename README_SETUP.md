## 🛠️ Instalação (detalhada) & Solução de Problemas

### ✅ Pré-requisitos

* **Node.js** (recomenda-se usar uma versão suportada pelo Cypress — Node 20, 22 ou 24+). Confira a versão instalada com:

```bash
node -v
```

(Se precisar instalar/alterar a versão, recomendo usar nvm ou NVM for Windows). ([docs.cypress.io][1])

* **npm** (vem com o Node), ou **yarn** / **pnpm** se preferir.
* Sistema operacional compatível (Linux, macOS, Windows). Consulte requisitos específicos do Cypress se necessário. ([docs.cypress.io][2])

---

### 📦 Passo a passo — instalação local (repositório raiz ou dentro do subprojeto)

1. Abrir terminal na pasta do projeto (ex.: `site-exemplo-01/`).
2. Inicializar (se ainda não tiver `package.json`):

```bash
npm init -y
```

3. Instalar Cypress como dependência de desenvolvimento:

```bash
npm install cypress --save-dev
```

ou com yarn/pnpm:

```bash
yarn add cypress --dev
# ou
pnpm add --save-dev cypress
```

4. (Opcional) Abrir UI interativa:

```bash
npx cypress open
```

5. Rodar headless:

```bash
npx cypress run
```

Para mais opções de instalação e execução, consulte a doc oficial. ([docs.cypress.io][2])

---

### 🔧 Comandos úteis e variáveis de ambiente

* Forçar download do binário (útil em CI ou ambientes sem internet direta):

```bash
CYPRESS_INSTALL_BINARY=<URL-ou-caminho-zip> npm install cypress
```

* Limpar cache do Cypress (resolve problemas de instalações corrompidas):

```bash
npx cypress cache clear
# depois
npx cypress install
```

* Instalar apenas dependências sem baixar binário (útil em imagens base):

```bash
CYPRESS_SKIP_BINARY_DOWNLOAD=1 npm install
```

Veja opções avançadas na documentação de instalação. ([docs.cypress.io][3])

---

### ⚠️ Erros comuns e soluções rápidas

**1. `Cypress binary not installed` / erro ao iniciar**

* Possíveis causas: falha no download do binário, proxy/firewall, cache corrompido.
* Solução:

  * `npx cypress cache clear` → `npx cypress install`.
  * Forçar `CYPRESS_INSTALL_BINARY` apontando para um arquivo local ou URL conhecido (quando necessário). ([docs.cypress.io][4])

**2. Problemas de versão do Node (incompatibilidade)**

* Sintoma: erros durante `npm install` ou durante execução.
* Solução: usar Node 20/22/24+ (Cypress moderno exige Node 20/22/24+). Troque versão via `nvm`/`nvm-windows`. ([docs.cypress.io][1])

**3. Erro `could not find browser` ou navegador não detectado**

* Sintoma: ao usar `--browser` o Cypress não encontra o binário.
* Solução:

  * Verificar o caminho do navegador.
  * Em containers Linux, instalar dependências de navegadores ou usar imagem Docker preparada.
  * Confirme suporte do browser na versão do Cypress. ([GitHub][5])

**4. Permissões / problemas com diretórios em Linux/macOS**

* Sintoma: EACCES ou permissão negada ao extrair binário.
* Solução:

  * Ajustar permissões do diretório (ex.: `chmod`), rodar `npm install` com usuário correto.
  * Evitar `sudo npm install` — prefira ajustar permissões da pasta do projeto.

**5. CI (GitHub Actions) — falha por tempo limite ao baixar binário**

* Solução:

  * Cache do Cypress e do gerenciador de pacotes; usar a action oficial do Cypress para otimizar. ([docs.cypress.io][6])

Se um erro não for resolvido, colete logs (`npm install` output, `npx cypress info`, arquivos de log) e pesquise o texto exato do erro — a comunidade e issues oficiais costumam ter soluções.

---

### 🧩 Exemplo rápido: workflow de GitHub Actions (modelo)

Crie `.github/workflows/cypress.yml` (exemplo mínimo com cache):

```yaml
name: Cypress Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24' # ajuste conforme seu alvo

      - name: Cache node modules
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        uses: cypress-io/github-action@v4
        with:
          start: npm start # se precisar subir a app
          wait-on: 'http://localhost:3000'
          wait-on-timeout: 60
```

> Nota: adapte `node-version`, cache e `start` ao seu projeto. A action oficial do Cypress traz otimizações para caching do binário e paralelização. ([GitHub][7])

---

### 📚 Links úteis (docs oficiais)

* Instalação e início — Cypress: [https://docs.cypress.io/app/get-started/install-cypress](https://docs.cypress.io/app/get-started/install-cypress). ([docs.cypress.io][2])
* Troubleshooting — Cypress: [https://docs.cypress.io/app/references/troubleshooting](https://docs.cypress.io/app/references/troubleshooting). ([docs.cypress.io][4])
* Migration / compatibilidade Node — Cypress: [https://docs.cypress.io/app/references/migration-guide](https://docs.cypress.io/app/references/migration-guide). ([docs.cypress.io][1])
* GitHub Actions (Cypress): [https://docs.cypress.io/app/continuous-integration/github-actions](https://docs.cypress.io/app/continuous-integration/github-actions). ([docs.cypress.io][6])
* Node.js releases (útil para checar LTS atual): [https://nodejs.org/](https://nodejs.org/). ([Node.js][8])

---

### ✅ Dicas finais rápidas

* Mantenha as versões do Node e Cypress alinhadas entre desenvolvimento e CI.
* Adicione scripts no `package.json` (ex.: `"cy:open": "cypress open"`, `"test:e2e": "cypress run"`).
* Versione o `cypress.config.*` por projeto (cada subpasta tem seu config).
* Documente no README de cada subprojeto qualquer requisito extra (porta, variáveis de ambiente, seed data).
