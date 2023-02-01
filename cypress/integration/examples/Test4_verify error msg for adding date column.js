/// <reference types="cypress"/>

import AngularAppHomePage from "../pageObjects/AngularApp/AngularAppHomePage"

describe('Test suite to verify error messages while adding date column', function(){

    const angularAppHomePage= new AngularAppHomePage()

    before(function(){

        cy.fixture('example').then(function(data){
            
            this.data=data

        })

    })

    it('test case to add date column with same date',function(){

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getAddDateBtn().click({force:true})

        angularAppHomePage.getDateInputField().type(this.data.samedatecolumn).type('{enter}') //entering same date for date column

        angularAppHomePage.getSameDateErrorMsg().should('have.text',this.data.samedateerrormsg)
        
    })

    it('test case to add date column with no date',function(){

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getAddDateBtn().click({force:true})

        angularAppHomePage.getDateInputField().type('{enter}')//not entering date for date column 

        angularAppHomePage.getTaskTitle().click({force:true})

        cy.wait(500)

       angularAppHomePage.getDateRequiredErrorMsg().should('have.text',"Date is required")
        
    })

    it('test case to add date column with date not parsed in format',function(){

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getAddDateBtn().click({force:true})

        angularAppHomePage.getDateInputField().type('8765/22/87')

        angularAppHomePage.getTaskTitle().click({force:true})

        cy.wait(500)

       angularAppHomePage.getSameDateErrorMsg().should('have.text',"Follow the format dd.mm.yyyy, please")
        
    })



})
