import React, { useContext } from "react";
import VideoPlayer from "./videoplayer";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

const Hero = () => {
    const { containerVariants, childVariants, buttonVariants } = useContext(AnimationContext);

    return (
        <div id="hero" className="relative w-full h-screen overflow-hidden">
            {/* Video player as background */}
            <VideoPlayer />

            {/* Text container above the video */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="absolute top-0 flex flex-col items-start justify-center w-full h-full gap-4 p-4 text-[#266980] md:left-20"
            >
                <motion.h2 variants={childVariants} className="mb-4 text-lg font-semibold md:text-2xl">
                    Trusted Denver Tech Center Dentists
                </motion.h2>
                <motion.h1 variants={childVariants} className="text-3xl font-bold leading-10 uppercase md:mb-6 md:text-5xl">
                    Exceptional Care <p>for All Ages </p>
                </motion.h1>
                <motion.div variants={childVariants} whileHover={{ y: -5, opacity: 0.5, scale: 1.1 }} transition={{ ease: "easeOut", duration: 0.2 }}>
                    <motion.button className="px-6 py-3 bg-[#E7CA71] text-black mb-4 hover:bg-[#e7ca71b5]">BOOK ONLINE</motion.button>
                </motion.div>

                <motion.p variants={childVariants} className="text-lg">
                    CALL (+91) 99549-98545
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Hero;
