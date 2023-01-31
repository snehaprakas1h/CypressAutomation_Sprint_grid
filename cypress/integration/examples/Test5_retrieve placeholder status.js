/// <reference types="cypress"/>

import AngularAppHomePage from "../pageObjects/AngularApp/AngularAppHomePage"

describe('Test suite to retrieve placeholder', function(){

    const angularAppHomePage= new AngularAppHomePage()

    before(function(){

        cy.fixture('example').then(function(data){
            
            this.data=data

        })

    })

    it('Test case to retrieve placeholder status',function(){

        Cypress.config('defaultCommandTimeout',10000) //Timeout for test case

        cy.visit(Cypress.env('url')) //launching url


        angularAppHomePage.getAddDateBtn().click({force:true})

        angularAppHomePage.getDateInputField().type(this.data.newdatecolumn); //enter required date

        cy.wait(500)

        angularAppHomePage.getAddedDateBtn().click({force:true}); //add the date

        angularAppHomePage.getPlaceHolderStatus().should('have.text',this.data.expectedstatus) // Test case will fail as the expected is Set Status but actual value was Create Status
    
    })

    it('Test case to retrieve placeholder status of changed task',function(){

        Cypress.config('defaultCommandTimeout',10000) //Timeout for test case

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getExistingTaskStatus().click({force:true})

        angularAppHomePage.getExistingTaskPlaceHolderStatus().should('have.text','Change status') 
    
    })

})
