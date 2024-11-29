import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import whitening from "../assets/whitening.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const Whitening = () => {
    const divref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: divref,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "25%"]);

    return (
        <>
            <motion.div className="h-[120vh]">
                <motion.div ref={divref} className="relative flex items-end h-[100%] px-8 py-8" style={{ backgroundImage: `url(${whitening})`, backgroundSize: "cover" }}>
                    <motion.div style={{ top: y }} className="text-[#266980] h-2/3 bg-[#ffffffb9] flex items-center absolute md:w-1/2 md:top-[50%] md:right-20 rounded-tl-3xl rounded-br-3xl">
                        <div className="flex flex-col gap-4 px-8 py-8 md:px-20">
                            <p className="text-xl">FREE WHITENING</p>
                            <h1 className="text-4xl md:text-5xl">Whitening for Life</h1>
                            <div className="flex flex-col gap-2 md:text-lg">
                                <p className="flex items-center gap-2">
                                    <FaCheck className="" color="teal" /> Visit Village Dental for a new patient cleaning & exam
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaCheck className="" color="teal" /> Take home a complimentary custom whitening kit
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaCheck className="" color="teal" /> Book a cleaning every 6 months and we'll refill your whitening gel
                                </p>
                            </div>
                            <motion.button whileHover={{ y: -5, opacity: 0.9, scale: 1.1 }} transition={{ ease: "easeOut", duration: 0.2 }} className="px-8 py-3 my-4 w-fit bg-[#E7CA71]">
                                BOOK ONLINE
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Whitening;
