import { faker } from "@faker-js/faker";
const username = faker.internet.userName();

export const campos = [
  { selector: "#mat-input-0", valor: "Miguel" },
  { selector: "#mat-input-1", valor: "Luis" },
  { selector: "#mat-input-2", valor: username  },
  { selector: "#mat-input-3", valor: "SenhaForte1" },
  { selector: "#mat-input-4", valor: "SenhaForte1" },
];
