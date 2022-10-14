/// <reference types="cypress" />

import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import menu from '../../pageObjects/components/menu.js';
import selectRandomQuest from '../../pageObjects/selectRandomQuest.js';

describe('Basic menu navigation', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://172.105.85.46/login.php')
        loginPage.elemUserNameField().type("testtest");
        loginPage.elemPassField().type('testtesttesttest');
        loginPage.login();
    });

    it('Can  select a quest from lists',() => {
        menu.clickMenuItemByText('Quests');
        selectRandomQuest.selectFirstQuest();
    })

    it('Can  select a quest',() => {
        menu.clickMenuItemByText('Random Quest');
        selectRandomQuest.clickSelectQuest();
    })

    

});