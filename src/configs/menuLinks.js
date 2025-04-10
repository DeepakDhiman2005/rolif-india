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
        name: "Tile & Sanitary Ware",
        subMenu: [
            {
                name: 'Tiles', route: '/tiles',
                subMenu: [
                    { name: 'Floor Tiles', route: '/tiles/floor-tiles' },
                    { name: 'Wall Tiles', route: '/tiles/wall-tiles' },
                    { name: 'Outdoor Tiles', route: '/tiles/outdoor-tiles' },
                    { name: 'Mosaic Tiles', route: '/tiles/mosaic-tiles' },
                    { name: 'Custom Tile Solutions', route: '/tiles/custom-tile-solutions' },
                ]
            },
            {
                name: 'Sanitary Ware', route: '/sanitary',
                subMenu: [
                    { name: 'Toilets & Bidets', route: '/toilets-and-bidets' },
                    { name: 'Showers & Bathtubs', route: '/showers-and-bathtubs' },
                    { name: 'Faucets & Mixers', route: '/faucets-and-mixers' },
                    { name: 'Bathroom Accessories', route: '/bathroom-accessories' },
                    { name: 'Bathroom Vanities & Storage', route: '/bathroom-vanities-and-storage' },
                ]
            }
            // {
            //     name: "Living Room", route: "/tiles/livingroom",
            //     subMenu: [
            //         { name: "Living Room Wall", route: "/tiles/livingroom/wall" },
            //         { name: "Living Room Floor", route: "/tiles/livingroom/floor" },
            //     ],
            // },
            // {
            //     name: "Bed Room", route: "/tiles/bedroom",
            //     subMenu: [
            //         { name: "Bed Room Wall", route: "/tiles/bedroom/wall" },
            //         { name: "Bed Room Floor", route: "/tiles/bedroom/floor" },
            //     ],
            // },
            // {
            //     name: "Bath Room", route: "/tiles/bathroom",
            //     subMenu: [
            //         { name: "Bath Room Wall", route: "/tiles/bathroom/wall" },
            //         { name: "Bath Room Floor", route: "/tiles/bathroom/floor" },
            //     ],
            // },
            // {
            //     name: "Kitchen", route: "/tiles/kitchen",
            //     subMenu: [
            //         { name: "Kitchen Wall", route: "/tiles/kitchen/wall" },
            //         { name: "Kitchen Floor", route: "/tiles/kitchen/floor" },
            //     ],
            // },
        ],
    },
    {
        name: "Electrics Show Room",
        subMenu: [
            { name: 'Wiring & Cables', route: '/electrics/wiring-and-cables' },
            { name: "Switches & Sockets", route: "/electrics/switch-socket" },
            { name: 'Lighting Fixtures', route: '/electrics/lighting-fixtures' },
            { name: 'Circuit Breakers & Fuses', route: '/electrics/circuit-breakers-and-fuses' },
            { name: 'Power Distribution Units', route: '/electrics/power-distribution-units' },
            { name: 'Generators & UPS Systems', route: '/electrics/generators-and-ups-systems' },
            { name: 'Electrical Tools & Accessories', route: '/electrics/electrical-tools-and-accessories' },
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