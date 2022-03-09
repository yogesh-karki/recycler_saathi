import React, { useState, useEffect } from "react";

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl";

import { Source, Layer } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import ProvinceLabel from "./data/ProvinceLabel.geojson";
import ProvinceMap from "./data/ProvinceMap.json";

import RecyclerSaathiData from "./data/mainData/AllData.geojson";

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

    const [mapData, setMapData] = useState(RecyclerSaathiData);

    const MAPBOX_TOKEN = "pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2txZXphNHNlMGNybDJ1cXVmeXFiZzB1eSJ9.A7dJUR4ppKJDKWZypF_0lA";

    const provinceLabelStyle = {
        id: "provinceLabel",
        type: "symbol",
        layout: {
            "text-allow-overlap": false,
            "text-field": ["get", "description"],
            "text-variable-anchor": ["top", "bottom", "left", "right"],
            "text-radial-offset": 0.5,
            "text-justify": "auto",
            "text-size": 12,
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
        },
        paint: {
            "text-color": "#0a405a",
        },
    };

    const mapStyleLine = {
        id: "map_style",
        type: "line",
        layout: {},
        paint: {
            "line-color": "#0a405a",
            "line-width": 1.5,
            "line-dasharray": [2, 1],
        },
    };

    const [filterData, setFilterData] = useState();

    const navData = [
      
        {
            num: "10",
            title: "Waste Smart Schools",
            subtitle: "schools converted to",
            color: "#219F94"
        },
        {
            num: "17",
            title: "Organisational Network",
            subtitle: "working with us",
            color: "#630606"
        },
        {
            num: "06",
            title: "Volunteer For Change",
            subtitle: "volunteer available",
            color: '#573391'
        },
        {
            num: "27",
            title: "Collection Partners",
            subtitle: "working with us",
            color: '#EF6D6D'
        },
        {
            num: "01",
            title: "Regional Office",
            subtitle: "situated at",
            color: '#10b5c9'
        },
        {
            num: "01",
            title: "Waste Smart Musuem",
            subtitle: "Waste Smart Musuem",
            color: "red"
        },

        {
            num: "02",
            title: "PET recycling center",
            subtitle: "PET recycling center",
            color: "#D9CE3F"
        },
    ];

    const dataStyle = {
        id: "dataStyle",
        type: "circle",
        // filter: ['==', 'title', `Organisational Network`],
        paint: {
            "circle-radius": 10,
            "circle-stroke-width": 2,
            "circle-color": [
                "match",
                ["get", "title"],
                "Organisational Network",
                "#630606",
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

  
    const [isExpand , setIsExpand] = useState(-1)  

    let cardActive = () => {
      console.log("hello")
    }

    return (
        <>
            <div className="portal">
             

                <div className="legend_click">
                    {
                      navData.map((val, index) => {
                        return (
                            <div className={`${isExpand === index ? 'expand' : ''} card `}  key={index} onClick={() => setIsExpand(index)}>
                                <div className="num">
                                    <h3>{val.num}</h3>
                                </div>
                                <div className="desc">
                                    {/* <h5>{val.subtitle}</h5> */}
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

                    <Source id="vfcData" type="geojson" data={mapData}>
                        <Layer {...dataStyle} />
                    </Source>
                </Map>
            </div>
        </>
    );
};

export default Portal;
