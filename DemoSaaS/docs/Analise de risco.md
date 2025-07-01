## ⚠️ **Análise de Riscos – Automação de Testes DemoSaaS**

| Risco                                                           | Impacto | Probabilidade | Severidade | Mitigação                                                                  |
| --------------------------------------------------------------- | ------- | ------------- | ---------- | -------------------------------------------------------------------------- |
| Mudanças na estrutura da DOM (elementos HTML)                   | Alta    | Média         | Alta       | Utilizar seletores robustos (ex: `data-testid`), aplicar Page Objects      |
| Dados da demo resetados a cada login                            | Média   | Alta          | Média      | Testes devem ser independentes e idempotentes, com mocks quando possível   |
| Falta de persistência de dados (ambiente instável)              | Alta    | Alta          | Alta       | Criar dados via interface sempre que possível no início de cada teste      |
| Intermitência do ambiente demo (fora do ar ou lentidão)         | Alta    | Média         | Alta       | Usar retries do Cypress, monitorar falhas em CI e permitir reexecução      |
| Testes instáveis ou flakey (falham de forma aleatória)          | Alta    | Média         | Alta       | Usar `cy.wait()` inteligentes, `cy.intercept()`, e aplicar boas práticas   |
| Execuções longas em CI/CD                                       | Média   | Média         | Média      | Priorizar testes críticos em pipelines e separar testes por prioridade     |
| Falta de versionamento dos dados e cenários                     | Média   | Baixa         | Média      | Controlar dados de teste com fixtures e manter versionamento no Git        |
| Manutenção alta de scripts em caso de mudanças frequentes na UI | Média   | Alta          | Alta       | Aplicar Page Object Model e boas práticas de abstração                     |
| Inexperiência da equipe com ferramentas de automação            | Média   | Baixa         | Média      | Compartilhar conhecimento, manter documentação atualizada e scripts claros |
| Dependência da conta única "Admin" no ambiente demo             | Média   | Alta          | Média      | Documentar o risco, validar com login antes de testes sensíveis            |

---

### 🛡️ Estratégias Gerais de Mitigação

* **Page Objects**: Reduzem impacto de mudanças na interface.
* **Retries e timeout customizados**: Ajudam a evitar falsos negativos em execuções CI.
* **Evidência automática (print/vídeo)**: Facilita diagnóstico de falhas intermitentes.
* **Separação por prioridade**: Reduz tempo de execução e mantém o foco no que é mais crítico.
* **Uso do Cypress Cloud**: Auxilia no histórico e rastreamento de falhas com maior visibilidade.