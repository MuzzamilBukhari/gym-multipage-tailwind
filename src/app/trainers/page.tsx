import React from "react";
import { SectionTitle, Trainers } from "@/components";
const page = () => {
  return (
    <div>
      <section className="bg-black container body-font mt-20 border-b-2 border-primary">
        <div className="flex justify-center items-center mx-4 flex-col pt-20">
          <div className=" text-center w-full">
            <SectionTitle first="Our" second="Trainers" />
            <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base">
              Meet our dedicated trainers who are here to help you, from
              strength training to flexibility and endurance, each team member
              brings unique expertise to ensure you get the most out of every
              session. Let’s crush those goals together!
            </p>
          </div>
          <div className="mx-4">
            <Trainers />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
