import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'rc-dock/dist/rc-dock.css'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import {DockLayout} from 'rc-dock'

import HomePage from './Pages/HomePage'
import ResPage from './Pages/ResPage'


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
             id: 't5', title: 'map page', content: (
              <HomePage/>
            ),
          },
          {
             id: 't6', title: 'res page', content: (
              <ResPage/>
            ),
          },
         
        ],
        panelLock: {panelStyle: 'main'},
      },
      {
        size: 200,
        tabs: [{ id: 't8', title: 'Tab 8', content: (
          <div>card page</div>
        )}],
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
