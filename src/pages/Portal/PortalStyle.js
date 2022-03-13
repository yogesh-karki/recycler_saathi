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
        color: "#EA5C2B"
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
    paint: {
        "circle-radius": 8,
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
        // "line-dasharray": [2, 1],
    },
};

export {navData, dataStyle, provinceLabelStyle ,mapStyleLine}