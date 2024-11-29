import React, { createContext } from "react";

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.1,
                staggerChildren: 0.2,
                delayChildren: 0.3,
                when: "beforeChildren",
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };
    const noteVariants = {
        hidden: { opacity: 0, y: 100, rotateZ: -5 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const buttonVariants = {
        out: { opacity: 0, y: -5, scale: 1 },
        in: {
            opacity: 1,
            y: 0,
            scale: 1.1,
            transition: {
                type: "ease",
                ease: "easeInOut",
            },
        },
    };

    return <AnimationContext.Provider value={{ childVariants, containerVariants, buttonVariants, noteVariants }}>{children}</AnimationContext.Provider>;
};

export default AnimationProvider;
