## 🎯 **Prioridade dos Testes Automatizados - OrangeHRM**

| Código RF | Módulo                   | Descrição                                                     | Prioridade | Justificativa                                                  |
| --------- | ------------------------ | ------------------------------------------------------------- | ---------- | -------------------------------------------------------------- |
| **RF01**  | Login                    | Acesso ao sistema, pré-requisito para todos os outros módulos | **Alta**   | Sem login, nada funciona. É um teste crítico de **Smoke Test** |
| **RF03**  | PIM - Funcionários       | Cadastro, edição e busca de funcionários                      | **Alta**   | Parte central do sistema, muito usada e sensível a falhas      |
| **RF04**  | Férias (Leave)           | Solicitação e controle de férias                              | **Alta**   | Fluxo sensível ao negócio e presente na rotina dos usuários    |
| **RF06**  | Administração (Admin)    | Permissões, cargos, configurações globais                     | **Alta**   | Impacta toda a estrutura de permissões e segurança             |
| **RF02**  | Dashboard                | Visualização geral de informações                             | **Média**  | Importante, mas não impede o uso do sistema se houver erro     |
| **RF05**  | Recrutamento             | Gerenciamento de vagas e candidatos                           | **Média**  | Relevante, mas afeta usuários específicos e é menos frequente  |
| **RF07**  | Controle de Ponto (Time) | Registro de entrada/saída, jornada                            | **Média**  | Importante, mas falhas parciais não paralisam o sistema        |
| **RF08**  | Relatórios               | Visualização de dados consolidados                            | **Baixa**  | Erros não impedem operações principais                         |
| **RF09**  | Diretório                | Listagem de contatos internos                                 | **Baixa**  | Fluxo secundário, usado ocasionalmente                         |
| **RF10**  | Manutenção               | Controle de aviso de manutenção                               | **Baixa**  | Impacto muito baixo no uso diário                              |

---

### 🔑 Resumo das Prioridades

* **Alta**: RF01, RF03, RF04, RF06 → *Testes obrigatórios em toda execução de CI*
* **Média**: RF02, RF05, RF07 → *Executar em regressões completas ou pós-release*
* **Baixa**: RF08, RF09, RF10 → *Executar ocasionalmente ou em ciclos planejados*
