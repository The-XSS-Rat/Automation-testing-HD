import menu from '../pageObjects/components/menu';


class selectRandomQuest {
    constructor() {

    }

    clickSelectQuest(){
        cy.xpath('/html/body/div[2]/form/button').scrollIntoView().click();
    }

    selectFirstQuest(){
        cy.xpath('/html/body/main/div/div[1]/a').scrollIntoView().click();
    }

}

module.exports = new selectRandomQuest();
require('cypress-xpath');