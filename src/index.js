import { requestPagePreview } from './api'
import { createPopup } from './popup'
import { renderPreview } from './preview'
import '../style/popup.less'

function init({
	root = document, 
	selector = '[data-wikipedia-preview]', 
	lang = 'en', 
	popupContainer = document.body }) {
	const globalLang = lang
	const popup 	 = createPopup(popupContainer)

	// @todo detect whether mobile or desktop browser
	const isMobile = false

	const showPopup = ({ target }) => {
		const title = target.getAttribute('data-wp-title') || target.textContent
		const lang = target.getAttribute('data-wp-lang') || globalLang
		requestPagePreview(lang, title, data => {
			if (data) {
				popup.show(renderPreview(lang, data), target)
			}
		})
	}

	Array.prototype.forEach.call(
		root.querySelectorAll(selector),
		node => {
			if ( isMobile ) {
				node.addEventListener('click', showPopup)
			} else {
				node.addEventListener('mouseenter', showPopup)
			}
		}
	)

	// debug purpose :
	// I use the following line to open the popup
	// on the first link during testing
	// mouseEnter({target: popupContainer.querySelector(selector)})
}

export { init }
