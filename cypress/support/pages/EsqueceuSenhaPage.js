const btnFgtPassword = ".orangehrm-login-forgot > .oxd-text";
const btnFgtPasswordConfirm = ".oxd-button--secondary";
const campoUserName = ".oxd-input";
const msgSucesso = "h6";
const msgRequired = ".oxd-input-group span";
const msgRequiredForgotUsername = "span[class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']";


Cypress.Commands.add("esqueceuSenhaComSucesso", () => {
    cy.clicar(btnFgtPassword)
    cy.preencherCampo(campoUserName, "Admin")
    cy.clicar(btnFgtPasswordConfirm)
    cy.validarTexto(msgSucesso, "Reset Password link sent successfully");
});

Cypress.Commands.add("esqueceuSenhaCampoVazio", () => {
    cy.clicar(btnFgtPassword)
    cy.clicar(btnFgtPasswordConfirm)
    cy.validarTexto(
		msgRequiredForgotUsername,
		"Required"
	);
});

