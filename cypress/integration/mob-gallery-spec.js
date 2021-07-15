import { Preview } from '../page-objects/preview-page'
import { Gallery } from '../page-objects/gallery-page'

const preview = new Preview()
const gallery = new Gallery()

describe( 'Check the Gallery Pages in Mobile View', () => {

	beforeEach( 'Open the English Page', () => {
		cy.navigateToMobileTestPage()
	} )

	it( 'Check the Gallery Pages Movement by Clicking on', () => {
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
			if ( res > 1 ) {
				// Open the Gallery
				preview.getBodyGalleryImages().first().click()
				// Click on the Next Icon
				gallery.getGalleryNextBtn().click()
				// Click on the Previous Icon
				gallery.getGalleryPrevBtn().click()
				// Close the Gallery
				gallery.getGalleryCloseBtn().click()
				// Close the Preview
				preview.getHeaderClosebtn().click()
			}
		} )
	} )

	it( 'Check the Gallery Pages Movement by Swiping', () => {
		// Open the Preview
		preview.getPreviewSpan().first().click()
		// Check for the Continue Reading exist
		preview.getFooterContiReading().then( res => {
			if ( res.css( 'display' ) !== 'none' ) {
				preview.getFooterContiReading().click()
			}
		} )
		const i = 0
		// Check if the Images exist
		preview.getBodyGalleryImages().its( 'length' ).then( res => {
			if ( res > 1 ) {
				// Open the Gallery
				preview.getBodyGalleryImages().first().click()
				// Swipe to go Next
				gallery.getGalleryImage( i ).swipe( 'right', 'left' )
				// Swipe to go Previous
				gallery.getGalleryImage( i + 1 ).swipe( 'left', 'right' )
			}
		} )
	} )

	it( 'Check the Gallery Image Caption Scrollable', () => {
		// Open the Preview
		preview.getPreviewSpan().eq( 4 ).click()
		// Check for the Continue Reading exist
		preview.getFooterContiReading().then( res => {
			if ( res.css( 'display' ) !== 'none' ) {
				preview.getFooterContiReading().click()
			}
		} )
		const i = 1
		// Check if the Images exist
		preview.getBodyGalleryImages().its( 'length' ).then( res => {
			if ( res > 1 ) {
				// Open the Gallery
				preview.getBodyGalleryImages().eq( 1 ).click()
				// Check if the Caption Bar exist
				gallery.getGalleryCaptionBar( i ).its( 'length' ).then( len => {
					if ( len > 0 ) {
						// Scroll the Caption Text
						gallery.getGalleryCaptionText( i ).swipe( 'bottom', 'top' )
						// gallery.getGalleryCaptionText(i).scrollTo('bottom')
					}
				} )
			}
		} )
	} )

} )
