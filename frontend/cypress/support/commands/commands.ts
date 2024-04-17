/// <reference types="cypress" />

Cypress.Commands.add('assertTitle', (title:string) => {
    cy.get('.title').should('contain', title);
})