/// <reference types="cypress" />

import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import menu from '../../pageObjects/components/menu.js';
import dialogs from '../../pageObjects/dialogs.js';
import karmaStore from '../../pageObjects/karmaStore.js';
import karmaProductPage from '../../pageObjects/karmaProductPage.js';

describe('Karma store overview and purchases', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://172.105.85.46/login.php')
        loginPage.doLogin("automationUser","automationPasswordThatIsLong");
    });

    it('Can  select a product from the list and click buy now. The user should not be able to buy it since they do not have enough karma.',() => {
        menu.clickMenuItemByText('Store');
        karmaStore.selectProductOnPosition(1);
        karmaProductPage.clickBuyNow();
        dialogs.confirmBuy();
        dialogs.checkErrorDialog('You may not have enough karma.');
    })

    it('Can  select a random product',() => {
        menu.clickMenuItemByText('Store');
        karmaStore.selectProductOnPosition(4);
    })


    it('Can  open all random product',() => {
        var count = 1;
        while(count<8){
            menu.clickMenuItemByText('Store');
            karmaStore.selectProductOnPosition(count);
            count+=1;
        }
    })
    
    it('Can  select a product from the list and click buy now. The user should be able to buy it since they do have enough karma.',() => {
        menu.clickMenuItemByText('Logout');
        loginPage.doLogin("automationUserRich","automationPasswordThatIsLong");
        menu.clickMenuItemByText('Store');
        karmaStore.selectProductOnPosition(1);
        karmaProductPage.clickBuyNow();
        dialogs.confirmBuy();
        dialogs.checkSuccessDialog('Order completed!','Thanks for buying this product!');
    })

});