import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { AnimationContext } from "../context/AnimationContext";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [isNewOpen, setIsNewOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { buttonVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="sticky top-0 z-50 flex items-center justify-around py-6 bg-white md:py-2 ">
                {/* ---------- The Logo----------- */}
                <div>
                    <NavHashLink>
                        <h1 className="tracking-widest uppercase">Village Dental</h1>
                    </NavHashLink>
                </div>

                {/* ----------The menus----------- */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6">
                        {/* -----------About----------- */}
                        <NavHashLink className="relative" onMouseEnter={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(!isOpen)}>
                            <motion.h2 initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }}>
                                ABOUT
                            </motion.h2>

                            {/* ------SubMenu for About------- */}
                            <div className={`${isOpen ? "block" : "hidden"} absolute bg-slate-50 p-4 pt-12 w-52 text-sm`}>
                                <ul className="flex flex-col w-full gap-4 uppercase">
                                    <hr className="w-full h-px bg-black" />
                                    <Link>Meet The Doctors</Link>
                                    <Link>Before and Afters</Link>
                                    <Link>Careers</Link>
                                    <Link>FAQ</Link>
                                    <Link>FEE-For-Service Dentist</Link>
                                    <Link>Dental Technology</Link>
                                    <Link>Blog</Link>
                                    <Link>It Takes a Village</Link>
                                </ul>
                            </div>
                        </NavHashLink>
                        {/* ---------------services--------------- */}
                        <NavHashLink className="relative" onMouseEnter={() => setIsServiceOpen(!isServiceOpen)} onMouseLeave={() => setIsServiceOpen(!isServiceOpen)}>
                            <motion.h2 initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }}>
                                SERVICES
                            </motion.h2>
                            {/* ------SubMenu for services------- */}
                            <div className={`${isServiceOpen ? "block" : "hidden"} absolute bg-slate-50 p-4 pt-12 w-52 transition-all ease-in-out  text-sm`}>
                                <ul className="flex flex-col w-full gap-4 uppercase">
                                    <hr className="w-full h-px bg-black" />
                                    <Link>General</Link>
                                    <Link>Cosmetic</Link>
                                    <Link>Surgical</Link>
                                    <Link>Problems We Treat</Link>
                                </ul>
                            </div>
                        </NavHashLink>
                        <motion.NavHashLink initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }}>
                            WARRANTY
                        </motion.NavHashLink>
                        {/* ---------------New Patients--------------- */}
                        <NavHashLink className="relative" onMouseEnter={() => setIsNewOpen(!isNewOpen)} onMouseLeave={() => setIsNewOpen(!isNewOpen)}>
                            <motion.h2 initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }}>
                                NEW PATIENTS
                            </motion.h2>
                            {/* ------SubMenu for new patients------- */}
                            <div className={`${isNewOpen ? "block" : "hidden"} absolute bg-slate-50 p-4 pt-12 w-52  text-sm`}>
                                <ul className="flex flex-col w-full gap-4 uppercase">
                                    <hr className="w-full h-px bg-black" />
                                    <Link>Payment Options</Link>
                                    <Link>Patient Comfort</Link>
                                    <Link>Free Whitening</Link>
                                </ul>
                            </div>
                        </NavHashLink>
                        <motion.NavHashLink initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }}>
                            +91-9945348790
                        </motion.NavHashLink>
                        <motion.NavHashLink smooth to={"#booking"} initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeInOut", duration: 0.2 }}>
                            <button className="px-4 py-3 bg-[#E7CA71] hover:bg-[#e7ca71b5]">BOOK ONLINE</button>
                        </motion.NavHashLink>
                    </ul>
                </div>

                {/* -------------Mobile Menus-------------- */}

                <div className="z-50 md:hidden" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
                </div>
                <div className="absolute w-4/5 text-teal-900 bg-white md:hidden top-16">
                    <ul className={`${isMobile ? "block" : "hidden"} flex flex-col items-start px-4  gap-6 py-4 pb-8 transition-all ease-in-out`}>
                        {/* -----------About----------- */}
                        <NavHashLink className="w-full py-2 border-b" onClick={() => setIsOpen(!isOpen)}>
                            <motion.h2 initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }} className="flex items-center justify-between">
                                ABOUT
                                {isOpen ? <LuMinus /> : <LuPlus />}
                            </motion.h2>

                            {/* ------SubMenu for About------- */}
                            <div className={`${isOpen ? "block" : "hidden"} p-2 w-full text-sm`}>
                                <ul className="flex flex-col items-start justify-center w-full gap-4 uppercase">
                                    <hr className="w-full h-px bg-black" />
                                    <Link className="w-full py-1 border-b">Meet The Doctors</Link>
                                    <Link className="w-full py-1 border-b">Before and Afters</Link>
                                    <Link className="w-full py-1 border-b">Careers</Link>
                                    <Link className="w-full py-1 border-b">FAQ</Link>
                                    <Link className="w-full py-1 border-b">FEE-For-Service Dentist</Link>
                                    <Link className="w-full py-1 border-b">Dental Technology</Link>
                                    <Link className="w-full py-1 border-b">Blog</Link>
                                    <Link className="w-full py-1">It Takes a Village</Link>
                                </ul>
                            </div>
                        </NavHashLink>
                        {/* ---------------services--------------- */}
                        <NavHashLink className="w-full py-2 border-b" onClick={() => setIsServiceOpen(!isServiceOpen)}>
                            <motion.h2 initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }} className="flex items-center justify-between">
                                SERVICES
                                {isServiceOpen ? <LuMinus /> : <LuPlus />}
                            </motion.h2>
                            {/* ------SubMenu for services------- */}
                            <div className={`${isServiceOpen ? "block" : "hidden"}  p-2 w-full transition-all ease-in-out  text-sm`}>
                                <ul className="flex flex-col w-full gap-4 uppercase">
                                    <hr className="w-full h-px bg-black" />
                                    <Link className="w-full py-1 border-b">General</Link>
                                    <Link className="w-full py-1 border-b">Cosmetic</Link>
                                    <Link className="w-full py-1 border-b">Surgical</Link>
                                    <Link className="w-full py-1">Problems We Treat</Link>
                                </ul>
                            </div>
                        </NavHashLink>
                        <motion.NavHashLink initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }} className="w-full py-2 border-b">
                            WARRANTY
                        </motion.NavHashLink>
                        {/* ---------------New Patients--------------- */}
                        <NavHashLink className="w-full py-2 border-b" onClick={() => setIsNewOpen(!isNewOpen)}>
                            <motion.h2 initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }} className="flex items-center justify-between">
                                NEW PATIENTS
                                {isNewOpen ? <LuMinus /> : <LuPlus />}
                            </motion.h2>
                            {/* ------SubMenu for new patients------- */}
                            <div className={`${isNewOpen ? "block" : "hidden"}  p-2 w-full  text-sm`}>
                                <ul className="flex flex-col w-full gap-4 uppercase">
                                    <hr className="w-full h-px bg-black" />
                                    <Link className="w-full py-1 border-b">Payment Options</Link>
                                    <Link className="w-full py-1 border-b">Patient Comfort</Link>
                                    <Link className="w-full py-1 ">Free Whitening</Link>
                                </ul>
                            </div>
                        </NavHashLink>
                        <motion.NavHashLink initial={{ y: 0 }} whileHover={{ y: -5, opacity: 0.5 }} transition={{ ease: "easeOut", duration: 0.2 }} className="w-full py-2 border-b">
                            +91-9945348790
                        </motion.NavHashLink>
                        <motion.div smooth to={"#booking"} initial="hidden" whileHover="show" variants={buttonVariants} className="flex justify-around w-full">
                            <button className="px-4 py-3 bg-[#E7CA71] hover:bg-[#e7ca71b5] transition ease-in-out">BOOK ONLINE</button>
                        </motion.div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
