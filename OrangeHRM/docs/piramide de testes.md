## 🔺 **Documentação: Pirâmide de Testes – OrangeHRM**

### 📌 1. **O que é a Pirâmide de Testes?**

A Pirâmide de Testes é um modelo conceitual que propõe uma estratégia equilibrada de testes, priorizando testes **rápidos, confiáveis e de baixo custo de manutenção na base**, e deixando os testes **mais lentos e complexos no topo**.
Essa abordagem favorece qualidade com eficiência e estabilidade nos ciclos de entrega contínua.

---

### 🧱 2. **Estrutura da Pirâmide Aplicada ao Projeto**

```
            🔺 Testes End-to-End (E2E)
           🔸 Testes de Integração
        🟩 Testes de API (em breve)
      🟢 Testes de Unidade (em breve)
```

---

### 📊 3. **Detalhamento por Camada**

| Camada      | Tipo de Teste        | Status no Projeto | Ferramentas              | Descrição e Finalidade                                                                  |
| ----------- | -------------------- | ----------------- | ------------------------ | --------------------------------------------------------------------------------------- |
| 🟢 **Base** | Testes de Unidade    | 🔜 Planejado      | Jest / Mocha (futuro)    | Validar funções isoladas (ex: cálculo de férias, validação de CPF, lógica de regras)    |
| 🟩 **API**  | Testes de API        | 🔜 Planejado      | Postman / Cypress        | Garantir que os endpoints funcionam corretamente sem interface                          |
| 🔸 **Meio** | Testes de Integração | 🔜 Planejado      | Cypress / Supertest      | Testar a comunicação entre módulos (ex: cadastro e listagem de funcionários)            |
| 🔺 **Topo** | Testes E2E (UI)      | ✅ Implementado    | Cypress + GitHub Actions | Validar os fluxos principais como o usuário final, via navegador (login, PIM, leave...) |

---

### 🎯 4. **Objetivo da Estratégia**

* Reduzir a quantidade de testes E2E desnecessários e frágeis
* Investir em testes mais rápidos e confiáveis (unidade e API)
* Garantir cobertura nos fluxos críticos sem comprometer velocidade
* Suportar CI/CD com confiabilidade e performance

---

### ⚠️ 5. **Desafios e Considerações**

| Ponto                        | Situação Atual                  | Estratégia                                   |
| ---------------------------- | ------------------------------- | -------------------------------------------- |
| Ambiente com dados instáveis | Aumenta risco em testes E2E     | Tornar testes independentes e resistentes    |
| Testes E2E são mais frágeis  | UI muda frequentemente          | Adotar Page Objects e comandos reutilizáveis |
| Ausência de testes unitários | Ainda não implementado          | Planejado para próximo ciclo                 |
| APIs não documentadas        | Não visíveis no demo atualmente | Explorar futuramente via DevTools            |

---

### 📈 6. **Meta de Evolução da Pirâmide**

* [ ] Consolidar testes E2E dos fluxos mais críticos
* [ ] Introduzir testes de API com Postman ou via `cy.request()`
* [ ] Iniciar testes unitários com funções de negócios reutilizadas
* [ ] Balancear a pirâmide com maior foco na base e meio

---

### 🧪 7. **Resumo da Estratégia no Projeto**

* **Prioridade atual**: E2E com Cypress
* **Visão de futuro**: API e unidade para agilidade e cobertura mais robusta
* **Princípio base**: Testar o máximo possível fora da UI para aumentar confiabilidade e velocidade
