import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Banners = () => {
    const images = [
        "https://cms.landmarkshops.in/cdn-cgi/image/w=1440,q=85,fit=cover/Home-Centre/Test-UI/HC-Uber-HP-Desktop-HeroBanner6-09Apr2025.jpg",
        "https://cms.landmarkshops.in/cdn-cgi/image/w=1440,q=85,fit=cover//Home-Centre/Test-UI/HC-Uber-HP-Desktop-HeroBanner2-31Mar2025.jpg",
    ];

    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="w-full"
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={src} alt={`banner-${idx}`} className="w-full h-auto object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banners;
