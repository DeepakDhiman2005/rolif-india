import { Title } from "react-head";
import Banners from "./Banners";
import Clientele from "./Clientele";
import ClientTestimonials from "./ClientTestimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return <>
        <Title>Rolif India</Title>
        <main className="w-full">
            <Banners />
            <WhyChooseUs />
            <ClientTestimonials />
            <Clientele />
        </main>
    </>
}

export default Home;