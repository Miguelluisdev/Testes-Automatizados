describe("Cadastro - Caminho Alternativo", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io/");
    cy.contains("Go to example sign up").click();
    cy.url().should("include", "/sign-up");
  });

  const dataUser = {
    firstname: "Miguel",
    lastname: "Luis",
    email: "miguelluisatf@gmail.com",
    password: "XyzioSCtuq",
  };

  it("Cadastro com usuário já existente ou bloqueio por muitas requisições", () => {
    cy.get('input[name="firstName"]').type(dataUser.firstname);
    cy.get('input[name="lastName"]').type(dataUser.lastname);
    cy.get('input[name="email"]').type(dataUser.email);
    cy.get('input[name="password"]').type(dataUser.password);
    cy.get('.mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d').click();

    cy.get("body").then(($body) => {
      if ($body.text().includes("Too many requests. Please try again later.")) {
        cy.contains("Too many requests. Please try again later.").should("be.visible");
      } else {
        cy.contains("User already exists").should("be.visible");
      }
    });
  });
});
