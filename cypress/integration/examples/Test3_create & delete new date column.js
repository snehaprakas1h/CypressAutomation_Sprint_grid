/// <reference types="cypress"/>

import AngularAppHomePage from "../pageObjects/AngularApp/AngularAppHomePage"

describe('Test suite to create & delete new date column', function(){

    const angularAppHomePage= new AngularAppHomePage()

    before(function(){

        cy.fixture('example').then(function(data){
            
            this.data=data

        })

    })

    it('Test case to create & delete new date column',function(){

        Cypress.config('defaultCommandTimeout',10000) //Timeout for test case

        cy.visit(Cypress.env('url')) //launching url


        angularAppHomePage.getAddDateBtn().click({force:true})

        angularAppHomePage.getDateInputField().type(this.data.newdatecolumn); //enter required date

        cy.wait(500)

        angularAppHomePage.getAddedDateBtn().click({force:true}); //add the date
    

    })

     after(function(){
    
        angularAppHomePage.getRemoveDateColumnBtn().click({force:true}) //removing above added date column

     })

})
