// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginWrong", (userName, password) => {
    cy.get("input").eq(0).type(userName);
    cy.get("input").eq(1).type(password);
    cy.get("button").click();
    cy.get("span").contains("Login failed");
});

Cypress.Commands.add("loginRight", (userName, password) => {
    cy.get("input").eq(0).type(userName);
    cy.get("input").eq(1).type(password);
    cy.get("button").click();
    cy.get("span").contains("Login successful");
});

Cypress.Commands.add("findText", (text, htmlTag) => {
    cy.get(htmlTag).contains(text);
});

Cypress.Commands.add("findColor", (color, htmlTag) => {
    cy.get(htmlTag).should("have.css", "color", color);
});
