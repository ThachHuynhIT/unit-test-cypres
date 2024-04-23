import React from "react";
import { Login } from "./Login";

describe("<Login />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Login />);
  });

  it("renders with user name", () => {
    cy.mount(<Login />);
    cy.get("label").contains("User name");
  });

  it("renders with password", () => {
    cy.mount(<Login />);
    cy.get("label").contains("Password");
  });

  it("renders with login button", () => {
    cy.mount(<Login />);
    cy.get("button").contains("Login");
  });

  it("renders with login message after login", () => {
    cy.mount(<Login />);
    cy.get("input").eq(0).type("Antonette");
    cy.get("input").eq(1).type("12345678");
    cy.get("button").click();
    cy.get("span").contains("Login successful");
  });

  it("renders with login message after failed login", () => {
    cy.mount(<Login />);
    cy.get("input").eq(0).type("Antonette");
    cy.get("input").eq(1).type("wrong");
    cy.get("button").click();
    cy.get("span").contains("Login failed");
  });

  it("renders with login message after failed login", () => {
    cy.mount(<Login />);
    cy.get("input").eq(0).type("wrong");
    cy.get("input").eq(1).type("12345678");
    cy.get("button").click();
    cy.get("span").contains("Login failed");
  });

  it("renders with login message after failed login", () => {
    cy.mount(<Login />);
    cy.get("input").eq(0).type("wrong");
    cy.get("input").eq(1).type("wrong");
    cy.get("button").click();
    cy.get("span").contains("Login failed");
  });
});
