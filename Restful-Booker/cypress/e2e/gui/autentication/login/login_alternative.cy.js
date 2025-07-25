describe("Login - Visualização de senha", () => {
  beforeEach(() => {
    cy.visit("https://bookcart.azurewebsites.net/login");
  });

  it("deve alternar entre ocultar e mostrar a senha ao clicar no ícone de olho", () => {
    cy.toggleIcon();
  });
});

context("Verificação das Requisições após Login", () => {
  beforeEach(() => {
    cy.visit("https://bookcart.azurewebsites.net/login");
    cy.intercept("GET", "/api/Wishlist/11117").as("getWishlist");
    cy.intercept("POST", "/api/login").as("postLogin");
    cy.intercept("GET", "/api/shoppingcart/11117").as("getCart");
    cy.intercept("GET", "/api/book/").as("getBooks");
    cy.intercept("GET", "/api/book/GetCategoriesList").as("getCategories");
  });

  it("deve verificar todas as requisições da API após o login", () => {
    cy.get("#mat-input-0").should("be.visible").type("ML");
    cy.get("#mat-input-1").should("be.visible").type("SenhaForte1");
    cy.get(".mat-mdc-card-actions > .mdc-button > .mdc-button__label").click();

    cy.wait("@postLogin").its("response.statusCode").should("eq", 200);
    cy.wait("@getWishlist").its("response.statusCode").should("eq", 200);
    cy.wait("@getCart").its("response.statusCode").should("eq", 200);
    cy.wait("@getBooks").its("response.statusCode").should("eq", 200);
    cy.wait("@getCategories").its("response.statusCode").should("eq", 200);
  });
});
