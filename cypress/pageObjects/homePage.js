import menu from './components/menu';

class homePage {
    constructor() {

    }

    openMenuItem(value){
        menu.clickMenuItemByText(value);
    }

    consentCookies(){
        cy.xpath('/html/body/div/div/div/div/div[3]/div/button/span').click();
    }

}

module.exports = new homePage();
