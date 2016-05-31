import React from 'react';
import { Link } from 'react-router';

const AppLayout = function AppLayout(props) {
  return (
    <div className="main">
      <div>
        <Link to={'/donate'}>Donate</Link>
      </div>
      <div>{props.children}</div>
      <div>Footer</div>
    </div>
  );
};

AppLayout.propTypes = {
  children: React.PropTypes.array,
};

export default AppLayout;
