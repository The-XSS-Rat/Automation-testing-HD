import menu from './components/menu';


class equipPage {
    constructor() {

    }

    checkTitle(){
        cy.xpath('/html/body/div[2]/h1[1]').contains('Stats');
    }

    equipWeapons(id){
        cy.xpath('/html/body/div[2]/a[' + id + ']').click();
    }

    equipOrnament(id){
        cy.xpath('/html/body/a[' + id + ']').click();
    }

    equipShield(id){
        cy.xpath('/html/body/a[' + id + ']').click();
    }
}

module.exports = new equipPage();
require('cypress-xpath');