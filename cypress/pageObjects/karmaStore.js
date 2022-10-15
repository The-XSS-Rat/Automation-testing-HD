import menu from './components/menu';


class karmaStore {
    constructor() {

    }

    selectProductOnPosition(position){
        cy.xpath('/html/body/main/div/div[' + position + ']/form/button').scrollIntoView().click();
    }

}

module.exports = new karmaStore();
require('cypress-xpath');