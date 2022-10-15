import menu from './components/menu';


class inventoryPage {
    constructor() {

    }

    checkTitle(){
        cy.xpath('/html/body/div[2]/h1').contains('Inventory');
    }

    useItem(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[2]').click();
    }

    use5Item(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[3]').click();
    }

    use10Item(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[4]').click();
    }
    
    use50Item(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[5]').click();
    }

    sellItem(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[6]').click();
    }

    sell5Item(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[7]').click();
    }

    sell10Item(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[8]').click();
    }

    sell50Item(slot){
        cy.xpath('/html/body/div[' + slot + ']/div/div[1]/div/a[9]').click();
    }

}

module.exports = new inventoryPage();
require('cypress-xpath');