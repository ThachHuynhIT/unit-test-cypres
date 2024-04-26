import React from "react";
import { InputText } from "./InputText";

describe("<InputText />", () => {
  it("renders correct value and label when mount", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    const value = "value";
    const label = "Label";

    cy.mount(<InputText value={value} label={label} onChange={onChangeSpy} />);

    cy.get("label").contains(label);
    cy.get("input").should("have.value", value);
  });

  it("calls onChange when change value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    const value = "value";
    const label = "Label";

    cy.mount(<InputText value={value} label={label} onChange={onChangeSpy} />);

    cy.get("input").type("new value");
    cy.get("@onChangeSpy").should("have.been.called");
  });

  it("test debug", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    const value = "value";
    const label = "Label";

    cy.mount(<InputText value={value} label={label} onChange={onChangeSpy} />);
    cy.get("input").debug();
  });
});
