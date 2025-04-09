import { IoIosCall } from "react-icons/io";

const Footer = () => {
    return <>
        <footer className="w-full px-8 py-6 bg-[url('/images/footer-bg.jpg')] bg-conver flex flex-col justify-center items-center gap-y-6 bg-white">
            {/* layer 1 */}
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 justify-start items-start lg:grid-cols-4 gap-6">
                <div className="flex flex-col justify-start items-start">
                    <img src="/logo.svg" alt="image" className="w-36" />
                    <p className="my-3 font-semibold">123 Fifth Avenue, NY 10160 Lane no 17, New York NY688101</p>
                    <div className="flex justify-start items-center gap-x-2">
                        <IoIosCall size={16} />
                        <span>123-456-7890, 123-456-7891</span>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-[32px]">Quick Link</h2>
                </div>
            </section>
            <div className="h-[1px] w-full bg-black"></div>
            {/* layer 2 */}
            <section className="w-full font-medium flex justify-between items-center">
                <span>© 2025 Rolif India. All Rights Reserved.</span>
                <span>Designed & Developed by Jaikvik Technology India Pvt. Ltd.</span>
            </section>
        </footer>
    </>
}

export default Footer;