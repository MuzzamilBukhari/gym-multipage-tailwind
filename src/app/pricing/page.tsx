"use client"
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const page = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <div>
      <section className="bg-black text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-7xl font-black title-font mb-2 text-white">Pric
              <span className="text-secondary">ing</span></h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white pt-16 pb-8">
              Choose a plan that fits your fitness journey. Monthly or annual options available. Achieve your fitness goals with the perfect plan for you. Explore flexible monthly and annual options tailored to your needs!
            </p>
            <div className="flex mx-auto border-2 border-secondary ring-primary shadow-lg shadow-secondary/60 rounded overflow-hidden mt-6">
              <button
                className={`py-1 px-4 ${billingCycle === "Monthly" ? "bg-secondary text-white" : ""}`}
                onClick={() => setBillingCycle("Monthly")}
              >
                Monthly
              </button>
              <button
                className={`py-1 px-4 ${billingCycle === "Annually" ? "bg-secondary text-white" : ""}`}
                onClick={() => setBillingCycle("Annually")}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Basic Plan */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden ring-2 ring-primary shadow-lg shadow-secondary/60 hover:scale-105 transform transition duration-300">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BASIC</h2>
                <h1 className="text-5xl text-primary pb-4 mb-4 border-b border-white leading-none">
                  {billingCycle === "Monthly" ? "$20" : "$200"}
                  <span className="text-lg ml-1 font-normal text-white">
                    {billingCycle === "Monthly" ? "/mo" : "/yr"}
                  </span>
                </h1>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Access to gym equipment
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Locker room access
                </p>
                <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-secondary rounded">
                  Join Now
                </button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden ring-2 ring-primary shadow-lg shadow-secondary/60 hover:scale-105 transform transition duration-300">
                {/* <span className="bg-primary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span> */}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">STANDARD</h2>
                <h1 className="text-5xl text-primary leading-none pb-4 mb-4 border-b border-white">
                  {billingCycle === "Monthly" ? "$40" : "$400"}
                  <span className="text-lg ml-1 font-normal text-white">
                    {billingCycle === "Monthly" ? "/mo" : "/yr"}
                  </span>
                </h1>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Access to all gym equipment
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Group fitness classes
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Personal locker
                </p>
                <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-secondary rounded">
                  Join Now
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden ring-2 ring-primary shadow-lg shadow-secondary/60 hover:scale-105 transform transition duration-300">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
                <h1 className="text-5xl text-primary leading-none pb-4 mb-4 border-b border-white">
                  {billingCycle === "Monthly" ? "$60" : "$600"}
                  <span className="text-lg ml-1 font-normal text-white">
                    {billingCycle === "Monthly" ? "/mo" : "/yr"}
                  </span>
                </h1>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  24/7 gym access
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Personal trainer sessions
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Free guest passes
                </p>
                <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-secondary rounded">
                  Join Now
                </button>
              </div>
            </div>

            {/* Elite Plan */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden ring-2 ring-primary shadow-lg shadow-secondary/60 hover:scale-105 transform transition duration-300">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">ELITE</h2>
                <h1 className="text-5xl text-primary leading-none pb-4 mb-4 border-b border-white">
                  {billingCycle === "Monthly" ? "$80" : "$800"}
                  <span className="text-lg ml-1 font-normal text-white">
                    {billingCycle === "Monthly" ? "/mo" : "/yr"}
                  </span>
                </h1>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  All premium benefits
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Customized diet plan
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3" />
                  </span>
                  Monthly health check-ups
                </p>
                <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-secondary rounded">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
