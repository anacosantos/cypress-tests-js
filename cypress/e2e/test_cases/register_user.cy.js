/// <reference types="cypress"/>
import SignUp from '../pageObjects/signup';
const signUp = new SignUp();

describe('Register user', () => {
    beforeEach(() =>  {
      cy.visit('/');
    });

    it('Should go to Automation Practice page', () => {
        cy.url().should('contain', 'www.automationexercise.com');
    });

    it('Should click on Signup / Login button and New User Signup!should be visible', () => {
      cy.get('a[href="/login"]').should('be.visible').click();
      signUp.checkIfsignupButtonIsVisible()
    });

    it('Should check validatition of the name and email address', () => {
      cy.get('a[href="/login"]').should('be.visible').click();
      cy.get('[data-qa="signup-name"]').should('be.visible');
      cy.get('[data-qa="signup-email"]').should('be.visible');
    });

    it('Should check validatition if accept blank space all fields', () => {
      cy.get('a[href="/login"]').should('be.visible').click();
      cy.get('[data-qa="signup-name"]').type("{enter}");
      cy.get('[data-qa="signup-email"]').type("{enter}");
      cy.get('[data-qa="signup-button"]').click();
      signUp.checkRequiredFieldSignup()
    });

    it('Should not accept using especial characters on name or email field', () => {
      cy.signup("!@#$@", "!@#$!@#$");
      signUp.checkRequiredFieldSignup()
    })

    it('Should not accept using especial characters on name or email field', () => {
      cy.signup(2313, "!@#$!@#$");
      signUp.checkRequiredFieldSignup()
    })
})    