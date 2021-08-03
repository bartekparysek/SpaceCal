import dotenv from 'dotenv'
dotenv.config();
describe('Google Auth process', () => {

  it('login process to google at main site', () => {
    cy.visit('/')
    cy.loginByGoogleApi()
    cy.contains('Add to Calendar').should('be.visible')

    cy
      .window()
      .its('store')
      .invoke('dispatch', { type: 'SIGN_OUT' })

    cy.findByRole('button', { name: /Add to Calendar/i }).should('not.exist')
  })

  it('login process at launch details', () => {
    cy.visit('/')

    cy.findByTestId('details-link').click();

    cy.loginByGoogleApi();

    cy.contains('Add to Calendar').should('be.visible');

    cy
      .window()
      .its('store')
      .invoke('dispatch', { type: 'SIGN_OUT' });

    cy.findByRole('button', { name: /Add to Calendar/i }).should('not.exist')

  })


})