import { IoIosCall } from "react-icons/io";
import FooterSVG from "./FooterSVG";
import navLinks from "../../configs/navLinks";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import menuLinks from "../../configs/menuLinks";
import FooterLinksCard from './FooterLinksCard';
import FooterContact from "./FooterContact";

const Footer = () => {
    return <>
        <footer className="w-full px-8 py-6 pt-20 relative bg-[url('/images/footer-bg.jpg')] bg-cover flex flex-col justify-center items-center gap-y-6 bg-white">
            <div className="absolute w-full top-0 left-0">
                <FooterSVG />
            </div>
            {/* layer 1 */}
            <FooterContact />

            {/* layer 2 */}
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 justify-start items-start lg:grid-cols-[1.5fr_1fr_1.5fr_3fr] gap-6">
                <div className="flex flex-col justify-start items-start">
                    <img src="/logo.svg" alt="image" className="w-36" />
                    {/* <p className="my-3 font-semibold text-gray-800">123 Fifth Avenue, NY 10160 Lane no 17, New York NY688101</p>
                    <div className="flex justify-start items-center gap-x-2">
                        <IoIosCall size={16} />
                        <span>123-456-7890, 123-456-7891</span>
                    </div> */}
                    <p className="leading-tight my-2">The Company “ROLIF INDIA PVT. LTD., started business services in 2013 as Lighting Solutions. Later the company became EPC contracting company. </p>
                </div>

                <div className="flex justify-start flex-col items-start">
                    <h2 className="text-[18px] font-semibold text-gray-800">Quick Link</h2>
                    <div className="h-[2px] bg-gray-800 w-full"></div>
                    <div className="flex flex-col justify-start my-2 items-start">
                        {
                            navLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.route}
                                    className="cursor-pointer group  flex items-center gap-x-2 transition-all duration-200 hover:text-blue-700"
                                >
                                    <div className="relative flex items-center">
                                        {/* Arrow (FaPlay) initially invisible, becomes visible on hover and sits at same place as text start */}
                                        <FaPlay
                                            size={12}
                                            className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        />
                                        {/* Text moves right on hover */}
                                        <span className="transition-all duration-300 transform group-hover:translate-x-4">
                                            {item.name}
                                        </span>
                                    </div>
                                </Link>

                            ))
                        }
                    </div>
                </div>

                <div className="w-full">
                    <FooterLinksCard item={menuLinks[2]} />
                </div>

                <div className="w-full flex flex-col justify-start items-start">
                    <div className="grid grid-cols-[1.5fr_2fr] w-full gap-x-5 gap-y-4">
                        <FooterLinksCard item={menuLinks[0]} />
                        <div className="grid grid-cols-1 gap-y-2 w-full">
                            <FooterLinksCard item={menuLinks[1]} />
                            <FooterLinksCard item={menuLinks[3]} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-[1px] w-full bg-black"></div>
            {/* layer 3 */}
            <section className="w-full font-medium flex justify-between items-center">
                <span>© 2025 Rolif India. All Rights Reserved.</span>
                <span>Designed & Developed by <a href="https://www.jaikviktechnology.com/" className="text-blue-700 underline hover:text-blue-900 transition-all duration-300" target="_blank">Jaikvik Technology India Pvt. Ltd.</a></span>
            </section>
        </footer>
    </>
}

export default Footer;