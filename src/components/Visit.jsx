import React, { useContext } from "react";
import visit1 from "../assets/visit1.jpg";
import visit2 from "../assets/visit2.jpg";
import visit3 from "../assets/visit3.jpg";
import visit4 from "../assets/visit4.jpg";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "framer-motion";

const Visit = () => {
    const { containerVariants, childVariants } = useContext(AnimationContext);
    return (
        <>
            <div id="visit" className="flex justify-center my-8 bg-yellow-50">
                <div className="flex flex-col items-center justify-center md:my-8">
                    <div className="flex flex-col gap-4 p-4 md:w-4/5 md:p-8 md:flex-row rounded-bl-3xl">
                        {/* -------images------------ */}
                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid flex-1 grid-cols-2 gap-4 overflow-hidden">
                            <motion.div variants={childVariants} className="flex items-end overflow-hidden h-80">
                                <img src={visit4} alt="" className="" />
                            </motion.div>
                            <motion.div variants={childVariants} className="flex items-end overflow-hidden h-80 rounded-tr-3xl">
                                <img src={visit2} alt="" className="rounded-tr-3xl" />
                            </motion.div>
                            <motion.div variants={childVariants} className="flex items-end overflow-hidden rounded-bl-3xl">
                                <img src={visit3} alt="" className="" />
                            </motion.div>
                            <motion.div variants={childVariants} className="flex items-end overflow-hidden">
                                <img src={visit1} alt="" className="" />
                            </motion.div>
                        </motion.div>
                        {/* -------The Adresses----------- */}
                        <div className="flex justify-center flex-1 md:p-8">
                            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="flex flex-col gap-4 md:w-3/4">
                                <motion.h1 variants={childVariants} className="font-serif text-4xl md:text-5xl">
                                    Visit Us
                                </motion.h1>
                                <motion.p variants={childVariants} className="text-xl">
                                    We’re conveniently located in the Denver Tech Center area. Find us on the 4th floor of the Triad Office Park building. Plenty of free parking available.
                                </motion.p>

                                <motion.p variants={childVariants} className="flex gap-4 text-xl">
                                    <FaMapMarkedAlt size={50} color="teal" />
                                    5670 Greenwood Plaza Blvd., Suite 404 Greenwood Village, CO 80111
                                </motion.p>
                                <motion.button
                                    whileHover={{ y: -5, opacity: 0.9, scale: 1.1 }}
                                    transition={{ ease: "easeOut", duration: 0.2 }}
                                    variants={childVariants}
                                    className="py-3 w-fit px-4 ml-12 bg-[#266980] text-white"
                                >
                                    Get Direction
                                </motion.button>

                                <motion.p variants={childVariants} className="flex gap-4 text-xl">
                                    <FaClock size={35} color="teal" />
                                    Monday–Thursday: 7AM–3PM
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>

                    {/* ------------Map --------------  */}
                    <div className="w-4/5 rounded-lg h-60">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.1393060856781!2d90.30474317785625!3d26.02981107124188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37583ffb656bea7d%3A0xf57cfb30f060df76!2sLakhipur%20PHC!5e0!3m2!1sen!2sin!4v1732605446731!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Visit;
