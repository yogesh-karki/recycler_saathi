import React, { useState, useEffect } from "react";

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl";

import { Source, Layer } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import ProvinceLabel from "./data/ProvinceLabel.geojson";
import ProvinceMap from "./data/ProvinceMap.json";

import recyclerSaathiData from "./data/mainData/AllData.geojson";




import {navData, dataStyle, provinceLabelStyle ,mapStyleLine} from './PortalStyle'

import { CloseCircleOutlined } from '@ant-design/icons';

import "./portal.scss";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Portal = () => {
    const [viewport, setViewport] = useState({
        latitude: 28.2134542,
        longitude: 83.9835325,
        minZoom: 6.3,
        maxZoom: 20,
    });





    const MAPBOX_TOKEN = "pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2txZXphNHNlMGNybDJ1cXVmeXFiZzB1eSJ9.A7dJUR4ppKJDKWZypF_0lA";

    
    const [isExpand , setIsExpand] = useState(-1)  
    const [filterData , setFilterData] = useState(null)  

    const navClick = (index, title) => {
      setIsExpand(index)
      setFilterData(title)
    }



    const dataStyleFilter = {
      id: "dataStyleFilter",
      type: "circle",
      filter: ['==', 'title', `${filterData}`],
      paint: {
          "circle-radius": 10,
          "circle-stroke-width": 2,
          "circle-color": [
              "match",
              ["get", "title"],
              "Organisational Network",
              "#EA5C2B",
              "PET recycling center",
              "#D9CE3F",
              "Regional Office",
              "#10b5c9",
              "Volunteer For Change",
              "#573391",
              "Collection Partners",
              "#EF6D6D ",
              "Waste Smart Schools",
              "#219F94",
              "Waste Smart Musuem",
              "red",
              /* other */ "#BD1E1E",
          ],
      },
  };

    return (
        <>
            <div className="portal">

                <div className="legend_click">
                    {
                      navData.map((val, index) => {
                        return (
                            <div className={`${isExpand === index ? 'expand' : ''} card `}  key={index} onClick={() => navClick(index,val.title) }>
                                <div className="num">
                                    <h3>{val.num}</h3>
                                </div>

                                <div className="desc">
                                  
                                    <h4>{val.title}</h4>
                                </div>
                                <span className="border" style={{backgroundColor: val.color}} ></span>
                            </div>
                        );
                    })}
                </div>

                <Map {...viewport} style={{ width: "100vw", height: "100%" }} mapboxAccessToken={MAPBOX_TOKEN} mapStyle="mapbox://styles/yogeshkarki/cl0gcwa4e000d15p3bh6inkcq" onMove={(evt) => setViewport(evt.viewport)}>
                    <Source id="provinceLabel" type="geojson" data={ProvinceLabel}>
                        <Layer {...provinceLabelStyle} />
                    </Source>

                    <Source id="nepalMap" type="geojson" data={ProvinceMap}>
                        <Layer {...mapStyleLine} />
                    </Source>

                    <Source id="allData" type="geojson" data={recyclerSaathiData}>
                      {
                        filterData ? <Layer id="layer1" {...dataStyleFilter} /> : <Layer id="layer2" {...dataStyle} />
                      }
                    </Source>

                 

          
                </Map>
            </div>
        </>
    );
};

export default Portal;
