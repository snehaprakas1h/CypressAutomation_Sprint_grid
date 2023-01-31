class AngularAppHomePage{

    getAddTaskBtn(){
        return cy.get('app-task-add > .mat-focus-indicator')
    }

    enterTaskData(){
        return cy.get('#mat-input-6')
    }

    getAddTaskDataBtn(){
        return cy.get('.ng-star-inserted.ng-dirty > .mat-focus-indicator')
    }

    getStatusDrpDwn(){
        return cy.get('#mat-expansion-panel-header-6')
    }

    enterStatusData(){
        return cy.get('#mat-input-7')
    }

    getFirstStatus(){
        return cy.get('#mat-expansion-panel-header-8')
    }

    getSecondStatusDrpDwn(){
        return cy.get('#mat-expansion-panel-header-9')
    }

    enterSecondStatusData(){
        return cy.get('#mat-input-10')
    }

    getSecondStatus()
    {
        return cy.get('#mat-expansion-panel-header-11')
    }

    getCrsBtn(){
        return cy.get('.task-form__open-button > .mat-button-wrapper > .mat-icon')
    }

    getRemoveTaskBtn(){
        return cy.get(':nth-child(4) > .cdk-column-name > .table__task button span')
    }

    getSameTaskErrorMsg(){
        return cy.get('#mat-error-1')
    }

    getTitleReqErrorMsg(){
        return cy.get('#mat-error-0')
    }

    getTaskTitle(){
        return cy.get('.mat-header-row > .cdk-column-name')
    }

    getAddDateBtn(){
        return cy.get('app-date-add > .mat-focus-indicator')
    }

    getDateInputField(){
        return cy.get('#mat-input-6')
    }

    getAddedDateBtn(){
        return cy.get('.date-form__add-button')
    }

    getAddedDateColumn(){
        return cy.get('.mat-header-row > .cdk-column-1640991600000')
    }

    getRemoveDateColumnBtn(){
        return cy.get('.mat-header-row > .cdk-column-1640991600000 button span')
    }

    getSameDateErrorMsg(){
        return cy.get('#mat-error-1')
    }

    getDateRequiredErrorMsg(){
        return cy.get('#mat-error-0')
    }

    getPlaceHolderStatus(){
        return cy.get('#mat-expansion-panel-header-8')
    }

    getExistingTaskStatus(){
        return cy.get('#mat-expansion-panel-header-2')
    }

    getExistingTaskPlaceHolderStatus(){
        return cy.get('.ng-tns-c134-6.ng-untouched > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
    }
}

export default AngularAppHomePage