import { Title } from "react-head";
import Banners from "./Banners";
import Clientele from "./Clientele";
import ClientTestimonials from "./ClientTestimonials";
import WhyChooseUs from "./WhyChooseUs";
import FurnitureSlider from "../../components/FurnitureSlider";
import FurnitureGrid from "../../components/FurnitureGrid";
import FurnitureAbout from "../../components/FurnitureAbout";
import TilesAbout from "../../components/TilesAbout";
import ElectricAbout from "../../components/ElectricAbout";
import EpcAbout from "../../components/EpcAbout";

const Home = () => {
    const sliderImages = [
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
        "/images/banner-image-1.png",
      ];

      const sliderImages1 = [
       
        "/images/tiles/t2.jpg",
        "/images/tiles/t2.jpg",
        "/images/tiles/t2.jpg",
        "/images/tiles/t2.jpg",
        "/images/tiles/t2.jpg",
        "/images/tiles/t2.jpg",
        "/images/tiles/t2.jpg",
        "/images/tiles/t2.jpg",
      ];

      const sliderImages2 = [
       
        "/images/electronics/e2.jpg",
        "/images/electronics/e2.jpg",
        "/images/electronics/e2.jpg",
        "/images/electronics/e2.jpg",
        "/images/electronics/e2.jpg",
        "/images/electronics/e2.jpg",
        "/images/electronics/e2.jpg",
        "/images/electronics/e2.jpg",
       
      ];

  const products = [
        { id: 1, img: "/images/f2.jpg", name: "Stylish Floating Wall Shelves" },
        { id: 2, img: "/images/f2.jpg", name: "Premium King-Size Upholstered Bed" },
        { id: 3, img: "/images/f2.jpg", name: "Multi-Purpose Wardrobe" },
        { id: 4, img: "/images/f2.jpg", name: "Modern Minimalist Coffee Table" },
        { id: 5, img: "/images/f2.jpg", name: "Luxury Recliner Sofa" },
        { id: 6, img: "/images/f2.jpg", name: "Elegant Wooden Dining Set" },
      ];

      const products1 = [
        { id: 1, img: "/images/tiles/t1.webp", name: "Stylish Floating Wall Shelves" },
        { id: 2, img: "/images/tiles/t1.webp", name: "Premium King-Size Upholstered Bed" },
        { id: 3, img: "/images/tiles/t1.webp", name: "Multi-Purpose Wardrobe" },
        { id: 4, img: "/images/tiles/t1.webp", name: "Modern Minimalist Coffee Table" },
        { id: 5, img: "/images/tiles/t1.webp", name: "Luxury Recliner Sofa" },
        { id: 6, img: "/images/tiles/t1.webp", name: "Elegant Wooden Dining Set" },
      ];

      const products2 = [
        { id: 1, img: "/images/electronics/e1.jpg", name: "Stylish Floating Wall Shelves" },
        { id: 2, img: "/images/electronics/e1.jpg", name: "Premium King-Size Upholstered Bed" },
        { id: 3, img: "/images/electronics/e1.jpg", name: "Multi-Purpose Wardrobe" },
        { id: 4, img: "/images/electronics/e1.jpg", name: "Modern Minimalist Coffee Table" },
        { id: 5, img: "/images/electronics/e1.jpg", name: "Luxury Recliner Sofa" },
        { id: 6, img: "/images/electronics/e1.jpg", name: "Elegant Wooden Dining Set" },
      ];

    return <>
        <Title>Rolif India</Title>
        <main className="w-full">
            <Banners />
            <FurnitureAbout/>
            <FurnitureSlider sliderImages={sliderImages} />
            <FurnitureGrid products={products}/>

            <TilesAbout/>
            <FurnitureSlider sliderImages={sliderImages1} />
            <FurnitureGrid products={products1}/>

            <ElectricAbout/>
            <FurnitureSlider sliderImages={sliderImages2} />
            <FurnitureGrid products={products2}/>

            <EpcAbout/>
            <FurnitureSlider sliderImages={sliderImages} />
            <FurnitureGrid products={products}/>

         
        </main>
    </>
}

export default Home;