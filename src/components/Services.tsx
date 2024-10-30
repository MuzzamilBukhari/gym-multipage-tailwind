import React from "react";

const Services = () => {
  return (
    <section className="bg-neutral-900 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-center text-7xl font-extrabold text-white mb-5 pt-20 pb-20">
          Our <span className="text-cyan-600">Services</span>
        </h2>
        
        <div className="flex flex-wrap lg:flex-nowrap -mx-4 -mb-10 -mt-4 gap-6 justify-center">
  
          <div className="bg-black rounded-lg p-4 md:w-1/4 sm:mb-0 mb-6 ring-2 ring-cyan-600 shadow-lg shadow-cyan-600/50 hover:scale-105 transform transition duration-300">
            <div className="rounded-lg h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww"
                alt="Physical Fitness"
                className="rounded-lg w-full object-cover h-48"
              />
            </div>
            <h2 className="text-xl font-bold title-font text-white mt-2">Physical Fitness</h2>
          </div>
          <div className="bg-black rounded-lg p-4 md:w-1/4 sm:mb-0 mb-6 ring-2 ring-cyan-600 shadow-lg shadow-cyan-600/50 hover:scale-105 transform transition duration-300">
            <div className="rounded-lg h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww"
                alt="Weight Gain"
                className="rounded-lg w-full object-cover h-48"
              />
            </div>
            <h2 className="text-xl font-bold title-font text-white mt-2">Weight Gain</h2>
          </div>
          <div className="bg-black rounded-lg p-4 md:w-1/4 sm:mb-0 mb-6 ring-2 ring-cyan-600 shadow-lg shadow-cyan-600/50 hover:scale-105 transform transition duration-300">
            <div className="rounded-lg h-52 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaik2BDGngXwj5M3_Lb7FCMD3OiKsF9QJboQ&s"
                alt="Strength Training"
                className="rounded-lg w-full object-cover h-48"
              />
            </div>
            <h2 className="text-xl font-bold title-font text-white mt-2">Strength Training</h2>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap -mx-4 -mb-10 pt-16 -mt-4 gap-6 justify-center">
          <div className="bg-black rounded-lg p-4 md:w-1/4 sm:mb-0 mb-6 ring-2 ring-cyan-600 shadow-lg shadow-cyan-600/50 hover:scale-105 transform transition duration-300">
            <div className="rounded-lg h-52 overflow-hidden">
              <img
                src="https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA5MjM2NjAxMzI1MjMzNzc2/weight-loss-exercise-plan.jpg"
                alt="Nutrition Plans"
                className="rounded-lg w-full object-cover h-48"
              />
            </div>
            <h2 className="text-xl font-bold title-font text-white mt-2">Fat Lose</h2>
          </div>
          <div className="bg-black rounded-lg p-4 md:w-1/4 sm:mb-0 mb-6 ring-2 ring-cyan-600 shadow-lg shadow-cyan-600/50 hover:scale-105 transform transition duration-300">
            <div className="rounded-lg h-52 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfBvCnUif3Ai_cICfYKayEDyhP8IVOsE1RQ&s"
                alt="Meditation"
                className="rounded-lg w-full object-cover h-48"
              />
            </div>
            <h2 className="text-xl font-bold title-font text-white mt-2">Weightlifting</h2>
          </div>
          <div className="bg-black rounded-lg p-4 md:w-1/4 sm:mb-0 mb-6 ring-2 ring-cyan-600 shadow-lg shadow-cyan-600/50 hover:scale-105 transform transition duration-300">
            <div className="rounded-lg h-52 overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/young-athletic-man-running-treadmill-gym_637285-8364.jpg"
                alt="Respiration Training"
                className="rounded-lg w-full object-cover h-48"
              />
            </div>
            <h2 className="text-xl font-bold title-font text-white mt-2">Running</h2>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
