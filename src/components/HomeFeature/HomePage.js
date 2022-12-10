import React, { useState } from "react";
import { motion } from "framer-motion";

import pluginIcon from "../../assets/icons/plugin.svg";
import serverIcon from "../../assets/icons/server.svg";
import docsIcon from "../../assets/icons/book.svg";

import aiHome from "../../assets/ai-gen-images/home.jpg";
import aiServer from "../../assets/ai-gen-images/serverfarm.jpg";

const FEATURES_ARR = [
  {
    id: "plugin",
    title: "Plugin Configurations",
    image: pluginIcon,
    desc: "Configure your plugins seamlessly bteg  thy57u wrt45wb65 rg",
  },
  {
    id: "server",
    title: "Server Stuff",
    image: serverIcon,
    desc: "Rhosting Server wrt05jy qeroigr ;oegte wrjg  tehb yhb qer qe r",
  },
  {
    id: "docs",
    title: "API Docs",
    image: docsIcon,
    desc: "Configure your plugins seamlessly sfginwr teti f st  wrgr rn",
  },
  {
    id: "smth",
    title: "Something Else",
    image: docsIcon,
    desc: "Configure your plugins seamlessly sfginwr teti f st  wrgr rn",
  },
];

export function FeatureCard(props) {
  return (
    <motion.div
      className="bg-grey--light rounded-lg p-[20px]"
      whileHover={{ boxShadow: `-10px 10px 0px 0px rgba(81,255,253,1)` }}
      transition={{ type: "tween" }}
    >
      <div className="w-[60px] h-[60px] bg-grey rounded-lg p-[15px] hover:cursor-pointer">
        <img src={props.img} className="w-[30px] h-[30px] mx-auto" />
      </div>
      <h1 className="text-main text-[25px] font-[500] mt-[10px]">
        {props.title}
      </h1>
      <p className="text-slate-50 mb-[20px] text-[15px]">{props.desc}</p>
      <motion.button className="relative bg-accent border-none rounded-lg py-[5px] px-[40px] font-[600] text-gray-800 text-[15px] m-0 mr-[25px] hover:bg-accent--dark">
        Explore
      </motion.button>
    </motion.div>
  );
}
export default function HomePage() {
  return (
    <>
      <div
        className="h-[28vh]"
        style={{
          backgroundImage: `url(${aiHome})`,
          backgroundSize: "100vw 28vh",
        }}
      ></div>
      <section className="py-[50px] w-[80%] mx-auto">
        <h1 className="text-main font-[500] text-[30px] text-center mb-[40px]">
          Explore Features
        </h1>
        <motion.div className="grid grid-cols-3 gap-[30px] w-[100%] ml-[50px]">
          {FEATURES_ARR.map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 * i } }}
              >
                <FeatureCard
                  title={item.title}
                  img={item.image}
                  desc={item.desc}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}
