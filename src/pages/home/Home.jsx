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
import Heading from "../../components/heading/Heading";

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
    // "/images/tiles/t2.jpg",
    "https://www.spectoceramics.com/wp-content/uploads/sanitaryware-3.jpg",
    "https://i.pinimg.com/736x/83/57/b4/8357b4c18a3fd00ceb94c506bc626fa7.jpg",
    "https://www.lycosceramic.com/wp-content/uploads/2021/08/Stunning-Sanitary-ware-to-update-your-Bathroom.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/12/471797020/DX/NK/TI/6923942/ceramic-tiles-and-sanitary-wares.jpg",
    "https://mehrasons.wordpress.com/wp-content/uploads/2015/09/bathroom-tiles-bangalore.jpg",
    "https://www.cera-india.com/sites/default/files/2024-12/Main%20Category%20Mobile%20Banner%20Sanitaryware_1.jpg",
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
      <Heading>Furnitures</Heading>
      <FurnitureAbout image="/images/furniture/2.gif" />
      <FurnitureSlider sliderImages={sliderImages} />
      <FurnitureGrid products={products} />

      <Heading>Tiles & Sanitary Ware</Heading>
      <TilesAbout image="https://assets.zyrosite.com/mePvqjMrPwTro60x/leading-immigration-4-YZ92gNze4JtxbXnl.gif" />
      <FurnitureSlider sliderImages={sliderImages1} />
      <FurnitureGrid products={products1} />

      <Heading>Electric Services</Heading>
      <ElectricAbout />
      <FurnitureSlider sliderImages={sliderImages2} />
      <FurnitureGrid products={products2} />

      <Heading>EPC Projects</Heading>
      <EpcAbout />
      <FurnitureSlider sliderImages={sliderImages} />
      <FurnitureGrid products={products} />


    </main>
  </>
}

export default Home;