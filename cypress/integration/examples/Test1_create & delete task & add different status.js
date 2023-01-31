/// <reference types="cypress"/>

import AngularAppHomePage from "../pageObjects/AngularApp/AngularAppHomePage"

describe('Test suite to create & delete tasks for different status', function(){

    const angularAppHomePage= new AngularAppHomePage()

    before(function(){

        cy.fixture('example').then(function(data){
            
            this.data=data

        })

    })

    it('Test case to create task for To Do & In Progress',function(){

        Cypress.config('defaultCommandTimeout',10000) //Timeout for test case

        cy.visit(Cypress.env('url')) //launching url

        angularAppHomePage.getAddTaskBtn().click()

        angularAppHomePage.enterTaskData().type(this.data.taskdata).type(" ") //entering task name

        cy.wait(500)

        angularAppHomePage.getAddTaskDataBtn().click({ force: true }) //adding task

        angularAppHomePage.getStatusDrpDwn().click()

        angularAppHomePage.enterStatusData().type(this.data.status1) //entering status of the above created task

        cy.wait(500)

        angularAppHomePage.getFirstStatus().contains(this.data.status1) //asserting the status of the task

        angularAppHomePage.getSecondStatusDrpDwn().click({force:true})

        angularAppHomePage.enterSecondStatusData().type(this.data.status2) //adding another status

        cy.wait(500)

        angularAppHomePage.getSecondStatus().contains(this.data.status2)  //asserting the status of the task

        angularAppHomePage.getCrsBtn().click() //clear task btn

    })

     after(function(){
    
        angularAppHomePage.getRemoveTaskBtn().click({force:true}) //removing the above created task in the end

     })

})
