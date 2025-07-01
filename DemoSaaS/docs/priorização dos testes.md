## 🎯 **Prioridade dos Testes Automatizados - DemoSaaS**

| Código RF | Módulo                          | Descrição                                                        | Prioridade | Justificativa                                                               |
| --------- | ------------------------------- | ---------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| **RF01**  | Autenticação de Usuário         | Login no sistema, requisito para acessar qualquer funcionalidade | **Alta**   | Sem login, o sistema é inacessível. Crítico para **Smoke Test** e regressão |
| **RF02**  | Cadastro de Usuário             | Criação de novas contas no sistema                               | **Alta**   | Essencial para onboarding e fluxo de novos usuários                         |
| **RF03**  | Criação de Organização          | Permite configurar estrutura organizacional inicial              | **Alta**   | Fundamental para empresas começarem a usar o sistema                        |
| **RF04**  | Gerenciamento de Conta          | Editar dados da conta, configurações, senha, plano               | **Média**  | Importante, mas não impede o uso geral do sistema                           |
| **RF05**  | Navegação                       | Estrutura de menus e roteamento                                  | **Média**  | Interface e UX afetam usabilidade, mas não são bloqueadores                 |
| **RF06**  | Dashboard de Projetos e Tickets | Visão geral de tarefas e andamento                               | **Média**  | Importante, mas o sistema ainda funciona sem ele                            |
| **RF07**  | Compartilhamento e Colaboração  | Convidar usuários, compartilhar projetos                         | **Baixa**  | Valor agregado, mas não essencial para funcionamento inicial                |
| **RF08**  | Recuperação de Senha            | Fluxo para redefinir senhas                                      | **Baixa**  | Crítico apenas em casos específicos, fluxo secundário                       |

---

### 🔑 **Resumo das Prioridades**

* **Alta**: RF01, RF02, RF03 → *Executar sempre (Smoke e Regressão)*
* **Média**: RF04, RF05, RF06 → *Executar nas regressões completas ou ciclos de release*
* **Baixa**: RF07, RF08 → *Executar por agendamento ou conforme necessidade*

