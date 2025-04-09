const menuLinks = [
    {
        name: "Furniture Show Room",
        subMenu: [
            { name: "Beds", route: "/furniture/beds" },
            { name: "Tables", route: "/furniture/tables" },
            { name: "Chairs", route: "/furniture/chairs" },
            { name: "Sofa", route: "/furniture/sofa" },
        ],
    },
    {
        name: "Tiles Show Room",
        subMenu: [
            {
                name: "Living Room", route: "/tiles/livingroom",
                subMenu: [
                    { name: "Living Room Wall", route: "/tiles/livingroom/wall" },
                    { name: "Living Room Floor", route: "/tiles/livingroom/floor" },
                ],
            },
            {
                name: "Bed Room", route: "/tiles/bedroom",
                subMenu: [
                    { name: "Bed Room Wall", route: "/tiles/bedroom/wall" },
                    { name: "Bed Room Floor", route: "/tiles/bedroom/floor" },
                ],
            },
            {
                name: "Bath Room", route: "/tiles/bathroom",
                subMenu: [
                    { name: "Bath Room Wall", route: "/tiles/bathroom/wall" },
                    { name: "Bath Room Floor", route: "/tiles/bathroom/floor" },
                ],
            },
            {
                name: "Kitchen", route: "/tiles/kitchen",
                subMenu: [
                    { name: "Kitchen Wall", route: "/tiles/kitchen/wall" },
                    { name: "Kitchen Floor", route: "/tiles/kitchen/floor" },
                ],
            },
        ],
    },
    {
        name: "Electrics Show Room",
        subMenu: [
            // { name: "Wiring & Cables", route: "/electrics/wire&cable" },
            // { name: "Lighting Installation", route: "/electrics/lightingsolution" },
            { name: "Switches & Sockets", route: "/electrics/switch_socket" },
        ],
    },
    {
        name: "Our Services",
        subMenu: [
            { name: "Interior & Fit-Out Works", route: "/service/interior-out-fit" },
            { name: "Electrical Services", route: "/service/electrical-services" },
        ]
    },
]

export default menuLinks;