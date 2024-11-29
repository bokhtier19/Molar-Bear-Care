import React, { useContext } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AnimationContext } from "../context/AnimationContext";
import corner from "../assets/corner.svg";
import { motion } from "framer-motion";
import { TiPin } from "react-icons/ti";

const Review = () => {
    const { containerVariants, childVariants, noteVariants } = useContext(AnimationContext);

    return (
        <>
            <div id="review" className="flex justify-center my-4">
                <div className="flex flex-col gap-6 p-4 md:w-11/12 md:flex-row md:p-20">
                    {/* ----------kind words----------- */}
                    <div className="flex flex-col gap-6 md:w-2/5">
                        <FaQuoteRight size={40} />
                        <h1 className="font-serif text-4xl md:text-5xl">
                            Kind words from <p> our patients</p>{" "}
                        </h1>
                        <div className="flex gap-2">
                            <FaStar color={"#E7CA71"} />
                            <FaStar color={"#E7CA71"} />
                            <FaStar color={"#E7CA71"} />
                            <FaStar color={"#E7CA71"} />
                            <FaStar color={"#E7CA71"} />
                        </div>
                        <p className="text-base underline">1,200+ 5-star reviews!</p>
                    </div>

                    {/* ----------Notes Review--------- */}

                    <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="grid grid-cols-1 gap-8 mx-4 md:w-3/5 xl:grid-cols-2">
                        <motion.div
                            whileHover={{ y: -10, scale: 1.1, zIndex: 40, rotateZ: 0 }}
                            transition={{ ease: "easeInOut" }}
                            variants={noteVariants}
                            className="relative flex flex-col items-center justify-around p-4 rotate-6 md:p-8 hover:cursor-pointer bg-slate-200 rounded-tr-3xl rounded-bl-3xl"
                        >
                            <TiPin size={40} color="#b14700" />
                            <p className="px-8 my-4 text-lg">
                                Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming. I can’t recommend them highly enough. You will be
                                well cared for!
                            </p>
                            <hr className="w-full h-px my-4 bg-black" />
                            <p>-Mr. Poopypants</p>
                            <img src={corner} alt="" className="absolute bottom-0 right-0 w-20 scale-x-[-1] opacity-50" />
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10, scale: 1.1, zIndex: 40, rotateZ: 0 }}
                            transition={{ ease: "easeInOut" }}
                            variants={noteVariants}
                            className="relative flex flex-col items-center justify-around p-4 bg-purple-200 hover:cursor-pointer md:p-8 rounded-tr-3xl rounded-bl-3xl"
                        >
                            <TiPin size={30} color="#b14700" />

                            <p className="px-8 my-4 text-lg">
                                Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming. I can’t recommend them highly enough. You will be
                                well cared for!
                            </p>
                            <hr className="w-full h-px my-4 bg-black" />
                            <p>-Mr. Poopypants</p>
                            <img src={corner} alt="" className="absolute bottom-0 right-0 w-20 scale-x-[-1] opacity-50" />
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10, scale: 1.05, zIndex: 40, rotateZ: 0 }}
                            transition={{ ease: "easeInOut" }}
                            variants={noteVariants}
                            className="relative flex flex-col items-center justify-around p-4 bg-yellow-200 hover:cursor-pointer md:p-8 rounded-tr-3xl rounded-bl-3xl"
                        >
                            <TiPin size={40} color="#b14700" />

                            <p className="px-8 my-4 text-lg">
                                Unlike other Greenwood Village dentists, Village Dental takes you where you’re at rather than chastising or shaming. I can’t recommend them highly enough. You will be
                                well cared for!
                            </p>
                            <hr className="w-full h-px my-4 bg-black" />
                            <p>-Mr. Poopypants</p>
                            <img src={corner} alt="" className="absolute bottom-0 right-0 w-20 scale-x-[-1] opacity-50" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Review;
