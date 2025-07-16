Feature: Cadastro de entregador

  Background:
    Given que o usuário acessa o site de cadastro

  Scenario: Realizar cadastro com dados válidos
    When o usuário preenche todos os campos obrigatórios com dados válidos
    And seleciona o método de entrega como "Moto"
    And faz o upload da CNH
    And envia o formulário
    Then o cadastro deve ser enviado com sucesso

  Scenario: Validar mensagens de campos obrigatórios
    When o usuário tenta enviar o formulário sem preencher os campos
    Then todas as mensagens obrigatórias devem ser exibidas
