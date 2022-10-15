import menu from './components/menu';


class dialogs {
    constructor() {

    }

    confirmBuy(){
        cy.xpath(' /html/body/div[3]/div/div[4]/div[2]/button').scrollIntoView().click();
    }

    checkErrorDialog(text){
        cy.xpath('/html/body/div[3]/div/div[3]').contains(text);
    }

    checkSuccessDialog(title,text){
        cy.xpath('/html/body/div[3]/div/div[1]/div[1]').should('be.visible');
        cy.xpath('/html/body/div[3]/div/div[2]').contains(title);
        cy.xpath('//html/body/div[3]/div/div[3]').contains(text);
    }

    checkErrorDiv(text){
        cy.get('#error').contains(text);
    }

}

module.exports = new dialogs();
require('cypress-xpath');