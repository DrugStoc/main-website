/* -------------------------------------------------------------------------- */
/*                           External Dependencies                        */
/* -------------------------------------------------------------------------- */

import React, { Children } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

/* -------------------------- NavLink PropTypes -------------------------- */
const propTypes = {
	router: PropTypes.any,
	children: PropTypes.any,
	activeClassName: PropTypes.string,
	href: PropTypes.any,
	as: PropTypes.string,
	urlAs: PropTypes.string,
};

const NavLink = ({ router, children, ...props }) => {
	const child = Children.only(children);

	let className = child.props.className || '';

	const { href, activeClassName, as: asURL, urlAs } = props;

	if (
		router.pathname === href ||
		router.asPath === href ||
		router.pathname === asURL ||
		router.asPath === asURL
			? activeClassName
			: false
	) {
		className = `${className} ${props.activeClassName}`.trim();
	}

	delete props.activeClassName;

	return (
		<Link {...props} as={urlAs || asURL}>
			{React.cloneElement(child, { className })}
		</Link>
	);
};

NavLink.propTypes = propTypes;

export default withRouter(NavLink);
