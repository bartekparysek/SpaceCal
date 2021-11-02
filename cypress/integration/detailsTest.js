import dotenv from "dotenv";
dotenv.config();

describe("Check details", () => {
  it("checks details from main site", () => {
    cy.visit("/");

    cy.findAllByRole("button", { name: /Flip/i }).first().click();

    cy.contains(/check details/i).should("be.visible");

    cy.contains(/check details/i).click();

    cy.findByRole("button", { name: /flight list/i });
  });
});
