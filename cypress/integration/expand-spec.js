import { Preview } from '../page-objects/preview-page'

const preview = new Preview()

describe( 'Check the Expanded Layout', () => {

	beforeEach( 'Open the English Page', () => {
		cy.navigateToTestPage()
	} )

	it( 'Check the Wikipedia Preview in Expanded Layout', () => {
		// Opens the Preview
		preview.getPreviewSpan().eq( 0 ).click()
		// Click on Continue Reading Footer element
		preview.getFooterContiReading().click()
		// Check the Expanded Mode preview
		preview.checkPreviewExpanded()
		// Closes the Preview
		preview.getHeaderClosebtn().click()

	} )

} )
