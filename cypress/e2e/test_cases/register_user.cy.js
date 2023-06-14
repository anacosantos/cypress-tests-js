/// <reference types="cypress"/>

import {
  TESTMAIL,
  AUTOMATION_EXERCISE,
  URL_AUTOMATION_EXERCISE,
} from "../../support/utils";
import { signupAndLoginButton } from "../../support/auth-utils";
import SignUp from "../pageObjects/signup";
const signUp = new SignUp();

describe("Test Case 1 - Register user ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should go to Automation Practice/Exercise page", () => {
    cy.url().should("contain", URL_AUTOMATION_EXERCISE);
    cy.title().should("include", AUTOMATION_EXERCISE);
  });

  it("Should click on Signup / Login button and New User Signup! should be visible", () => {
    signupAndLoginButton();
    signUp.checkIfsignupButtonIsVisible();
  });

  it("Should check validatition of the name and email address", () => {
    signupAndLoginButton();
    signUp.checkNameFieldVisibility();
    signUp.checkEmailFieldVisibility();
  });

  it("Should check validatition if accept blank space all fields", () => {
    cy.signup("{enter}", "{enter}");
    signUp.checkRequiredFieldSignup();
  });

  it("Should not accept using special characters on name or email field", () => {
    cy.signup("!@#$@", "!@#$!@#$");
    signUp.checkRequiredFieldSignup();
  });

  it("Should not accept using number on name or email field", () => {
    cy.signup(2313, 123123);
    signUp.checkRequiredFieldSignup();
  });

  it("Should not accept using especial characters on name or email field", () => {
    cy.signup(2313, "!@#$!@#$");
    signUp.checkRequiredFieldSignup();
  });

  it("Should enter name and email address and check that Enter Account Information is visible", () => {
    cy.signup(Cypress.env("myName"), TESTMAIL);
    signUp.signupConfirmation();
  });

  it.only("Fill details: Title, Name, Email, Password, Date of birth", () => {
    signupAndLoginButton();
    cy.signup(Cypress.env("myName"), TESTMAIL);
    signUp.signupConfirmation();
    cy.fixture("signup.json").then((signupData) => {
      const data = signupData.dataSet1;
      signUp.signupFormFields(data);
    });
  });
});
