import React from 'react';
import { Link } from 'react-router-dom';

import routePaths from 'shared/routePaths';

const Header = () => (
    <div className="navigationHeader">
        <Link className="navigationItem" to={routePaths.ROOT}>Home</Link>
        <Link className="navigationItem" to={routePaths.ABOUT}>About</Link>
    </div>
);

export default Header;
