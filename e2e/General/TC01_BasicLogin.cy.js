/// <reference types="cypress" />

import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import menu from '../../pageObjects/components/menu.js';


describe('example login checks', () => {
  beforeEach(() => {
    cy.once('uncaught:exception', () => false);
    cy.visit('https://portal-dev.3p.eu/Public/login?redirect=%2F');
  })

  it('The username and password should be visible', () => {
    loginPage.elemUserNameField().should('be.visible');
    loginPage.elemPassField().should('be.visible');
    //Reset pass link
  })

  it('Will show an error if we use no credentials', () => {
    loginPage.elemUserNameField().type("test@gmqilc.o");
    loginPage.elemPassField().type('dsfsdf');
    loginPage.elemLoginButton().click();
    loginPage.elemError().should('have.text','AUTHENTICATIE MISLUKT');
  })


  it('Will log in if we enter correct credentials', () => {
    loginPage.elemUserNameField().type("wthijs@3p.eu");
    loginPage.elemPassField().type('Poepsteen1');
    loginPage.login();
    homePage.openMenuItem('Bestellingen');
  })

});