
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
    
    it('Can not open add a step if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/addStep.php?taskID=263',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not edit a task if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/editDescription.php?taskID=263',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });    
    
    it('Can not delete a step if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/delStep.php?id=899&taskID=263',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not put a step in the monster pool or remove it if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/step.php?id=899&monsterFight=1&returnToTask=1',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not delete a solution if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/delSolution.php?id=1286&stepID=899',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    
    it('Can not delete a hint if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/delHint.php?id=253&stepID=899',{failOnStatusCode: false});
        loginPage.checkOnPage();
    });

    it('Can not add a hint if not logged in as admin', () => {
        cy.visit('https://172.105.85.46/addHint.php?id=253&stepID=899',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the useroverview page if not admin', () => {
        cy.visit('https://172.105.85.46/userOverview.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the admin overview page if not admin', () => {
        cy.visit('https://172.105.85.46/adminOverview.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the mentor overview page if not admin', () => {
        cy.visit('https://172.105.85.46/mentorOverview.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the setUserstatus page if not admin', () => {
        cy.visit('https://172.105.85.46/setUserStatus.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the setUserSubLevel page if not admin', () => {
        cy.visit('https://172.105.85.46/setUserSubLevel.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the setUserSubLevel page if not admin', () => {
        cy.visit('https://172.105.85.46/settingsOverview.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the reported DMs page if not admin', () => {
        cy.visit('https://172.105.85.46/adminOverviewReportedDMs.php',{failOnStatusCode: false});
        loginPage.checkOnPage();
    }); 

    it('Can not go to the enter links page if not admin', () => {
        cy.visit('https://172.105.85.46/enterLinks.php',{failOnStatusCode: false});
        loginPage.checkOnPage();                                                                                
    }); 

    it('Can not go to the links catgory page if not admin', () => {
        cy.visit('https://172.105.85.46/linkCatOverview.php',{failOnStatusCode: false});
        loginPage.checkOnPage();                                                                                
    });  


    it('Can not go to the send everyone a notications catgory page if not admin', () => {
        cy.visit('https://172.105.85.46/sendEveryoneNotification.php',{failOnStatusCode: false});
        loginPage.checkOnPage();                                                                                
    });  

}); 