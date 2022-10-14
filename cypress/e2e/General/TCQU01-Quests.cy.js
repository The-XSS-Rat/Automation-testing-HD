/// <reference types="cypress" />

import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import menu from '../../pageObjects/components/menu.js';

describe('Basic menu navigation', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://172.105.85.46/login.php')
        loginPage.elemUserNameField().type("testtest");
        loginPage.elemPassField().type('testtesttesttest');
        loginPage.login();
    });

    it('Can  select a quest',() => {
        menubar.clickMenuItemByText('Quests');
    })

});