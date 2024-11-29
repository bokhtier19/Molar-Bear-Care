import React from "react";
import { RiPriceTag2Fill } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa";

const Transparency = () => {
    return (
        <>
            <div className="flex justify-center my-8">
                <div className="flex flex-col md:flex-row w-4/5 gap-8 my-8 border-2 border-[#266980] rounded-tl-3xl rounded-br-3xl">
                    <div className="flex flex-col flex-1 text-[#266980] justify-center items-center">
                        <div className="flex flex-col w-3/4 gap-4 py-8">
                            <RiPriceTag2Fill color="teal" size={60} className="transition-all ease-in-out  hover:scale-110" />
                            <h1 className="md:text-xl">TRNSPARENT PRICING</h1>
                            <h1 className="font-serif text-4xl uppercase">No Suprises</h1>
                            <p className="text-base md:w-3/4 md:text-xl">
                                Our team believes in accessible dental care. We offer straightforward pricing, clear estimates, and an unprecedented dental warranty. Keep up with your routine 6-month
                                checkups and if something needs fixing, we’ll handle it at no cost to you.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#266980] text-white flex-1 flex justify-center rounded-br-3xl">
                        <div className="flex flex-col w-3/4 gap-4 py-8">
                            <h1 className="font-serif text-4xl text-start">Insurence</h1>
                            <p className="text-base md:text-xl">
                                Our office is in-network with Delta Premier and bills all other providers. Our team will explain how your specific dental benefits apply to the cost of treatment.
                            </p>
                            <div className="flex justify-center">
                                <FaHandHoldingMedical size={200} className="items-center transition-all ease-in-out hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transparency;
