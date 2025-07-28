describe("API - listagem de usuario", () => {
  it("deve retornar os dados do usuári", () => {
    cy.request({
      method: "GET",
      url: "https://bookcart.azurewebsites.net/api/User",
      body: {
        userId: Cypress.env('userId'),
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(
        "Detalhes do usuário recebidos com sucesso: " + JSON.stringify(res.body)
      );
    });
  });

  it("autenticação via token", () => {
    cy.request({
      method: "POST",
      url: "https://bookcart.azurewebsites.net/api/Login",
      body: {
        username: Cypress.env('username'),
        password: Cypress.env('password'),
      },
    }).then((loginRes) => {
      const token = loginRes.body.token;

      cy.request({
        method: "GET",
        url: "https://bookcart.azurewebsites.net/api/User",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        cy.log(JSON.stringify(res.body));
      });
    });
  });
});
