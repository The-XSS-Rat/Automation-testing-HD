
import loginPage from '../../pageObjects/loginPage.js';
import homePage from '../../pageObjects/homePage';
import menu from '../../pageObjects/components/menu.js';

describe('Basic menu navigation', () => {
    beforeEach(() => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://172.105.85.46/login.php')
        loginPage.doLogin("automationUser","automationPasswordThatIsLong");
      })

    it('Can not open itemOverview page if not logged in', () => {
        homePage.openMenuItem('Logout');
        cy.visit('https://172.105.85.46/itemOverview.php'),{failOnStatusCode: false};
        cy.get("#error").contains('You are not logged in or not a admin');
    });

    it('Can not open itemOverview page if not logged in as admin', () => {
        homePage.openMenuItem('Logout');
        loginPage.elemUserNameField().type("testtest");
        loginPage.elemPassField().type('testtesttesttest');
        loginPage.login();

        cy.visit('https://172.105.85.46/itemOverview.php',{failOnStatusCode: false});
        cy.get("#error").contains('You are not logged in or not a admin');
    });

    it('Can not open adminNotifications page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/adminNotifications.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });   
    
    it('Can not open admin panel page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/adminPanel.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not open mentorPanel page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/mentorPanel.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not open createTask page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/createTask.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not open taskOverview page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/taskOverview.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not open catOverview page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/catOverview.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });


    it('Can not open goToStep page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/goToStep.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });
    
    it('Can not open edit a task page if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/task.php?id=261',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });
    
});