describe("Login", () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it.only("CT001 - Validar login com sucesso", () => {
        cy.geradorUsuarioAdmin()
        cy.fixture("usuarioAdmin").then(( usuarioValido ) => {
            cy.log(usuarioValido.userName)
            cy.login(usuarioValido)
        })
        
    });

    it("CT002 - Tentar validar login com campos vazios", () => cy.loginCamposVazios());
});