
// @ts-nocheck
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      getBySel(
        testId: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<any>;
      getEmail(type: string): Chainable<any>;
      signup(name: string, email: string):Chainable<string>;
    }
  }
}

function uuid() {
  return 'xxxxxxxx'.replace(/[x]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const testEmail = `cypress-test-${uuid()}@test.com`;

Cypress.Commands.add('getEmail', (email: string) => {
  if (email === 'email') {
    return Cypress.Promise.resolve(testEmail);
  }
  return Cypress.Promise.resolve(email);
});

Cypress.Commands.add('signup', (name: string, email: string) => {
  cy.visit('/login');

  cy.getEmail(email).then((resolvedEmail) => {
    const finalEmail = resolvedEmail as string; // Converter 'string' if necessary
    cy.get('a[href="/login"]').should('be.visible').click();
    cy.get('[data-qa="signup-name"]').should('exist').type(name);
    cy.get('[data-qa="signup-email"]').should('exist').type(finalEmail);
    cy.get('[data-qa="signup-button"]').click();
  });
});

