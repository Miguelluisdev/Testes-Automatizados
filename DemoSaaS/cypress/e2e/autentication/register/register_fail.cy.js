describe("Cadastro - Caminhos Negativos", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io/");
    cy.contains("Go to example sign up").click();
    cy.url().should("include", "/sign-up");
  });

  const requiredFieldMessage = "String must contain at least 1 character(s)";

  it("Deve exibir erro ao tentar cadastrar com nome vazio", () => {
    cy.fillAndSubmitSignUp({
      lastName: "Luis",
      email: "miguelluisatf@gmail.com",
      password: "XyzioSCtuq",
    });

    cy.contains(requiredFieldMessage).should("be.visible");
  });

  it("Deve exibir erro ao tentar cadastrar com sobrenome vazio", () => {
    cy.fillAndSubmitSignUp({
      firstName: "Miguel",
      email: "miguelluisatf@gmail.com",
      password: "XyzioSCtuq",
    });

    cy.contains(requiredFieldMessage).should("be.visible");
  });

  it("Deve exibir erro ao tentar cadastrar com email inválido", () => {
    cy.fillAndSubmitSignUp({
      firstName: "Miguel",
      lastName: "Luis",
      email: "email-invalido",
      password: "XyzioSCtuq",
    });

    cy.contains("Invalid email").should("be.visible");
  });

  it("Deve exibir erro ao tentar cadastrar com senha curta", () => {
    cy.fillAndSubmitSignUp({
      firstName: "Miguel",
      lastName: "Luis",
      email: "miguelluisatf@gmail.com",
      password: "123",
    });

    cy.contains("String must contain at least 8 character(s)").should(
      "be.visible"
    );
  });

  it("Deve exibir erros em todos os campos ao tentar cadastrar com todos os campos vazios", () => {
    cy.get('.mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d').click();


    cy.contains(requiredFieldMessage).should("be.visible");
  });
});
