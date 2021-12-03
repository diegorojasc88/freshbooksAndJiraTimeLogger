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


Cypress.Commands.add('addOneLine', (project, service, time, notes) => { //project is T Charlie or T Bravo, service is meeting or general
    cy.wait(2000);
    cy.contains("New Entry").click(); //Clicking New Entry
    cy.wait(2000);
    cy.get('[placeholder="Add a project or client"]').click();
    cy.wait(2000);
    cy.contains(project).click();
    cy.get('[placeholder="Add a service"]').click();
    cy.wait(2000)
    cy.contains(service).click();
    cy.get('[placeholder="HH:MM"]').type(time);
    cy.get('[placeholder="Add notes"]').type(notes);
    cy.get('button .icon.icon--check.icon--standalone').click();
    cy.wait(1000);

});
