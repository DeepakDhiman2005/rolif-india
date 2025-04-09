import { Title } from "react-head";
import Banners from "./Banners";
import Clientele from "./Clientele";
import ClientTestimonials from "./ClientTestimonials";

const Home = () => {
    return <>
        <Title>Home</Title>
        <main className="w-full">
            <Banners />
            <ClientTestimonials />
            <Clientele />
        </main>
    </>
}

export default Home;