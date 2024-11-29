import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <>
            <div id="footer" className="bg-[#266980] text-white pt-12 pb-4">
                <div className="flex flex-col justify-around gap-8 ml-20 md:ml-0 md:flex-row">
                    {/* -----------Social-------------- */}
                    <div>
                        <h1 className="my-4 font-serif text-2xl md:text-4xl">Socials</h1>
                        <div className="flex gap-4">
                            <FaFacebook className="transition-all ease-in-out hover:scale-125 hover:cursor-pointer" size={40} color="white" />
                            <FaInstagram className="transition-all ease-in-out hover:scale-125 hover:cursor-pointer" size={40} color="white" />
                            <FaWhatsapp className="transition-all ease-in-out hover:scale-125 hover:cursor-pointer" size={40} color="white" />
                        </div>
                    </div>
                    {/* -----------Services-------------- */}
                    <div>
                        <h1 className="my-4 font-serif text-2xl md:text-4xl">Services</h1>
                        <ul className="flex flex-col gap-4 ">
                            <Link>General</Link>
                            <Link>Cosmetic</Link>
                            <Link>Surgical</Link>
                        </ul>
                    </div>
                    {/* -----------Our Office-------------- */}
                    <div>
                        <h1 className="my-4 font-serif text-2xl md:text-4xl">Our Office</h1>
                        <ul className="flex flex-col gap-4">
                            <Link>Home</Link>
                            <Link>Warranty</Link>
                            <Link>About</Link>
                            <Link>New Patients</Link>
                            <Link>Contact</Link>
                            <motion.button
                                className="md:px-4 py-4 w-1/2 md:w-full tracking-wider text-black bg-[#E7CA71]"
                                whileHover={{ y: -5, opacity: 0.5, scale: 1.1 }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                            >
                                PAY ONLINE
                            </motion.button>
                        </ul>
                    </div>
                    {/* -------------Contact Us ---------------- */}
                    <div className="flex flex-col gap-1">
                        <h1 className="my-4 font-serif text-2xl md:text-4xl">Our Address</h1>
                        <p>9625 Bazaar Tower</p>
                        <p>Suite 404, West Plaza Village,</p>
                        <p>CO 783129</p>

                        <p className="my-4">(+91) 99763-72738</p>
                        <p>villagedental@admin.in</p>
                    </div>
                </div>

                {/* ----------The Copyright Lines---------- */}
                <div className="flex flex-col justify-around gap-4 pt-12 ml-20 md:ml-0 md:flex-row">
                    <p className="flex items-center gap-2">&#169; Village Dental 2024 | Privacy Policy | Accessibility Statement</p>
                    <p>Dental Website by: Bokhtier</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
