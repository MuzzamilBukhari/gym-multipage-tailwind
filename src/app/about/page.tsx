import React from "react";
import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <section className="text-white bg-black body-font">
 <div className="font-black text-6xl text-center pt-14 pb-10 flex justify-center">
  <h1>About Us</h1>
</div>

  <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center ">
  <Image
  className="object-cover object-center rounded ring-2 ring-primary shadow-lg shadow-secondary/60"
  alt="hero"
  src="/images/about.jpg"
  width={620}
  height={500}
/>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 pr flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-5xl text-8xl mb-4 font-black  text-white">Why
        <span className="text-secondary"> Choose Us?</span>
      </h1>
      <p className="mb-8 leading-relaxed">Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.
<br />
Unlock your potential with our expert Personal Trainers.
<br />
Elevate your fitness with practice sessions.
<br />
We provide Supportive management, for your fitness success.
<br />
We provide Supportive management, for your fitness success.</p>
      <div className="flex justify-center items-center">
        <button className="inline-flex text-lg font-medium text-white border-0 px-6 focus:outline-none py-[2px] ml-3 bg-black  border-none shadow-primary ring-2 ring-primary shadow-md rounded-lg hover:scale-105 transform transition duration-300">Get Started with a Free Lesson!</button>
      
      </div>
    </div>
  </div>
</section>
  )
};
export default About;
