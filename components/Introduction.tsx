import React from "react";
import Title from "./Title";
import { Colors } from "@/constant/colors";

function Introduction() {
  return (
    <div className="container mx-auto max-w-7xl my-8 md:my-14 px-4">
      <Title color={Colors.blue} name={'INTRODUCTION'} />
      <div className="grid grid-col-1 md:grid-cols-3 gap-4">
        <div className="">
          <h1 className="font-bold mb-2" style={{ color: Colors.text }}>BACKGROUND</h1>
          <h1 className="text-sm" style={{ color: Colors.text }}>
            The <span className="font-bold">EVOLVE ICT SUMMIT</span> is a Compulink Holdings Initiative that was inspired by the Rebrand Strategy they undertook to commemorate 31 years of Business Operations from 1991 to 2022.
          </h1>
          {/* <div className="h-24 w-1 bg-black"></div> */}
        </div>

        <div className="col-span-2">
          <div className="h-auto">
            <h1 className="font-bold mb-2" style={{ color: Colors.text }}>WHO IS COMPULINK?</h1>
            <h1 className="text-sm" style={{ color: Colors.text }}>
              Compulink Holdings is a proudly Zimbabwean, Information
              Communication Technology Company which was started on 1 July 1991.
              The founders saw a gap in the then budding ICT industry and took
              up the opportunity to offer their skills and services. The company
              started off by offering their clients Server Systems for Storage
              and back up.
            </h1>
          </div>
          {/* <div className="h-12 w-1 bg-black"></div> */}
        </div>
      </div>
    </div >
  );
}

export default Introduction;
