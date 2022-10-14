/// <reference types="cypress" />

import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import settingsPage from '../../pageObjects/settingsPage';
import menu from '../../pageObjects/components/menu.js';

describe('Users default module on login', () => {

    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://172.105.85.46/login.php')
      })

      it('Can login with correct credentials',() => {
        loginPage.elemUserNameField().type("admin");
        loginPage.elemPassField().type('dkskjKJHidjodoidfhdsbjifdsgfIUGhsiofdhsdiofjhsdfdkskjKJHidjo');
        loginPage.login();
        homePage.openMenuItem('User panel');
    });


    it('Can not login with incorrect credentials',() => {
      loginPage.elemUserNameField().type("admin");
      loginPage.elemPassField().type('admin');
      loginPage.login();
      loginPage.getErrorTextField()  });

      it('Can not login with incorrect username',() => {
        loginPage.elemUserNameField().type("admins");
        loginPage.elemPassField().type('dkskjKJHidjodoidfhdsbjifdsgfIUGhsiofdhsdiofjhsdfdkskjKJHidjo');
        loginPage.login();
        loginPage.getErrorTextField()  });

      it('Can not login with incorrect password',() => {
        loginPage.elemUserNameField().type("admin");
        loginPage.elemPassField().type('dkskjKJHidjodoidfhdsbjifdsgfIUGhsiofdsdsdiofjhsdfdkskjKJHidjo');
        loginPage.login();
        loginPage.getErrorTextField()  });
});
