import React from 'react';
import { Link } from 'react-router';

require('./Style.less');

const AppLayout = function AppLayout(props) {
  return (
    <div className="main">
      {props.children}
    </div>
  );
};

AppLayout.propTypes = {
  children: React.PropTypes.any,
};

export default AppLayout;
