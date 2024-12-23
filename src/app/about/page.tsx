import React from "react";
import { About as AboutComp, SectionTitle } from "@/components";
const About = () => {
  return (
    <section className="text-white bg-black body-font w-full mt-32">
      <SectionTitle first="About" second="Us" />
      <AboutComp />
    </section>
  );
};
export default About;
