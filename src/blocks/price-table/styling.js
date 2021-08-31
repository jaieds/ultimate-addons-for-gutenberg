/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "@Controls/generateCSS"
import generateCSSUnit from "@Controls/generateCSSUnit"

function styling({attributes, clientId} ) {

	const {
		tableBgGradient
	} = attributes;

	let tablet_selectors = {}
	let mobile_selectors = {}

	let selectors = {
		" .wp-block-uagb-price-table": {
			"background-image": tableBgGradient,
		},
	}

	let styling_css = "";
	let id = `.uagb-block-${ clientId.substr( 0, 8 ) }`;

	styling_css = generateCSS( selectors, id );

	styling_css += generateCSS( tablet_selectors, `${id}.uagb-editor-preview-mode-tablet`, true, "tablet" );

	styling_css += generateCSS( mobile_selectors, `${id}.uagb-editor-preview-mode-mobile`, true, "mobile" );

	return styling_css;
}

export default styling;
