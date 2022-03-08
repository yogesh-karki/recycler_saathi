import React,{useState, useEffect} from 'react'

import Map from 'react-map-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';

import  {Source, Layer } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import ProvinceLabel from './data/ProvinceLabel.geojson'
import ProvinceMap from './data/ProvinceMap.json'



import RecyclerSaathiData from './data/mainData/AllData.geojson'




import './portal.scss'

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Portal = () => {


  const [viewport, setViewport] = useState({
    latitude: 28.2434542,
    longitude: 83.9835325,
    minZoom: 6.2,
    maxZoom: 20,
  });

  const MAPBOX_TOKEN = 'pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2txZXphNHNlMGNybDJ1cXVmeXFiZzB1eSJ9.A7dJUR4ppKJDKWZypF_0lA'



  const provinceLabelStyle = {
    id: "provinceLabel",
    type: 'symbol',
    layout: {
      "text-allow-overlap": false,
      'text-field': ['get', 'description'],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'auto',
      "text-size": 12,
      "text-font": ["Open Sans Bold","Arial Unicode MS Bold"]
      
    },
    paint: {
      "text-color": "#0a405a"
    }

  }

  
 
  

  const dataStyle = {
    id: 'dataStyle',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': 'orange'
    }
  }

  const mapStyleLine = {
    id: 'map_style',
    type: 'line',
    layout: {
    },
    paint: {
        'line-color': "#0a405a",
        'line-width': 1.5,
        'line-dasharray': [2,1]
    },
    
  }

 

  return (
    <>
      <div className="portal">
        <Map
          {...viewport}
          style={{width: '100vw', height: '100vh'}}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/yogeshkarki/cl0gcwa4e000d15p3bh6inkcq"
          onMove={evt => setViewport(evt.viewport)} 
        > 

          <Source id="provinceLabel" type="geojson" data={ProvinceLabel}>
            <Layer {...provinceLabelStyle}/>
          </Source>

          <Source id="nepalMap" type='geojson' data={ProvinceMap}>
            <Layer {...mapStyleLine} />
          </Source>

          <Source id="vfcData" type="geojson" data={RecyclerSaathiData}>
            <Layer {...dataStyle} 

            />
          </Source>

        </Map>
      </div>
    

 
    </>
  )
}

export default Portal