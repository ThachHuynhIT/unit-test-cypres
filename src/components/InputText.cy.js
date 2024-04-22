import React from "react";
import { InputText } from "./InputText";

describe("<InputText />", () => {
    it("renders", () => {
        const onChangeSpy = cy.spy().as("onChangeSpy");
        const value = "value";
        const label = "Label";

        // see: https://on.cypress.io/mounting-react
        cy.mount(
            <InputText value={value} label={label} onChange={onChangeSpy} />
        );
    });
});
