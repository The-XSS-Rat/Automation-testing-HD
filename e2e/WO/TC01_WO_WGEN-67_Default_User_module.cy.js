/// <reference types="cypress" />

import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import settingsPage from '../../pageObjects/settingsPage';
import menu from '../../pageObjects/components/menu.js';

describe('Users default module on login', () => {

    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://portal-dev.3p.eu/Public/login?redirect=%2F')
        loginPage.elemUserNameField().type("wthijs@3p.eu");
        loginPage.elemPassField().type('Poepsteen1');
        loginPage.login();
      })

      it('Can go to settingsMeny',() => {
        menu.clickSettings();
        menu.openGeneralUserSettings();
        cy.xpath('/html/body/div[1]/div/div/div[1]/main/div/div[2]/div/div[2]/div/div/div/div[1]/div/div/div[5]/div[2]/div/div/div/div/div/div/input').get().click();
    });
});
