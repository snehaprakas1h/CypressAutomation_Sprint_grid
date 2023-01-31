/// <reference types="cypress"/>

import AngularAppHomePage from "../pageObjects/AngularApp/AngularAppHomePage"

describe('Test suite to verify error messages while adding task', function(){

    const angularAppHomePage= new AngularAppHomePage()

    before(function(){

        cy.fixture('example').then(function(data){
            
            this.data=data

        })

    })

    it('test case to add task with same name',function(){

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getAddTaskBtn().click()

        angularAppHomePage.enterTaskData().type(this.data.sametaskdata).type('{enter}') //entering task name

        angularAppHomePage.getSameTaskErrorMsg().should('have.text',this.data.sametaskerrormsg)
        
    })

    it('test case to add task with no name',function(){

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getAddTaskBtn().click()

        angularAppHomePage.enterTaskData().type('{enter}')//not entering task name

        angularAppHomePage.getTaskTitle().click({force:true})

        cy.wait(500)

       angularAppHomePage.getTitleReqErrorMsg().should('have.text',"The title is requined")
        
    })


})
