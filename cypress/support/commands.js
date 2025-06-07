// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, pass) => {
    cy.get('#email').type(email) //input email
    cy.get('#pass').type(pass) //input passw
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click() //klik login btn
})

Cypress.Commands.add('verifyText', (locator, value) => {
    cy.get(locator).should('contain.text', value)
})

Cypress.Commands.add('goClick', (locator) => {
    cy.get(locator).click()
})

Cypress.Commands.add('inputText', (locator,value) => {
    cy.get(locator)
    .should('be.visible')
    .clear()
    .type(value)
})