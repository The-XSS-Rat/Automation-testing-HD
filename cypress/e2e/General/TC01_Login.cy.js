/// <reference types="cypress" />

import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import settingsPage from '../../pageObjects/settingsPage';
import menu from '../../pageObjects/components/menu.js';

describe('Users default module on login', () => {

    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://172.105.85.46/login.php',{failOnStatusCode: false})
      })

      it('Can login with correct credentials',() => {
        loginPage.doLogin("automationUser","automationPasswordThatIsLong");
        homePage.openMenuItem('User panel');
    });

    it('Can not login with incorrect credentials',() => {
      loginPage.doLogin("admin","admin");
      loginPage.getErrorTextField()  });

      it('Can not login with incorrect username',() => {
        loginPage.doLogin("automationUsers","automationPasswordThatIsLong");
        loginPage.getErrorTextField()  });

      it('Can not login with incorrect password',() => {
        loginPage.doLogin("automationUser","automationPasswordThatIsLong1");
        loginPage.getErrorTextField()  });
});
