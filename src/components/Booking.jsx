import React, { useContext } from "react";
import BgContact from "../assets/BgContact.jpg";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "framer-motion";

const Booking = () => {
    const { containerVariants, childVariants } = useContext(AnimationContext);

    return (
        <>
            <motion.div id="booking" className="h-[50vh] scroll-m-40" style={{ backgroundImage: `url(${BgContact})`, backgroundSize: "cover" }}>
                <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex flex-col items-center justify-around h-full py-10 text-white">
                    <motion.h1 variants={childVariants} className="font-serif text-3xl md:text-4xl lg:text-5xl">
                        Book your visit online.
                    </motion.h1>
                    <motion.p variants={childVariants} className="text-base text-center md:text-2xl">
                        View available appointments and enjoy dentistry done right. +FREE teeth whitening for life.
                    </motion.p>
                    <motion.button
                        variants={childVariants}
                        whileHover={{ y: -5, opacity: 0.9, scale: 1.1 }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        className="px-6 text-black tracking-widest py-4 bg-[#E7CA71]"
                    >
                        BOOK ONLINE
                    </motion.button>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Booking;
