import {useEffect, useState} from "@wordpress/element";
import {__} from "@wordpress/i18n";
import {__experimentalColorGradientControl as ColorGradientControl, InspectorControls} from "@wordpress/block-editor";
import {PanelBody} from "@wordpress/components";
import UAGBIcon from "@Controls/UAGBIcon.json";
import renderSVG from "@Controls/renderIcon";
import styling from "./styling";
import classnames from "classnames";

let svg_icons = Object.keys(UAGBIcon)


export default function edit({attributes, setAttributes, clientId, className}) {
	const [initialState, setInitialState] = useState(true);

	useEffect(() => {
		if (initialState) {
			setAttributes({block_id: clientId.substr(0, 8)});

			const $style = document.createElement("style");
			$style.setAttribute("id", "uagb-style-price-table-" + clientId.substr(0, 8));
			document.head.appendChild($style);

			setInitialState(false);
		}

		let element = document.getElementById("uagb-style-price-table-" + clientId.substr(0, 8));

		if (null !== element && undefined !== element) {
			element.innerHTML = styling({attributes, clientId});
		}

	}, [attributes]);

	const gradientOnChange = (value) => {
		setAttributes({tableBgGradient: value});
	}

	return (
		<div className={classnames(
			className,
			`uagb-block-${attributes.block_id}`
		)}
		>
			<InspectorControls>
				<PanelBody title="Colors"
						   initialOpen={true}
						   onToggle={(open) => (!open)}
				>
					<h4>Table Background</h4>
					<ColorGradientControl
						gradientValue={attributes.tableBgGradient}
						gradients={[
							{
								name: 'Vivid cyan blue to vivid purple',
								gradient:
									'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
								slug: 'vivid-cyan-blue-to-vivid-purple',
							},
							{
								name: 'Light green cyan to vivid green cyan',
								gradient:
									'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
								slug: 'light-green-cyan-to-vivid-green-cyan',
							},
							{
								name: 'Luminous vivid amber to luminous vivid orange',
								gradient:
									'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
								slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
							},
						]}
						label={__("Choose a color or a gradient")}
						onGradientChange={gradientOnChange}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="wp-block-uagb-price-table">
				<div className="wp-block-uagb-price-table-header">
					<div className="wp-block-uagb-price-table-header-icon">
						<span>{renderSVG('fa fa-rocket')}</span>
					</div>
					<div className="wp-block-uagb-price-table-heading-text">
						<h4 className="wp-block-uagb-price-table-heading">Personal Edition</h4>
					</div>
					<div className="wp-block-uagb-price-table-subheading-text">
						<p className="wp-block-uagb-price-table-subheading">
							Auctor condimentum vero, solutauld hilvil similique, nisl proin
							augue? Accumsan interdum etiam
						</p>
					</div>
				</div>
				<ul className="wp-block-uagb-price-table-feature-list">
					<li>
						<div className="wp-block-uagb-price-table-feature-content">
							<span>
								{renderSVG("fa fa-angle-right")}
							</span>
							<span>Free Support 24/7</span>
						</div>
					</li>
					<li>
						<div className="wp-block-uagb-price-table-feature-content">
							<span>
								{renderSVG("fa fa-angle-right")}
							</span>
							<span>Maintenance Email</span>
						</div>
					</li>
				</ul>
				<div className="wp-block-uagb-price-table-price-wrap">
					<div className="wp-block-uagb-price-table-pricing">
						<div className="wp-block-uagb-price-table-pricing-container">
							<div className="wp-block-uagb-price-table-pricing-value">
								<span className="wp-block-uagb-price-table-original-price">$59.99</span>
								<span className="wp-block-uagb-price-table-currency-price">$</span>
								<span className="wp-block-uagb-price-table-normal-price"> 19.99 </span>
							</div>
						</div>
					</div>
				</div>
				<div className="wp-block-uagb-price-table-cta">
					<div className="wp-block-uagb-price-table-button-wrapper">
						<a href="#" className="wp-block-uagb-price-table-button-link">
							<span>Buy Now</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
