import React,{useState, useMemo} from 'react'

import  Map, {Source, Layer, Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import ProvinceLabel from './data/ProvinceLabel.geojson'
import ProvinceMap from './data/ProvinceMap.json'
import data from './data/mapData'


import './portal.scss'


const Portal = () => {





  const pins = useMemo(
    () =>
    data.map((data, index) => {
     
    
      return(
        <Marker
          key={`marker-${index}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="bottom"
        >
        
          <img src={data.img} className="pinImage" alt=""  onClick={() => console.log(data.description)}/>

        </Marker>
      )
    }),
    []
  );



  const [viewport, setViewport] = useState({
    latitude: 28.2434542,
    longitude: 83.9835325,
    minZoom: 6.5,
    maxZoom: 20,
  });

  const MAPBOX_TOKEN = 'pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2txZXphNHNlMGNybDJ1cXVmeXFiZzB1eSJ9.A7dJUR4ppKJDKWZypF_0lA'



  const provinceLabelStyle = {
    id: "provinceLabel",
    type: 'symbol',
    layout: {
      "text-allow-overlap": true,
      'text-field': ['get', 'description'],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'auto',
      "text-size": 14,
    }

  }

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 8,
      'circle-color': '#10b5c9',
      'circle-opacity': 0.8,
      'circle-stroke-color': "#ffffff",
      'circle-stroke-width': 2

    }
  };



  const mapStyleLine = {
    id: 'map_style',
    type: 'line',
    layout: {
    },
    paint: {
        'line-color': "#0a405a",
        'line-width': 1.5
    },
    
  }


  return (
    <>

      <div className="portal">
        This Portals

        <Map
          {...viewport}
          style={{width: '100vw', height: '100vh'}}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/yogeshkarki/cl0gcwa4e000d15p3bh6inkcq"
     
        > 

          <Source id="provinceLabel" type="geojson" data={ProvinceLabel}>
            <Layer {...provinceLabelStyle}/>
          </Source>

          <Source id="nepalMap" type='geojson' data={ProvinceMap}>
            <Layer {...mapStyleLine} />
          </Source>
          
          {pins}
          
        </Map>
      </div>
    

 
    </>
  )
}

export default Portal