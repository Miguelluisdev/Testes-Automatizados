import { cpf, email } from "./cadastro";

export const mensagensObrigatorias = {
  nome: "É necessário informar o nome",
  cpf: "É necessário informar o CPF",
  email: "É necessário informar o email",
  cep: "É necessário informar o CEP",
  numeroEndereco: "É necessário informar o número do endereço",
  entrega: "Selecione o método de entrega",
  foto: "Adicione uma foto da sua CNH",
};

export const mensagensValidacao = {
  cpfInvalido: "Oops! CPF inválido",
  emailInvalido: "Oops! Email com formato inválido.",
};
