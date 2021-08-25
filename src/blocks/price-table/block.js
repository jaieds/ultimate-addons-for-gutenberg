import {registerBlockType} from '@wordpress/blocks';

import edit from "./edit";
import save from "./save";

import "./editor.scss";
import "./style.scss";

import attributes from "./attributes";
import { __ } from '@wordpress/i18n';


registerBlockType( "uagb/price-table", {
	title: "Price Table",
	description: "Modern Price Table block",
	icon: 'smiley',
	keywords: [
		__( "price-table",'ultimate-addons-for-gutenberg' ),
		__( "members",'ultimate-addons-for-gutenberg' ),
		__( "uag",'ultimate-addons-for-gutenberg' ),
		],
	category: uagb_blocks_info.category,
	attributes,
	example: {},
	edit,
	save,
} );
