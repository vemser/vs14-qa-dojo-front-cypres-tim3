describe("esqueceuSenha"), () =>{
    beforeEach(() => {
        cy.visit('/')
    })

    it("CT001 - Validar esqueceu senha com sucesso", () =>{
        cy.esqueceuSenhaComSucesso();
    })
}