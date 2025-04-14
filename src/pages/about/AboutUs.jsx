import { Title } from "react-head";
import Clientele from "../home/Clientele";
import ClientTestimonials from "../home/ClientTestimonials";
import WhyChooseUs from "../home/WhyChooseUs";

const AboutUs = () => {
    return <>
        <main>
            <Title>About Us</Title>
           

            <WhyChooseUs />
            <ClientTestimonials />
            <Clientele />
        </main>
    </>
}

export default AboutUs;