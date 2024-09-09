Cypress.Commands.add("preencherCampo", (elemento, dado) => {
    cy.get(elemento).type(dado);
});

Cypress.Commands.add("clicar", (elemento) => {
    cy.get(elemento).click();
});

Cypress.Commands.add("validarTexto", (seletor, texto) => {
    cy.get(elemento).contains(texto);
});