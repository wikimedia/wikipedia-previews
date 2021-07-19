Cypress.Commands.add( 'navigateToTestPage', () => {
	cy.visit( '/articles/test.html' )
} )

Cypress.Commands.add( 'navigateToEnglishPage', () => {
	cy.visit( '/articles/english.html' )
} )

Cypress.Commands.add( 'navigateToMobileHomePage', ( url = '' ) => {
	cy.visitMobile( String( url ) )
} )
