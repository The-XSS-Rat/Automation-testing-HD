import homePage from '../pageObjects/homePage';


class loginPage {
    constructor() {

    }

    elemUserNameField(){
        return cy.xpath('/html/body/main/div/form/div[1]/input');
    }

    elemPassField(){
        return cy.xpath('/html/body/main/div/form/div[2]/input');
    }
    elemLoginButton(){
        return cy.xpath('/html/body/main/div/form/button');
    }
    elemError(){
        return cy.xpath('//div[1]/div[1]/div/div[3]/div/div[2]/div/div/h1');
    }

    getUserNameField(){
        return elemUserNameField().get();
    }

    setUserNameField(value){
        elemUserNameField().type(value);
    }

    getErrorTextField(){
        cy.get('#loginError').contains('Your username or password is not correct');
    }

    login(){
        cy.xpath('/html/body/main/div/form/button').click();
        return homePage;
    }


    
}

module.exports = new loginPage();
require('cypress-xpath');