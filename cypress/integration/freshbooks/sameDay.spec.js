import * as credentials from '../../constants/credentials';
import * as k from '../../constants/constants';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Same Day Time logging', () => {
    context('meetings', () => {
        it(`Freshbooks Time logger`, () => {
            cy.visit(Cypress.env('freshbooksLogin'));
            cy.location('pathname', {timeout: 10000}).should('include', '/auth/integrations');
            cy.get('#smux_identity_email').type(credentials.email, { force: true })
            cy.get('#smux_identity_password').type(credentials.password, { force: true })
            cy.get('[name="commit"]').click({ force: true }); //Login button
            
            cy.wait(8000);

            //cy.visit('#/time-tracking?timelineDay=2021-12-12'); //go to a specific date different from today
            cy.visit(Cypress.env('freshbooksSameDay')); //Go to time tracking today

            cy.addOneLine(k.kTEAMCHARLIE, k.kMEETINGS, '0.5', 'Team Charlie daily meeting');
            cy.addOneLine(k.kTEAMBRAVO, k.kMEETINGS, '0.5', 'QA Team daily meeting');
            cy.addOneLine(k.kTEAMBRAVO, k.kMEETINGS, '0.5', 'Team Bravo Daily meeting');

            //project is T Charlie or T Bravo, service is meetings or general
        });
        
    });
});