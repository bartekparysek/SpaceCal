import dotenv from "dotenv";
dotenv.config();
describe("Google Auth process", () => {
  it("login process to google at main site", () => {
    cy.visit("/");

    cy.findByRole("button", { name: /Google login/i }).should("be.visible");

    cy.loginByGoogleApi();

    cy.contains("Sign out").should("be.visible");
  });
});

describe("Flip button ", () => {
  it("flips and shows backside", () => {
    cy.visit("/");

    cy.findAllByRole("button", { name: /Flip/i }).first().click();

    cy.contains(/check details/i).should("be.visible");

    cy.contains(/add to calendar/i).should("be.visible");
  });
});
