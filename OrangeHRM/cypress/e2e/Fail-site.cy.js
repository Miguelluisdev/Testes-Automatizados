it("fail site", () => {
 cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("body").then(($body) => {
    if ($body.find('input[name="username"]').length === 0) {
      cy.log(
        "⚠️ O site parece estar fora do ar ou não renderizou a interface corretamente."
      );
      Cypress.runner.stop(); 
    } else {
      cy.log("✅ Interface carregada com sucesso.");
    }
  });
});
