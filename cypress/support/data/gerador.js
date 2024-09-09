Cypress.Commands.add("geradorUsuarioAdmin", ()=>{
    
    cy.writeFile("cypress/fixtures/usuarioAdmin.json",{   
        usuarioValido: {
            userName: "Admin",
            password: "admin123"
        }
    })
})