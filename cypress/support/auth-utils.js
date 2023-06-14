export function signupAndLoginButton() {
    return cy.get('a[href="/login"]').should('be.visible').click();
}