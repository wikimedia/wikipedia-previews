import { Preview } from '../page-objects/preview-page'
import { Gallery } from '../page-objects/gallery-page'

const preview = new Preview()
const gallery = new Gallery()

describe( 'Check the Gallery Pages ', () => {

	beforeEach( 'Open the English Page', () => {
		cy.navigateToTestPage()
	} )

	it( 'Check the Gallery Pages', () => {
		// Open the Preview
		preview.getPreviewSpan().first().click()
		// Check for the Continue Reading exist
		preview.getFooterContiReading().then( res => {
			if ( res.css( 'display' ) !== 'none' ) {
				preview.getFooterContiReading().click()
			}
		} )
		// Check if the Images exist
		preview.getBodyGalleryImages().its( 'length' ).then( res => {
			if ( res > 0 ) {
			// Open the Gallery and Close it
				preview.getBodyGalleryImages().first().click()
				gallery.getGalleryCloseBtn().click()
			}
		} )
	} )

	it( 'Check the Gallery Pages Movement', () => {
		// Open the Preview
		preview.getPreviewSpan().first().click()
		// Check for the Continue Reading exist
		preview.getFooterContiReading().then( res => {
			if ( res.css( 'display' ) !== 'none' ) {
				preview.getFooterContiReading().click()
			}
		} )
		// Check if the Image exist
		preview.getBodyGalleryImages().its( 'length' ).then( res => {
			if ( res > 1 ) {
				// Open the Gallery
				preview.getBodyGalleryImages().first().click()
				// Click on the Next Icon
				gallery.getGalleryNextBtn().click()
				// Click on the Previous Icon
				gallery.getGalleryPrevBtn().click()
				// Close the Gallery
				gallery.getGalleryCloseBtn().click()
			}
		} )

	} )

} )
