describe("template spec", () => {
  it("fazer login com o usuario", () => {
    cy.request({
      method: "POST",
      url: "/login",
      body: {
        email: "fulano@qa.com",
        password: "teste",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("authorization");
      expect(res.body.authorization).to.include("Bearer");
      Cypress.env("token", res.body.authorization);
    });
  });

  it("listar produtos cadastrados", () => {
    cy.request({
      method: "GET",
      url: "/produtos",
      headers: {
        Authorization: Cypress.env("token"),
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.produtos).to.be.an("array");
      expect(res.body.produtos.length).to.be.greaterThan(0);
    });
  });

  it("deletar um produto", () => {
    cy.request({
      method: "POST",
      url: "/login",
      body: {
        email: "fulano@qa.com",
        password: "teste",
      },
    }).then((res) => {
      const token = res.body.authorization;

      cy.request({
        method: "DELETE",
        url: `/produtos/0JQpWplDUTzilXDW`,
        headers: {
          Authorization: token,
        },
        failOnStatusCode: false,
      }).then((resDelete) => {
        expect([200, 204, 202, 201]).to.include(resDelete.status);
        cy.log("Produto deletado com sucesso ou não existia mais.");
      });
    });
  });
});

// 0JQpWplDUTzilXDW
