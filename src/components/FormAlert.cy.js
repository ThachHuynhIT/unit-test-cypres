import React from "react";
import { FormAlert } from "./FormAlert";

describe("<FormAlert />", () => {
  it("renders message success should have green color", () => {
    const message = "Login successful";
    const type = "success";
    cy.mount(<FormAlert message={message} type={type} />);

    cy.get("span").contains(message);

    cy.get("span").should("have.css", "color", "rgb(0, 128, 0)");
  });

  it("renders message false should have red color", () => {
    const message = "Login failed";
    const type = "error";

    cy.mount(<FormAlert message={message} type={type} />);

    cy.get("span").contains(message);

    cy.get("span").should("have.css", "color", "rgb(255, 0, 0)");
  });

  it("renders message warning should have yellow color", () => {
    const message = "Login warning";
    const type = "warning";

    cy.mount(<FormAlert message={message} type={type} />);

    cy.get("span").contains(message);

    cy.get("span").should("have.css", "color", "rgb(255, 165, 0)");
  });

  it("test find color success", () => {
    cy.mount(<FormAlert message="Login successful" type="success" />);

    cy.findColor("rgb(0, 128, 0)", "span");
  });
});
