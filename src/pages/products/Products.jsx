import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Products = () => {
    const { pathname } = useLocation();
    const category = useMemo(() => (pathname.split("/")?.[2] || null), [pathname]);

    const categories = [
        {
            name: 'Sofas',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_1-25Mar20251.jpg'
        },
        {
            name: 'Recliners',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_2-25Mar2025.jpg'
        },
        {
            name: 'Occasional Chairs',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_3-25Mar2025.jpg'
        },
        {
            name: 'Benches & Stools',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_4-25Mar2025.jpg'
        },
        {
            name: 'Bean Bags & Pouffes',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_5-25Mar2025.jpg'
        },
        {
            name: 'Tables',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_6-25Mar2025.jpg'
        },
        {
            name: 'Study & Work',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_10-25Mar2025.jpg',
        },
        {
            name: 'Book Cases & Cabinet',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_11-25Mar2025.jpg'
        },
        {
            name: 'Outdoor Furniture',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_12-25Mar2025.jpg'
        },
        {
            name: 'Customised Furniture',
            image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_15-25Mar2025.jpg'
        }
    ]

    return <>
        <main className="w-full px-8 py-4">
            <h2 className="font-semibold text-product-heading-size">Living Room</h2>
            <p className="text-main-color">Inspired choices for all your Livingroom needs. For any occasion, for every occasion.</p>

            <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=85,fit=cover/Home-Centre/Test-UI/DP1-Living-Desktop-02Apr2025-1B.jpg" alt="image" className="w-full my-4" />

            <div className="flex flex-col justify-center gap-y-4 items-center w-full">
                <h2 className="text-[25px] font-bold">Shop By Categories</h2>
                <div className="grid grid-cols-5 gap-6">
                    {
                        categories.map((item, index) => (
                            <CategoryCard
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    </>
}

export default Products;