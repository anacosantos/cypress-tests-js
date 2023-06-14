class SignUp {
  checkNameFieldVisibility() {
    cy.get('[data-qa="signup-name"]').should("be.visible");
  }
  checkEmailFieldVisibility() {
    cy.get('[data-qa="signup-email"]').should("be.visible");
  }
  checkIfsignupButtonIsVisible() {
    cy.get(".signup-form").should("be.visible");
  }
  checkRequiredFieldSignup() {
    cy.get('input[data-qa="signup-name"]')
      .invoke("attr", "required")
      .then((required) => {
        expect(required).to.include("required");
      });
    cy.get('input[data-qa="signup-email"]')
      .invoke("attr", "required")
      .then((required) => {
        expect(required).to.include("required");
      });
  }
  signupConfirmation() {
    return cy.get(".login-form").should("contain", "Enter Account Information");
  }
  signupFormFields(data) {
    cy.get(".radio-inline").each(($element) => {
      cy.wrap($element)
        .invoke("text")
        .then((text) => {
          if (text.includes(data.genderText)) {
            cy.wrap($element).find('input[type="radio"]').click();
          }
        });
    });
    cy.get('[data-qa="name"]')
      .invoke("prop", "value")
      .should("contain", Cypress.env("myName"));
    cy.get('[data-qa="email"]')
      .invoke("prop", "value")
      .should("contain", "cypress-test");
    cy.get('[data-qa="password"]').should("exist").type(data.password);
    cy.get('[data-qa="days"]').should("exist").select(data.day);
    cy.get('[data-qa="months"]').should("exist").select(data.month);
    cy.get('[data-qa="years"]').should("exist").select(data.years);
    cy.get('[data-qa="first_name"]').should("exist").type(data.firstName);
    cy.get('[data-qa="last_name"]').should("exist").type(data.LastName);
    cy.get('[data-qa="address"]').should("exist").type(data.address);
    cy.get('[data-qa="country"]').should("exist").select(data.country);
    cy.get('[data-qa="state"]').should("exist").type(data.state);
    cy.get('[data-qa="city"]').should("exist").type(data.city);
    cy.get('[data-qa="zipcode"]').should("exist").type(data.zipCode);
    cy.get('[data-qa="mobile_number"]')
      .should("exist")
      .type(data.mobile_number);
  }
}

export default SignUp;
