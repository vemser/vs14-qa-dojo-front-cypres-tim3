let campoUsername = 'input[name="username"]'
let campoPassword = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input'
let btnLogin = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button'
let userNameObrigatorio = "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > span";
let passwordObrigatorio = "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > span";

Cypress.Commands.add("login", (usuario) => {
    cy.preencherCampo(campoUsername, usuario.userName);
    cy.preencherCampo(campoPassword, usuario.password);
    cy.clicar(btnLogin);
});

Cypress.Commands.add("loginCamposVazios", () => {
    cy.clicar(btnLogin);
    cy.validarTexto(userNameObrigatorio, "Required")
    cy.validarTexto(passwordObrigatorio, "Required")
    
});

