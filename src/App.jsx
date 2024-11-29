import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Review from "./components/Review";
import Visit from "./components/Visit";
import Transparency from "./components/Transparency";
import Services from "./components/Services";
import Whitening from "./components/Whitening";
import Offer from "./components/Offer";
import AnimationProvider from "./context/AnimationContext";

const App = () => {
    return (
        <>
            <Offer />
            <Navbar />
            <Hero />
            <Welcome />
            <Review />
            <Services />
            <Whitening />
            <Transparency />
            <Visit />
            <Booking />
            <Footer />
        </>
    );
};

export default App;
