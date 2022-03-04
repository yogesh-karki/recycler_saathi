import React,{useState} from 'react'

import ReactMapGL, { Source, Layer } from 'react-map-gl';

import './portal.scss'
import 'mapbox-gl/dist/mapbox-gl.css';



const Portal = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  const MAPBOX_TOKEN = 'pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2wwOTdjYXZvMGFrZDNpbGczaHhuanZleiJ9.DoJN15qdpt8sMYKeR4Mvxw'

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': 'red'
    }
  };

  return (
    <>
  
      <div className="portal">
        <ReactMapGL
          {...viewport}
          style={{width: '100vw', height: '100vh'}}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
     
          onMove={evt => setViewport(evt.viewport)} 
        > 
          
          <Source id="my-data" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
          
          
        </ReactMapGL>
      </div>
    

 
    </>
  )
}

export default Portal