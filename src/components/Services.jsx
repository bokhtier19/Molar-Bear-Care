import React, { useContext } from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "framer-motion";

const Services = () => {
    const { containerVariants, childVariants } = useContext(AnimationContext);

    return (
        <>
            <div id="services" className="flex justify-center my-20">
                <div className="flex flex-col items-center w-4/5 gap-4 ">
                    <h1 className="my-8 font-serif text-4xl text-balance md:text-6xl">
                        Comprehensive care, <span className="">one convenient locaiton</span>
                    </h1>
                    <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex flex-col gap-8 lg:w-[90%] md:flex-row">
                        <motion.div
                            variants={childVariants}
                            whileHover={{ y: -10, scale: 0.9 }}
                            transition={{ ease: "easeInOut" }}
                            className="flex flex-col gap-2 items-start flex-1 p-8 border border-[#266980] rounded-t-3xl text-start"
                        >
                            <div className="overflow-hidden w-[100%] h-96 rounded-t-3xl">
                                <img src={service1} alt="" className="" />
                            </div>
                            <h1 className="font-serif text-2xl md:text-4xl">General</h1>
                            <p className="text-pretty">Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning</p>
                            <motion.button
                                whileHover={{ y: -5, opacity: 0.9, scale: 1.1 }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                                className="px-6 py-4 my-4 border-2 border-yellow-200 hover:bg-[#E7CA71]"
                            >
                                MORE ABOUT GENERAL
                            </motion.button>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10, scale: 0.9 }}
                            transition={{ ease: "easeInOut" }}
                            variants={childVariants}
                            className="flex flex-col gap-2 items-start flex-1 p-8 border border-[#266980] rounded-t-3xl text-start"
                        >
                            <div className="overflow-hidden w-[100%] h-96 rounded-t-3xl">
                                <img src={service2} alt="" className="" />
                            </div>
                            <h1 className="font-serif text-2xl md:text-4xl">Cosmetic</h1>
                            <p className="text-pretty">Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.</p>
                            <motion.button
                                whileHover={{ y: -5, opacity: 0.9, scale: 1.1 }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                                className="px-6 py-4 my-4 border-2 border-yellow-200 hover:bg-[#E7CA71] "
                            >
                                MORE ABOUT COSMETIC
                            </motion.button>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10, scale: 0.9 }}
                            transition={{ ease: "easeInOut" }}
                            variants={childVariants}
                            className="flex flex-col gap-2 items-start flex-1 p-8 border border-[#266980] rounded-t-3xl text-start"
                        >
                            <div className="overflow-hidden w-[100%] h-96 rounded-t-3xl">
                                <img src={service3} alt="" className="" />
                            </div>
                            <h1 className="font-serif text-2xl md:text-4xl">Surgical</h1>
                            <p className="text-pretty">We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.</p>
                            <motion.button
                                whileHover={{ y: -5, opacity: 0.9, scale: 1.1 }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                                className="px-6 py-4 my-4 border-2 border-yellow-200 hover:bg-[#E7CA71]"
                            >
                                MORE ABOUT SURGICAL
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Services;
