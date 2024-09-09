const btnFgtPassword = ".orangehrm-login-forgot > .oxd-text";
const btnFgtPasswordConfirm = ".oxd-button--secondary";
const campoUserName = ".oxd-input";
const msgSucesso = "h6";
const msgRequired = ".oxd-input-group span";

Cypress.Commands.add("login", () => {
    cy.clicar(btnFgtPassword)
    cy.preencherCampo(campoUserName, "Admin")
    cy.clicar(btnFgtPasswordConfirm)
});

