describe("Testando a api pelo swagger", () => {
  it("verificando se o swagger esta visivek", () => {
    cy.visit("https://bookcart.azurewebsites.net/swagger/index.html");
    cy.url().should("include", "swagger/index.html");
  });

  it("requisiçaõ de login com sucesso", () => {
    cy.request({
      method: "POST",
      url: "https://bookcart.azurewebsites.net/api/Login",
      body: {
        username: Cypress.env('username'),
        password: Cypress.env('password'),
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("token");
      expect(res.body.token).to.be.a("string");
      cy.log("Login realizado com sucesso, token recebido: " + res.body.token);
    });
  });
});
