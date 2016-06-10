import React from 'react';
import BaseComponent from '../../components/BaseComponent';
import Svg from 'react-inlinesvg';
import { Link } from 'react-router';

require('./Style.less');

export default class MenuButton extends BaseComponent {
  render() {
    return (
      <div className="map-overlay">
        <div role="button" className="map-overlay-button">
          <Svg src="assets/menu.svg" />
        </div>
        <div role="dialog" className="menu-dialog">
          <ul>
            <li><Link href to={'/register'}>Register Donner</Link></li>
            <li><Link href to={'/search'}>Search Donner</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
