class SignUp {
    
    checkIfsignupButtonIsVisible() {
        cy.get('.signup-form').should('be.visible');
    }
    checkRequiredFieldSignup() {
        cy.get('input[data-qa="signup-name"]').invoke('attr', 'required').then((required) => {
            expect(required).to.include('required')  
            });
          cy.get('input[data-qa="signup-email"]').invoke('attr', 'required').then((required) => {
          expect(required).to.include('required')  
        });
    }
  }
  
export default SignUp;