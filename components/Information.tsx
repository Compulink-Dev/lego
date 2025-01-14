import React from "react";
import Title from "./Title";
import { Colors } from "@/constant/colors";


function Information() {
  return (
    <div className="container mx-auto max-w-7xl px-4 mt-4">
      <Title name={'About Evolve'} color={Colors.primary} />
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-7xl gap-4">
        <div className="">
          <h1 className="text-sm" style={{ color: Colors.text }}>
            The <span
              style={{ color: Colors.blue }}
              className="font-bold text-blue-500">EVOLVE ICT SUMMIT</span> is a
            Compulink Holdings Initiative that was inspired by the Rebrand
            Strategy they undertook to commemorate 31 years of Business
            Operations from 1991 to 2022.{" "}
          </h1>
          <h1 className="py-2 font-bold" style={{ color: Colors.primary }}> WHO IS COMPULINK?</h1>
          <h1 className="text-sm" style={{ color: Colors.text }}>
            Compulink Holdings is a proudly Zimbabwean, Information
            Communication Technology Company which was started on 1 July 1991.
            The founders saw a gap in the then budding ICT industry and took up
            the opportunity to offer their skills and services. The company
            started off by offering their clients Server Systems for Storage and
            back up. This was soon to be followed by Computer Networking
            Services. The portfolio of services has grown over the years to now
            include;
          </h1>
          <ul

            className="w-full py-4 flex gap-4 flex-wrap">
            <li
              style={{ backgroundColor: Colors.blue }}
              className="p-2 text-sm bg-blue-400 rounded font-bold text-white flex justify-center items-center">
              Networks
            </li>
            <li className="px-2 text-sm py-4 bg-red-400 rounded font-bold text-white flex justify-center items-center">
              Systems{" "}
            </li>
            <li className="px-2 py-4 bg-green-500 rounded font-bold  text-white flex justify-center items-center">
              Software & Cloud
            </li>
            <li className="px-2 text-sm py-4 bg-orange-400 rounded font-bold text-white flex justify-center items-center">
              Unified Communications
            </li>
            <li className="px-2 text-sm py-4 bg-blue-500 rounded font-bold text-white flex justify-center items-center">
              Cyber & Physical Security
            </li>
          </ul>
        </div>
        <div className="">
          <h1
            style={{ color: Colors.primary }}
            className="font-bold text-left text-lg text-purple-500 mb-4"> THE INSPIRATION AND CATALYST</h1>
          <h1 className="text-sm" style={{ color: Colors.text }} >
            Fast forward to 2021-22 Compulink Holdings embarked on a grand
            Rebrand Strategy that would culminate in commemorating 30 years of
            doing business in Zimbabwe as well as the launch and unveiling of
            their{" "}
            <span
              style={{ color: Colors.secondary }}
              className="font-bold text-purple-500">
              NEW REBRAND LOGO ELEMENTS AND NEW BRAND PROMISE.
            </span>{" "}
            From the outcomes of the Rebrand Strategy it was established that
            the SAGE is the ‘Brand Archetype’ for Compulink Holdings. The Sage
            archetype revolves around knowledge and truth. For the Sage the key
            to success is collecting information and relentlessly pursuing the
            truth. The Sage believes that by gathering reliable, factual
            information and sharing it with others, we can make the world a
            better place. It is with this Ethos in mind that the patrons of
            Compulink Holdings set out on this journey to host an ICT Summit
            Event every year as a way of giving back to the ICT COMMUNITY in
            Zimbabwe and the region – hence the EVOLVE ICT SUMMIT was born.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Information;
