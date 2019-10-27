import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'rc-dock/dist/rc-dock.css'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import {DockLayout} from 'rc-dock'

import HomePage from './Pages/HomePage'


let tab = {
  content: <div>Tab Content</div>,
  closable: true,
};

let layout = {
  dockbox: {
    mode: 'horizontal',
    children: [
      
      {
        size: 1000,
        tabs: [
          {
            ...tab, id: 't5', title: 'basic demo', content: (
              <HomePage/>
            ),
          },
         
        ],
        panelLock: {panelStyle: 'main'},
      },
      {
        size: 200,
        tabs: [{...tab, id: 't8', title: 'Tab 8'}],
      },
    ]
  },
  
}
;

function App() {
  return (
    <div className="App">
     <DockLayout defaultLayout={layout} style={{position: 'absolute', left: 10, top: 10, right: 10, bottom: 10}}/>
    </div>
  );
}

export default App;
