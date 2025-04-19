const menuLinks = [
    {
        name: "Furniture Show Room",
        route: '/furniture',
        subMenu: [
            // { name: "Beds", route: "/furniture/beds" },
            // { name: "Tables", route: "/furniture/tables" },
            // { name: "Chairs", route: "/furniture/chairs" },
            // { name: "Sofa", route: "/furniture/sofa" },
            // { name: "Drawers", route: "/furniture/drawers" },
            {
                name: 'Bed Room', route: '/furniture',
                subMenu: [
                    { name: "Bed Side Tables", route: "/furniture/bed-tables" },
                    { name: "Beds", route: "/furniture/beds" },
                    { name: "Dressing Tables", route: "/furniture/dressing-tables" },
                ]
            },
            {
                name: 'Living Room', route: '/furniture',
                subMenu: [
                    { name: "Chairs", route: "/furniture/chairs" },
                    { name: "Sofas", route: "/furniture/sofas" },
                    { name: "Storage", route: "/furniture/storage" },
                    { name: "Tables", route: "/furniture/tables" },
                ]
            },
        ],
    },
    {
        name: "Tile & Sanitary Ware",
        route: '/tiles-and-sanitary-ware',
        subMenu: [
            {
                name: 'Tiles', route: '/tiles-and-sanitary-ware/tiles',
                subMenu: [
                    // { name: 'Floor Tiles', route: '/tiles-and-sanitary-ware/floor-tiles' },
                    // { name: 'Wall Tiles', route: '/tiles-and-sanitary-ware/wall-tiles' },
                    // { name: 'Outdoor Tiles', route: '/tiles-and-sanitary-ware/outdoor-tiles' },
                    // { name: 'Mosaic Tiles', route: '/tiles-and-sanitary-ware/mosaic-tiles' },
                    // { name: 'Custom Tile Solutions', route: '/tiles-and-sanitary-ware/custom-tile-solutions' },
                    {
                        name: 'Living Room',
                        route: '/tiles-and-sanitary-ware/tiles/living-room',
                        subMenu: [
                            { name: 'Living Room Wall', route: '/tiles-and-sanitary-ware/tiles/living-room/wall' },
                            { name: 'Living Room Floor', route: '/tiles-and-sanitary-ware/tiles/living-room/floor' },
                        ]
                    },
                    {
                        name: 'Bed Room',
                        route: '/tiles-and-sanitary-ware/tiles/bed-room',
                        subMenu: [
                            { name: 'Bed Room Wall', route: '/tiles-and-sanitary-ware/tiles/bed-room/wall' },
                            { name: 'Bed Room Floor', route: '/tiles-and-sanitary-ware/tiles/bed-room/floor' },
                        ]
                    },
                    {
                        name: 'Kitchen',
                        route: '/tiles-and-sanitary-ware/tiles/kitchen',
                        subMenu: [
                            { name: 'Kitchen Wall', route: '/tiles-and-sanitary-ware/tiles/kitchen/wall' },
                            { name: 'Kitchen Floor', route: '/tiles-and-sanitary-ware/tiles/kitchen/floor' },
                            { name: 'Kitchen Counter Top', route: '/tiles-and-sanitary-ware/tiles/kitchen/counter-top' },
                        ]
                    },
                    {
                        name: 'Bath Room',
                        route: '/tiles-and-sanitary-ware/tiles/bath-room',
                        subMenu: [
                            { name: 'Bath Room Wall', route: '/tiles-and-sanitary-ware/tiles/bath-room/wall' },
                            { name: 'Bath Room Floor', route: '/tiles-and-sanitary-ware/tiles/bath-room/floor' },
                        ]
                    },
                    {
                        name: 'Stairs',
                        route: '/tiles-and-sanitary-ware/tiles/stairs',
                    },
                    {
                        name: 'Out Door & Terrace Tiles',
                        route: '/tiles-and-sanitary-ware/tiles/outdoor',
                        subMenu: [
                            { name: 'Out Door Wall', route: '/tiles-and-sanitary-ware/tiles/out-door/wall' },
                            { name: 'Our Door Floor', route: '/tiles-and-sanitary-ware/tiles/out-door/floor' },
                        ]
                    },
                ]
            },
            {
                name: 'Sanitary Ware', route: '/tiles-and-sanitary-ware/sanitary-ware',
                subMenu: [
                    { name: 'Toilets', route: '/tiles-and-sanitary-ware/sanitary-ware/toilets' },
                    { name: 'Basins', route: '/tiles-and-sanitary-ware/sanitary-ware/basins' },
                    { name: 'Vanity Cabinets', route: '/tiles-and-sanitary-ware/sanitary-ware/vanity-cabinets' },
                    { name: 'Cisterns', route: '/tiles-and-sanitary-ware/sanitary-ware/cisterns' },
                    { name: 'Urinals', route: '/tiles-and-sanitary-ware/sanitary-ware/urinals' },
                    { name: 'Sanitaryware Accessories', route: '/tiles-and-sanitary-ware/sanitary-ware/sanitaryware-accessories' },
                ]
            }
        ],
    },
    {
        name: "Electrics Show Room",
        route: '/electrics',
        subMenu: [
            { name: 'Lighting', route: '/electrics/lighting' },
            { name: 'Switches & Accessories', route: '/electrics/switches-and-accessories' },
            { name: 'Home Appliances', route: '/electrics/home-appliances' },
            { name: 'Home Electricals', route: '/electrics/home-electricals' },
            { name: 'Switch Gears', route: '/electrics/Switchgears' },
            { name: 'Smart Home', route: '/electrics/smart-home' },
        ],
    },
    {
        name: "Our Services",
        route: '/services',
        subMenu: [
            { name: "Interior & Fit-Out Works", route: "/services/interior-out-fit" },
            { name: "Electrical Services", route: "/services/electrical-services" },
        ]
    },
]

export default menuLinks;