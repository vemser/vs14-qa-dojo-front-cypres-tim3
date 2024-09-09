Cypress.Commands.add("geradorUsuarioAdmin", ()=>{
    
    cy.WriteFile("cypress/fixtures/usuarioAdmin.json",{   
        usuarioValido: {
            userName: "Admin",
            password: "admin123"
        }
    })
})