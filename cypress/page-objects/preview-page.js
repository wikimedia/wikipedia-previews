import { msg } from '../../src/i18n'

export class Preview {

	// Wikipedia Preiew Span

	getPreviewSpan() {
		return cy.get( 'span.wmf-wp-with-preview' )
	}

	// Wikipedia Preiew Container

	getPreview() {
		return cy.get( 'div.wikipediapreview' )
	}

	getMobPreview() {
		return cy.get( 'div.wikipediapreview' )
	}

	getMobBackgroundScreen() {
		return cy.get( '.wp-dark-screen' )
	}
	// Wikipedia Preiew Header

	getHeader() {
		return cy.get( 'div.wikipediapreview-header' )
	}

	getHeaderImage() {
		return cy.get( 'div.wikipediapreview-header-image' )
	}

	getHeaderWatermark() {
		return cy.get( 'div.wikipediapreview-header-wordmark' )
	}

	getHeaderClosebtn() {
		return cy.get( 'div.wikipediapreview-header-closebtn' )
	}

	// Wikipedia Preiew Body

	getBody() {
		return cy.get( 'div.wikipediapreview-body' )
	}

	getBodyContent() {
		return cy.get( 'div.wikipediapreview-body > p' )
	}

	getBodyGallery() {
		return cy.get( 'div.wikipediapreview-gallery-row' )
	}

	getBodyGalleryImages() {
		return cy.get( 'div.wikipediapreview-gallery-image' )
	}

	getBodyMessage() {
		return cy.get( 'div.wikipediapreview-body-message' )
	}

	getBodyAction() {
		return cy.get( 'div.wikipediapreview-body-action > a' )
	}

	//  Wikipedia Preview Footer

	getFooter() {
		return cy.get( 'div.wikipediapreview-footer' )
	}

	getFooterContiReading() {
		return cy.get( 'span[class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore"]' )
	}

	getFooterReadMore() {
		return cy.get( 'a[class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki"]' )
	}

	// Custom Command to check the existence of Preview
	checkPreview() {

		this.getPreview().should( 'be.visible' )

		this.getHeader().should( 'be.visible' )
		this.getHeaderWatermark().should( 'be.visible' )
		this.getHeaderClosebtn().should( 'be.visible' )

		this.getBody().should( 'be.visible' )

	}

	// Custom Command to check the existence of Mobile Preview
	checkMobilePreview() {

		this.getMobPreview().should( 'be.visible' )
			.and( 'have.class', 'mobile' )
	}

	// Custom Command to check the Preview in Standard Mode
	checkPreviewStandard() {

		this.getPreview().should( 'be.visible' )

		this.getHeader().should( 'be.visible' )
		this.getHeaderWatermark().should( 'be.visible' )
		this.getHeaderClosebtn().should( 'be.visible' )
		this.getHeaderImage().its( 'length' ).then( len => {
			if ( len > 0 ) {
				this.getHeaderImage().should( 'be.visible' )
			}
		} )

		this.getBody().should( 'be.visible' )
		this.getBodyContent().should( 'be.visible', { force: true } )
			.and( 'have.css', 'font-size' ).and( 'equal', '18px' )

		this.getFooter().should( 'be.visible' )
		this.getFooterContiReading().should( 'be.visible' )

	}

	// Custom Command to check the Preview in Expanded Mode
	checkPreviewExpanded() {

		this.getPreview().should( 'be.visible' )
			.and( 'have.class', 'expanded' )

		this.getHeader().should( 'be.visible' )
		this.getHeaderWatermark().should( 'be.visible' )
		this.getHeaderClosebtn().should( 'be.visible' )

		this.getBody().should( 'be.visible' )
		this.getBodyContent().should( 'be.visible' )
			.and( 'have.css', 'font-size' ).and( 'equal', '18px' )
		this.getHeaderImage().its( 'length' ).then( len => {
			if ( len > 0 ) {
				this.getBodyGallery().scrollIntoView().should( 'be.visible' )
				this.getBodyGalleryImages().should( 'be.visible' )
			}
		} )
		this.getFooter().should( 'be.visible' )
		this.getFooterReadMore().should( 'be.visible' )

	}

	// Custom Command to check the Preview in Disambiguation Mode
	checkPreviewDisambiguation() {

		this.getPreview().should( 'be.visible' )

		this.getHeader().should( 'be.visible' )
		this.getHeaderWatermark().should( 'be.visible' )
		this.getHeaderClosebtn().should( 'be.visible' )

		this.getPreview().then( tag => {

			const lang = tag.attr( 'lang' )

			this.getBody().should( 'be.visible' )
				.and( 'have.class', 'wikipediapreview-body-disambiguation' )
				.and( 'have.css', 'font-size' ).and( 'equal', '16px' )

			this.getBodyMessage().then( ele => {
				cy.wrap( ele ).find( 'div.wikipediapreview-body-icon' )
			} )

			this.getBodyAction().should( 'be.visible' )
				.and( 'contain', msg( lang, 'read-on-wiki' ) )
		} )

	}

	// Custom Command to check the Preview in Offline Mode
	checkPreviewOffline() {

		this.getPreview().should( 'be.visible' )

		this.getHeader().should( 'be.visible' )
		this.getHeaderWatermark().should( 'be.visible' )
		this.getHeaderClosebtn().should( 'be.visible' )

		this.getPreview().then( tag => {

			const lang = tag.attr( 'lang' )

			this.getBody().should( 'be.visible' )
				.and( 'have.class', 'wikipediapreview-body-offline' )
				.and( 'have.css', 'font-size' ).and( 'equal', '16px' )

			this.getBodyMessage().then( ele => {
				cy.wrap( ele ).find( 'div.wikipediapreview-body-icon' ).should( 'be.visible' )
				cy.wrap( ele ).find( 'span' ).should( 'contain', msg( lang, 'preview-offline-message' ) )

			} )

			this.getBodyAction().should( 'be.visible' )
				.and( 'contain', msg( lang, 'preview-offline-cta' ) )

		} )

	}

	// Custom Command to check the Preview in Error Mode
	checkPreviewError() {

		this.getPreview().should( 'be.visible' )

		this.getHeader().should( 'be.visible' )
		this.getHeaderWatermark().should( 'be.visible' )
		this.getHeaderClosebtn().should( 'be.visible' )

		this.getPreview().then( tag => {

			const lang = tag.attr( 'lang' )

			this.getBody().should( 'be.visible' )
				.and( 'have.class', 'wikipediapreview-body-error' )
				.and( 'have.css', 'font-size' ).and( 'equal', '16px' )

			this.getBodyMessage().then( ele => {
				cy.wrap( ele ).find( 'div.wikipediapreview-body-icon' )
				cy.wrap( ele ).find( 'span' ).should( 'contain', msg( lang, 'preview-error-message' ) )

			} )

			this.getBodyAction().should( 'be.visible' )
				.should( 'contain', msg( lang, 'read-on-wiki' ) )

		} )

	}

}
