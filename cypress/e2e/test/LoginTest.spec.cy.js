describe("Login", () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it("CT001 - Validar login com sucesso", () => cy.login());

    it.only("CT002 - Tentar validar login com campos vazios", () => cy.loginCamposVazios());
});