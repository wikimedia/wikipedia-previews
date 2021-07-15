import { Preview } from '../page-objects/preview-page'
import { goOffline, goOnline } from '../page-objects/helpers/network'

const preview = new Preview()

describe( 'Check the different Layout in Mobile Wikipedia Preview ', () => {

	beforeEach( 'Open the English Page', () => {
		cy.navigateToMobileTestPage()
		cy.viewport( 550, 750 )
	} )

	it( 'Check the Wikipedia Preview in Standard Layout', () => {
		// Opens Mobile Preview
		preview.getPreviewSpan().eq( 0 ).click()
		// Checks the preview
		cy.wait( 1000 )
		preview.checkMobilePreview()
		preview.checkPreview()
		// Closes the Mobile Preview
		preview.getHeaderClosebtn().click()

	} )

	it.skip( 'Check the Wikipedia Preview in Offline Layout', () => {
		goOffline()
		// Opens Mobile Preview
		preview.getPreviewSpan().first().click()
		// Checks the preview
		preview.checkMobilePreview()
		preview.checkPreviewOffline()
		// Closes the Mobile Preview
		preview.getHeaderClosebtn().click()
		goOnline()

	} )

	it( 'Check the Wikipedia Preview in Error Layout', () => {
		// Opens Mobile Preview
		preview.getPreviewSpan().eq( 1 ).click()
		// Checks the preview
		preview.checkMobilePreview()
		preview.checkPreviewError()
		// Closes the Mobile Preview
		preview.getHeaderClosebtn().click()

	} )

	it( 'Check the Wikipedia Preview in Disambiguation Layout', () => {
		// Opens Mobile Preview
		preview.getPreviewSpan().eq( 2 ).click()
		// Checks the preview
		preview.checkMobilePreview()
		preview.checkPreviewDisambiguation()
		// Closes the Mobile Preview
		preview.getHeaderClosebtn().click()

	} )
} )
