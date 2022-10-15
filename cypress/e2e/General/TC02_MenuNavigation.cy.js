
import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import menu from '../../pageObjects/components/menu.js';

describe('Basic menu navigation', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://172.105.85.46/login.php')
        loginPage.doLogin("automationUser","automationPasswordThatIsLong");
      })
    
    it('Can go back to home page', () => {
        homePage.openMenuItem('Links');
        menu.clickBackToMainMenu();
    })

    it('Can open all the menu items Logged Out', () => {
        homePage.openMenuItem('Logout');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('Home');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('Links');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('Login');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('Register');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('User guide');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('Karma store');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('Hall of fame');
        menu.clickBackToMainMenu();
        homePage.openMenuItem('Contact us');
        menu.clickBackToMainMenu();
    })
});