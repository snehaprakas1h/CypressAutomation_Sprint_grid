/// <reference types="cypress"/>

import AngularAppHomePage from "../pageObjects/AngularApp/AngularAppHomePage"

describe('Test suite to retrieve placeholder', function(){

    const angularAppHomePage= new AngularAppHomePage()

    before(function(){

        cy.fixture('example').then(function(data){
            
            this.data=data

        })

    })

    it('Test case to input different status',function(){

        Cypress.config('defaultCommandTimeout',10000) //Timeout for test case

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getAddTaskBtn().click()

        angularAppHomePage.enterTaskData().type(this.data.taskdata).type(" ") //entering task name

        cy.wait(500)

        angularAppHomePage.getAddTaskDataBtn().click({ force: true }) //adding task

        angularAppHomePage.getStatusDrpDwn().click()

        angularAppHomePage.enterStatusData().type(this.data.invalidstatus) //entering invalid status of the above created task

          const expectedText = ["To Do","In Progress","In Testing","Done","Blocked"];

          const isStringPresent = expectedText.includes(this.data.invalidstatus);

          cy.wrap(isStringPresent).should('be.true'); //test case should fail as the entered status is invalid

        angularAppHomePage.getCrsBtn().click() //clear task btn
    
    })

})
