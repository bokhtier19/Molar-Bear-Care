import React, { useContext } from "react";
import blue from "../assets/blue.jpg";
import welcome from "../assets/welcome.jpg";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

const Welcome = () => {
    const { childVariants, containerVariants } = useContext(AnimationContext);

    return (
        <>
            <div id="about" className="flex justify-center" style={{ backgroundImage: `url(${blue})`, backgroundSize: "cover" }}>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true }}
                    className="flex items-center flex-col md:flex-row justify-center md:h-[90vh] m-4 md:m-20 text-white border rounded-tr-3xl rounded-bl-3xl"
                >
                    <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex flex-col justify-center flex-1 h-full gap-8 p-4 md:p-20">
                        <motion.h1 variants={childVariants} className="font-serif text-2xl font-bold md:text-5xl">
                            Dentistry Done Right
                        </motion.h1>
                        <motion.p variants={childVariants} className="text-base md:text-xl">
                            Adults and kids, we welcome patients from 3-year-olds to seniors! Our team is passionate about building lifetime relationships through positive experiences, featuring:
                        </motion.p>

                        <motion.div variants={childVariants} className="flex flex-col gap-2 text-lg">
                            <p className="flex items-center gap-2">
                                <FaCheck className="" color="lime" /> Transparent Pricing
                            </p>
                            <p className="flex items-center gap-2">
                                <FaCheck className="" color="lime" /> Unparalleded Warranty
                            </p>
                            <p className="flex items-center gap-2">
                                <FaCheck className="" color="lime" /> FREE Whitening (for Life!)
                            </p>
                        </motion.div>
                        <motion.p variants={childVariants} className="pl-3 text-xl italic border-l-4 border-l-lime-400">
                            "Our World is our worth. We promise to do it right, timely and for a fair price."
                        </motion.p>
                    </motion.div>
                    <motion.div variants={childVariants} className="flex-1 p-8 overflow-hidden rounded-sm">
                        <img src={welcome} alt="" className="rounded-md" />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Welcome;
