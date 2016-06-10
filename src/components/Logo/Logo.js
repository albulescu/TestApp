import React from 'react';
import BaseComponent from '../../components/BaseComponent';

require('./Style.less');

export default class Logo extends BaseComponent {
  render() {
    return (
      <img
        className="logo"
        alt="logo"
        src="assets/logo.png"
      />
    );
  }
}
