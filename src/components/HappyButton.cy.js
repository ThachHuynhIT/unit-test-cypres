import React from "react";
import { HappyButton } from "./HappyButton";

describe("<HappyButton />", () => {
  it("renders", () => {
    const onClickSpy = cy.spy().as("onClick");
    const text = "Click me";
    cy.mount(<HappyButton onClick={onClickSpy} text={text} />);

    cy.get("button").contains(text);
  });

  it("calls onClick", () => {
    const onClickSpy = cy.spy().as("onClick");
    const text = "Click me";
    cy.mount(<HappyButton onClick={onClickSpy} text={text} />);

    cy.get("button").click();
    cy.get("@onClick").should("have.been.called");
  });
});
