describe(" API - Listagem de Livros  ", () => {
  it("deve retornar uma lista de livros", () => {
    cy.request({
      method: "GET",
      url: "https://bookcart.azurewebsites.net/api/Book",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.greaterThan(0);
    });
    cy.log("Verifique a lista de livros retornada");
  });
});
