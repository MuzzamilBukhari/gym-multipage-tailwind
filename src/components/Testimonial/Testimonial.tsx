import React from "react";
import Image from "next/image";
const About = () => {
    return (
        <section className="text-white bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="font-black text-6xl text-center pt-8 pb-20 flex justify-center">
  <h1>Our 
    <span className="text-secondary"> Testimonials</span></h1>
</div>
<p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-16">Our dedicated trainers are here to help you reach your fitness goals with personalized workouts, expert advice, and unwavering support. From strength training to flexibility and endurance, each team member brings unique expertise to ensure you get the most out of every session. Let’s crush those goals together!</p>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
              <Image
  alt="testimonial"
  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block ring-2 ring-primary shadow-lg shadow-secondary/60"
  src="/images/testemonial.jpg"
  width={80} // Width in pixels
  height={80} // Height in pixels
/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
              <Image
  alt="testimonial"
  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block ring-2 ring-primary shadow-lg shadow-secondary/60"
  src="/images/testemonial.jpg"
  width={80} // Width in pixels
  height={80} // Height in pixels
/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
              <Image
  alt="testimonial"
  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block ring-2 ring-primary shadow-lg shadow-secondary/60"
  src="/images/testemonial.jpg"
  width={80} // Width in pixels
  height={80} // Height in pixels
/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  };
  export default About;
  