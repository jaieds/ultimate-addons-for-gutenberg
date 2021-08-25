import { useBlockProps } from '@wordpress/block-editor';


export default function save(props) {

	return (
		<div {...useBlockProps.save()}>
			<div className="wp-block-uagb-price-table">
				<div className="wp-block-uagb-price-table-header">
					<div className="wp-block-uagb-price-table-header-icon">
						<i className="fa fa-rocket" aria-hidden="true"></i>
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
							<i className="fa fa-angle-right" aria-hidden="true"></i>
							<span>Free Support 24/7</span>
						</div>
					</li>
					<li>
						<div className="wp-block-uagb-price-table-feature-content">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
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
