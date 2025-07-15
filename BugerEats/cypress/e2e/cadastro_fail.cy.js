import { nome, cpf, email, adress_number } from "../support/selectors/cadastro";
import { mensagensValidacao , mensagensObrigatorias} from "../support/selectors/required-messages";

describe("Cenario 02: Tentativa de cadastro com falha", () => {
  beforeEach(() => {
    cy.entrarNoSite();
  });
  it("Deve aceitar nome com acento e hífen (alternativo)", () => {
    cy.get(nome).type("José da Silva-Pereira").should("have.value", "José da Silva-Pereira");
    cy.get(".button-success").click();
  });

  it("Deve mostrar erro ao digitar CPF inválido (com letras)", () => {
    cy.get(cpf).type("abc12345678");
    cy.get(".button-success").click();
    cy.contains(mensagensValidacao.cpfInvalido).should("be.visible");
  });

  it("Deve mostrar erro ao digitar email inválido", () => {
    cy.get(email).type("usuario@email");
    cy.get(".button-success").click();
    cy.contains(mensagensValidacao.emailInvalido).should("be.visible");
  });


  it("Deve mostrar erro ao deixar número do endereço vazio", () => {
    cy.get(".button-success").click();
    cy.contains(mensagensObrigatorias.numeroEndereco).should("be.visible");
  });
});
