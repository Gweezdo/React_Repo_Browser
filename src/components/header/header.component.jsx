import React from 'react';

import {ReactComponent as CatalystLogo} from '../../assets/catalyst-logo.svg';

import './header.styles.scss';

const Header = () => (
	<div className="header">
		<div className="logo-container">
			<CatalystLogo className="logo"/>
		</div>

		<div className="button-container">
			<a>View Blog</a>
		</div>

	</div>
);

export default Header;