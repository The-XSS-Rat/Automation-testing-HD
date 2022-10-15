import menu from '../pageObjects/components/menu';


class selectRandomQuest {
    constructor() {

    }

    clickSelectQuest(){
        cy.xpath('/html/body/div[2]/form/button').scrollIntoView().click();
    }

    selectQuestOnPosition(position){
        cy.xpath('/html/body/main/div/div[' + position + ']/a').scrollIntoView().click();
    }

}

module.exports = new selectRandomQuest();
require('cypress-xpath');