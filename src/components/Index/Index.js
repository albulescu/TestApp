import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from '../../components/BaseComponent';

import MenuButton from '../../components/MenuButton/MenuButton';
import Logo from '../../components/Logo/Logo';

require('./Style.less');

export default class Index extends BaseComponent {

  doMap() {
    window.require([
      'dojo/dom-construct',
      'esri/Map',
      'esri/views/MapView',
      'esri/widgets/Search',
      'dojo/domReady!',
    ], (domConstruct, Map, MapView, Search) => {

      const map = new Map({ basemap: 'streets' });

      const view = new MapView({
        container: 'mapView',
        map,
        zoom: 4,
        ui: {
          components: [],
        },
        center: [15, 65],
      });

      view.ui.add(new Search({ view }), 'top-right');

      const topleft = domConstruct.create('div');
      view.ui.add(topleft, 'top-left');

      ReactDOM.render(
        <div className="map-menu-overlay">
          <Logo />
          <MenuButton view={view} />
        </div>,
        topleft
      );

    });
  }

  render() {

    setTimeout(this.doMap, 1000);

    return (
      <div id="mapView"></div>
    );
  }
}
