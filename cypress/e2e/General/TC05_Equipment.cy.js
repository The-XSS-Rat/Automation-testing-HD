import loginPage from '../../pageObjects/loginPage.js';
import inventoryPage from '../../pageObjects/inventoryPage';
import menu from '../../pageObjects/components/menu.js';
import equipPage from '../../pageObjects/EquipmentPage';

describe('Inventory test cases', () => {

    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.once('failOnStatusCode', () => false);
        cy.visit('https://172.105.85.46/login.php')
        loginPage.doLogin("automationUserRich","automationPasswordThatIsLong");
      })

      it('Can  Go to the equip page',() => {
            menu.clickMenuItemByText('Equipment');
            equipPage.checkTitle();
      })

      it('Can  equip all the weapons page',() => {
        menu.clickMenuItemByText('Equipment');
        equipPage.checkTitle();
        equipPage.equipWeapons(11);
        equipPage.equipWeapons(12);
        equipPage.equipWeapons(13);
        equipPage.equipWeapons(14);
     })


     it('Can  equip all the ornaments page',() => {
        menu.clickMenuItemByText('Equipment');
        equipPage.checkTitle();
        equipPage.equipOrnament(2);
        equipPage.equipOrnament(3);
        equipPage.equipOrnament(4);
     })


     it('Can  equip all the shields page',() => {
        menu.clickMenuItemByText('Equipment');
        equipPage.checkTitle();
        equipPage.equipShield(6);
        equipPage.equipShield(7);
        equipPage.equipShield(8);
     })
     
});