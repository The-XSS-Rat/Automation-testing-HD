class menu {
    constructor() {

    }

    clickMenuItemByText(value){
        cy.get('*[class^="myButton"]').contains(value).click();
    }

    clickBackToMainMenu(){
        this.clickMenuItemByText('Home');
    }

    clickSettings(){
        cy.xpath('/html/body/div/div/div/div/header/div/div[3]/button/span/div/i').click();
    }
    
    openProfileSettings(){
        cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div/div/div[1]/div[2]').click();
    }

    clickUserSettingsButton(){
        cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div[1]').click();
    }

    openGeneralUserSettings(){
        this.clickUserSettingsButton();
        cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div[2]').click();
    }

    openOrganisationUserSettings(){
        this.clickUserSettingsButton();
        cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div[3]/div[2]/div[1]').click();
    }

    openUserProfileSettings(){
        this.clickUserSettingsButton();
        cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div[4]/div[2]/div[1]').click();
    }

    openUserSettings(){
        this.clickUserSettingsButton();
        cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div[2]/div/div[4]/div[2]/div[2]').click();
    }
}

module.exports = new menu();
require('cypress-xpath');