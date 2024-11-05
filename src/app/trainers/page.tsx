import React from "react";
import { SectionTitle, Trainers } from "@/components";
const page = () => {
  return (
    <div>
      <section className="bg-black container text-white body-font">
        <div className="flex flex-col text-center w-full">
          <SectionTitle first="Our" second="Trainers" />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet our dedicated trainers who are here to help you, from strength
            training to flexibility and endurance, each team member brings
            unique expertise to ensure you get the most out of every session.
            Let’s crush those goals together!
          </p>
        </div>
        <Trainers />
      </section>
    </div>
  );
};

export default page;
