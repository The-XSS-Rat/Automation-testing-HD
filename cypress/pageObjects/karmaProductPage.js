import menu from './components/menu';


class karmaProductPage {
    constructor() {

    }

    clickBuyNow(position){
        cy.xpath('/html/body/div[2]/div/div/button').scrollIntoView().click();
    }


}

module.exports = new karmaProductPage();
require('cypress-xpath');