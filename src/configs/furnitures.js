const furnitures = [
    {
        category: 'beds',
        data: [
            {
                title: 'Cleo Bed Side Table',
                category: 'furniture',
                subcategory: 'beds',
                id: '1',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/Untitled-design-450x450.png.webp',
            },
            {
                title: 'Cleo King Size Bed With Hydraulic Storage',
                category: 'furniture',
                subcategory: 'beds',
                id: '2',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5771-ambi-copy-450x450.jpg.webp'
            },
            {
                title: 'Della Bed Side Table',
                category: 'furniture',
                subcategory: 'beds',
                id: '3',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5936-ambi-copy-450x450.jpg.webp'
            },
            {
                title: 'Mellow King Size Bed With Hydraulic Storage',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5844-ambi-copy-450x450.jpg.webp',
                category: 'furniture',
                subcategory: 'beds',
                id: '4'
            },
            {
                title: 'Noah King Size Bed With Hydraulic Storage',
                category: 'furniture',
                subcategory: 'beds',
                id: '5',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5835-ambi-copy-1-450x450.jpg.webp',
            },
            {
                title: 'Smart King Size Bed Without Storage',
                category: 'furniture',
                subcategory: 'beds',
                id: '6',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Black-bed-450x450.jpg.webp'
            },
            {
                title: 'Sophia Bed Side Table',
                category: 'furniture',
                subcategory: 'beds',
                id: '7',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/Untitled-design-1-450x450.png.webp'
            },
            {
                title: 'Sophia King Size Bed With Hydraulic Storage',
                category: 'furniture',
                subcategory: 'beds',
                id: '8',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5860-ambi-copy-450x450.jpg.webp'
            },
            {
                title: 'Vanice Bed Side Table',
                category: 'furniture',
                subcategory: 'beds',
                id: '9',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5812-ambi-copy-450x450.jpg.webp'
            },
            {
                title: 'Vanice Dressing Table',
                category: 'furniture',
                subcategory: 'beds',
                id: '10',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5757-ambi-copy-450x450.jpg.webp'
            },
            {
                title: 'Vanice King Size Bed With Hydraulic Storage',
                category: 'furniture',
                subcategory: 'beds',
                id: '11',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5812-ambi-copy-450x450.jpg.webp'
            }
        ]
    },
    {
        category: 'bed-tables',
        data: [
            {
                title: 'Cleo Bed Side Table',
                category: 'furniture',
                subcategory: 'bed-tables',
                id: '1',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/Untitled-design-450x450.png.webp'
            },
            {
                title: 'Della Bed Side Table',
                category: 'furniture',
                subcategory: 'bed-tables',
                image: 'http://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5936-ambi-copy-450x450.jpg.webp',
                id: '2'
            },
            {
                title: 'Sophia Bed Side Table',
                category: 'furniture',
                subcategory: 'bed-tables',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/Untitled-design-1-450x450.png.webp',
                id: '3'
            }
        ]
    },
    {
        category: 'dressing-tables',
        data: [
            {
                title: 'Vanice Dressing Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5757-ambi-copy-450x450.jpg.webp',
                id: '1',
                category: 'furniture',
                subcategory: 'dressing-tables'
            }
        ]
    },
    {
        category: 'chairs',
        data: [
            {
                title: 'Adorn Round Puffy',
                image: 'https://homecityonline.com/wp-content/uploads/2024/09/ADORN-ROUND-PUFFY-450x450.webp',
                id: '1',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Alpha Lobby Chair',
                image: 'https://homecityonline.com/wp-content/uploads/2024/09/IMG_5538-Ambi-450x450.webp',
                id: '2',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Aston Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5572-ambi-6-seater-450x450.jpg.webp',
                id: '3',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Casper Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5567-ambi-450x450.jpg.webp',
                id: '4',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Della Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5692-ambi-copy-450x450.jpg.webp',
                id: '5',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Eden Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5644-ambi-450x450.jpg.webp',
                id: '6',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Hamilton Wing Chair with Stool',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Hamilton-Wing-Chair-With-Stool-450x450.jpg.webp',
                id: '7',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Khair Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5712-ambi-copy-450x450.jpg.webp',
                id: '8',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Mario Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5069-ambi-450x450.jpg.webp',
                id: '9',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Novello Folding Chair',
                image: 'https://homecityonline.com/wp-content/uploads/2024/09/IMG_5179-ambi-copy-450x450.webp',
                id: '10',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Oliver Accent Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Oliver-Accent-Chair-450x450.jpg.webp',
                id: '11',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Orion Accent Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Orion-Accent-Chair-450x450.jpg.webp',
                id: '12',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Ormond Chair',
                image: 'https://homecityonline.com/wp-content/uploads/2024/09/Ormond-Chair-450x450.webp',
                id: '13',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Silva Dining Bench',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5630-ambi-450x450.jpg.webp',
                id: '13',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Silva Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5630-ambi-450x450.jpg.webp',
                id: '14',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Spencer Lobby Chair',
                image: 'https://homecityonline.com/wp-content/uploads/2024/09/IMG_5515-ambi-450x450.webp',
                id: '15',
                category: 'furniture',
                subcategory: 'chairs',
            },
            {
                title: 'Unico Dining Chair',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/Untitled-design-13-450x450.png.webp',
                id: '16',
                category: 'furniture',
                subcategory: 'chairs',
            },
        ]
    },
    {
        category: 'sofas',
        data: [
            {
                title: 'Attic Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/3-seater-ambi-copy-20-450x450.jpg.webp',
                id: '1',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Blackberry Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/LIFESTYLE-4-450x450.jpg.webp',
                id: '2',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Enzo Sofa',
                image: 'https://homecityonline.com/wp-content/uploads/2024/09/Green-lifestyle-copy-450x450.webp',
                id: '3',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Flair Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/flair_3seater-450x450.jpeg.webp',
                id: '4',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Fusion Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/fusion_3seaterjpeg-450x450.jpeg.webp',
                id: '5',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Gloria Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/3-seater-ambi-copy1-450x450.jpg.webp',
                id: '6',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Mirly Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Untitled-design-24-450x450.png.webp',
                id: '7',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Mobil Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/MG_1983-3-450x450.jpg.webp',
                id: '8',
                category: 'furniture',
                subcategory: 'sofas'
            },
            {
                title: 'Urban Sofa',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/urban_3seater-450x450.jpeg.webp',
                id: '9',
                category: 'furniture',
                subcategory: 'sofas'
            },
        ]
    },
    {
        category: 'storage',
        data: [
            {
                title: 'Aula 5 Rack Book Shelf',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Aulabookshelf-450x450.jpg.webp',
                id: '1',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Bino 2 Dr Shoe Cabinet',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/IMG_5207-ambi-450x450.jpg.webp',
                id: '2',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Bino 3 Dr Shoe Cabinet',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/IMG_5196-ambi-450x450.jpg.webp',
                id: '3',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Calvin Shoe Cabinet',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5880-ambi-copy-450x450.jpg.webp',
                id: '4',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Cleo Side Board',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5737-ambi-copy-450x450.jpg.webp',
                id: '5',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Cleo Side Board With Mirror Frame',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5736-ambi-copy-450x450.jpg.webp',
                id: '6',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Della Side Board',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5938-ambi-copy-1-450x450.jpg.webp',
                id: '7',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Della Side Board With Mirror Frame',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5938-ambi-copy-1-450x450.jpg.webp',
                id: '8',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Eda Bar Trolly',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/IMG-5069-ambi-copy-450x450.jpg.webp',
                id: '9',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Hanna Bar Unit',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/IMG_5071-ambi-450x450.jpg.webp',
                id: '10',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Hooper Book Shelf',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/HOOPER-BOOK-SHELF-450x450.jpg.webp',
                id: '11',
                category: 'furniture',
                subcategory: 'storage',
            },
            {
                title: 'Indus Bar Stool',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/IMG_5054-ambi-2-450x450.jpg.webp',
                id: '12',
                category: 'furniture',
                subcategory: 'storage',
            },
        ]
    },
    {
        category: 'tables',
        data: [
            {
                title: 'Adonis Coffee Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5917-ambi-copy-450x450.jpg.webp',
                id: '1',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Alpha Lobby Table',
                image: 'https://homecityonline.com/wp-content/uploads/2024/09/IMG_5538-Ambi-450x450.webp',
                id: '2',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Aston Dining Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5572-ambi-6-seater-450x450.jpg.webp',
                id: '3',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Bino Plus Coffee Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Bino-Plus-Coffee-Table-450x450.jpg.webp',
                id: '4',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Casper Dining Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5567-ambi-450x450.jpg.webp',
                id: '5',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Della 6 Seater Dining Bench',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5692-ambi-copy-450x450.jpg.webp',
                id: '6',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Della 6 Seater Dining Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5692-ambi-copy-450x450.jpg.webp',
                id: '7',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Holla Coffee Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Holla-Coffee-Table-1-450x450.jpg.webp',
                id: '8',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Mario Dining Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5069-ambi-450x450.jpg.webp',
                id: '9',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Marl Coffee Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/06/Marl-Coffee-Table-450x450.jpg.webp',
                id: '10',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Mellow Bed Side Table',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/Untitled-design-10-450x450.png.webp',
                id: '11',
                category: 'furniture',
                subcategory: 'tables',
            },
            {
                title: 'Unico Dining Bench',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/09/Untitled-design-11-450x450.png.webp',
                id: '12',
                category: 'furniture',
                subcategory: 'tables',
            },
        ]
    },
    {
        category: 'drawers',
        data: [
            {
                title: 'Marcos Chest of Drawer',
                image: 'https://homecityonline.com/wp-content/smush-webp/2023/05/1-7-1-450x450.jpg.webp',
                id: '1',
                category: 'furniture',
                subcategory: 'drawers',
            }
        ]
    }
]

export default furnitures;