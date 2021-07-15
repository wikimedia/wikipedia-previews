const goOffline = () => {
	cy.log( '**go offline**' )
		.then( () => {
			return Cypress.automation( 'remote:debugger:protocol',
				{
					command: 'Network.enable'
				} )
		} )
		.then( () => {
			return Cypress.automation( 'remote:debugger:protocol',
				{
					command: 'Network.emulateNetworkConditions',
					params: {
						offline: true,
						latency: -1,
						downloadThroughput: -1,
						uploadThroughput: -1
					}
				} )
		} )
}

const goOnline = () => {
	// disable offline mode, otherwise we will break our tests :)
	cy.log( '**go online**' )
		.then( () => {
			// https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
			return Cypress.automation( 'remote:debugger:protocol',
				{
					command: 'Network.emulateNetworkConditions',
					params: {
						offline: false,
						latency: -1,
						downloadThroughput: -1,
						uploadThroughput: -1
					}
				} )
		} )
		.then( () => {
			return Cypress.automation( 'remote:debugger:protocol',
				{
					command: 'Network.disable'
				} )
		} )
}

export { goOffline, goOnline }
