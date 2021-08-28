import classnames from "classnames";
import UAGBIcon from "@Controls/UAGBIcon.json";
import renderSVG from "@Controls/renderIcon";


export default function save({className, attributes}) {
	const {block_id} = attributes;
	return (
		<div className={classnames(
			className,
			`uagb-block-${block_id}`,
		)}>
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
