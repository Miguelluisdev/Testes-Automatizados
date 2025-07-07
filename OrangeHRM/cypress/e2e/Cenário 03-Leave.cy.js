describe("Cenário Alternativo: Nenhum tipo de licença disponível", () => {
  beforeEach(() => {
    cy.login();
    cy.contains("Leave").should("be.visible").click();
    cy.contains("Apply").should("be.visible").click();
    cy.url().should("include", "/leave/applyLeave");
  });

  it("Deve exibir mensagem informando que não há tipos de licença com saldo disponível", () => {
    cy.contains("No Leave Types with Leave Balance")
      .should("be.visible")
      .and("have.text", "No Leave Types with Leave Balance");

    cy.get(".oxd-form").should("not.exist");
  });
});

// describe("Cenário 03: Solicitação e gerenciamento de férias.", () => {
//   beforeEach(() => {
//     cy.login();
//   });

//   it.only("Caso de Teste 01: Solicitação de férias com datas válidas", () => {
//     cy.contains("Leave").should("be.visible").click();

//     cy.url().should(
//       "include",
//       "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList"
//     );

//     cy.contains("Apply").should("be.visible").click();

//     cy.url().should(
//       "include",
//       "https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave"
//     );

//     cy.get(".oxd-select-text-input").click();

//     cy.get(".oxd-select-dropdown").should("be.visible");

//     cy.contains(".oxd-select-dropdown > *", "CAN - Bereavement").click();

//     cy.get(
//       ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
//     )
//       .first()
//       .type("2025-07-15");
//     cy.get('input[placeholder="yyyy-dd-mm"]')
//       .last()
//       .invoke("val", "2025-18-07")
//       .trigger("input");

//     cy.get(".oxd-textarea").type("testando digitando");

//     cy.get('.oxd-button').should('be.visible').click()

//     cy.get('.oxd-toast-container').should('be.visible')

//     cy.contains('My Leave').click('')

//     cy.get(':nth-child(1) > .oxd-table-row > :nth-child(4) > div').should('be.visible')
//   });

//   it("Caso de Teste 02: Tentativa de solicitar férias sem selecionar tipo de licença.", () => {
//       cy.contains("Leave").should("be.visible").click();

//     cy.url().should(
//       "include",
//       "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList"
//     );

//     cy.contains("Apply").should("be.visible").click();

//     cy.url().should(
//       "include",
//       "https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave"
//     );
//   });

//   it("Caso de Teste 03: Visualizar status das solicitações de férias.", () => {});
// });
