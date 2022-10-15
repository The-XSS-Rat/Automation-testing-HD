import loginPage from '../../pageObjects/loginPage.js';
import inventoryPage from '../../pageObjects/inventoryPage';
import menu from '../../pageObjects/components/menu.js';
import dialogs from '../../pageObjects/dialogs';

describe('Inventory test cases', () => {

    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.once('failOnStatusCode', () => false);
        cy.visit('https://172.105.85.46/login.php')
        loginPage.doLogin("automationUserRich","automationPasswordThatIsLong");
      })

      it('Can  Go to the inventory page',() => {
            menu.clickMenuItemByText('Inventory');
            inventoryPage.checkTitle();
      })

      
      it('Can not use an item the user does not have',() => {
        cy.visit('https://172.105.85.46/userInventory.php?action=use&invID=19643&itemID=1',{failOnStatusCode: false});
        dialogs.checkErrorDiv('Naughty rat, you don\'t have that :)')
     })

     it('Can use 1 item',() => {
        menu.clickMenuItemByText('Inventory');
        inventoryPage.checkTitle();
        inventoryPage.useItem(2);
  })     
  
  it('Can use 5 item',() => {
    menu.clickMenuItemByText('Inventory');
    inventoryPage.checkTitle();
    inventoryPage.use5Item(2);
})     

it('Can use 10 item',() => {
    menu.clickMenuItemByText('Inventory');
    inventoryPage.checkTitle();
    inventoryPage.use10Item(2);
})     

it('Can use 50 item',() => {
    menu.clickMenuItemByText('Inventory');
    inventoryPage.checkTitle();
    inventoryPage.use50Item(2);
})

it('Can sell an item',() => {
    menu.clickMenuItemByText('Inventory');
    inventoryPage.checkTitle();
    inventoryPage.sellItem(2);
})


it('Can sell 5 item',() => {
    menu.clickMenuItemByText('Inventory');
    inventoryPage.checkTitle();
    inventoryPage.sell5Item(2);
})


it('Can sell 10 item',() => {
    menu.clickMenuItemByText('Inventory');
    inventoryPage.checkTitle();
    inventoryPage.sell10Item(2);
})


it('Can sell 50 item',() => {
    menu.clickMenuItemByText('Inventory');
    inventoryPage.checkTitle();
    inventoryPage.sell50Item(2);
})

});