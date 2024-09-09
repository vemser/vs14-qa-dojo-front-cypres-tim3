


export default class LoginPage{

    username = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input'
    password = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input'
    btnLogin = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button'
   
   
    preencherUsername(username){

        cy.get(this.username).type(username)

    }


    preencherPassword(password){
        cy.get(this.password).type(password)
    }


    btnLoginclick(){
        cy.get(this.btnLogin).click()
    }


}