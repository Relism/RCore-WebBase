import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import ConfigPage from "./ConfigFeature/ConfigPage";
import HomePage from "./HomeFeature/HomePage";

import homeIcon from "../assets/icons/home.svg";
import pluginIcon from "../assets/icons/plugin.svg";
import serverIcon from "../assets/icons/server.svg";
import docsIcon from "../assets/icons/book.svg";
import logo from "../assets/rhosting-logo.png";

export function FeatureLabel(props) {
  return (
    <div className="relative">
      <div
        className="absolute -left-[10%] top-[30%] w-[10px] h-[10px] bg-grey--light"
        style={{ clipPath: `polygon(100% 100%, 100% 0%, 35% 50%)` }}
      ></div>
      <motion.div className="bg-grey--light w-fit px-[15px] py-[5px] rounded-lg text-slate-50 font-[500]">
        {props.name}
      </motion.div>
    </div>
  );
}
export function FeatureBox(props) {
  function clickHandler() {}

  return (
    <>
      <motion.div
        className="w-[60px] h-[60px] bg-grey rounded-lg mx-auto mt-[30px] p-[15px] hover:cursor-pointer"
        whileHover={{ boxShadow: `-7px 7px 0px 0px rgba(81,255,253,1)` }}
        transition={{ duration: 0.3, type: "tween" }}
        style={{
          boxShadow:
            props.active.clicked && `-7px 7px 0px 0px rgba(81,255,253,1)`,
        }}
        onClick={clickHandler}
      >
        <img src={props.img} className="w-[30px] h-[30px] mx-auto" />
      </motion.div>
      {/* <FeatureLabel name={props.id} /> */}
    </>
  );
}

export function DocsBox() {
  return (
    <motion.div
      className="w-[60px] h-[60px] bg-grey rounded-lg mx-auto mt-[30px] p-[15px]"
      whileHover={{ boxShadow: `-7px 7px 0px 0px rgba(81,255,253,1)` }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <a href="#" target="_blank">
        <img src={docsIcon} className="w-[30px] h-[30px] mx-auto" />
      </a>
    </motion.div>
  );
}

export default function Sidebar() {
  const [isActive, setIsActive] = useState({
    home: false,
    plugin: false,
    server: false,
    docs: false,
  });
  return (
    <div className="absolute top-[50px] left-[3%]">
      <div className="w-[75px] h-[75px] bg-grey/30 rounded-full mx-auto mb-[25px] pt-[5px] backdrop-blur-[10px] backdrop-saturate-50">
        <img src={logo} className="w-[65px] h-[65px] mx-auto" />
      </div>
      <div className="w-[90px] pb-[15px] rounded-lg bg-grey--light/30 backdrop-blur-[10px] backdrop-saturate-50 pt-[3px]">
        <FeatureBox
          id="home"
          img={homeIcon}
          active={isActive}
          setIsActive={setIsActive}
        />
        <FeatureBox
          id="plugin"
          img={pluginIcon}
          active={isActive}
          setIsActive={setIsActive}
        />
        <FeatureBox
          id="server"
          img={serverIcon}
          active={isActive}
          setIsActive={setIsActive}
        />
        <FeatureBox
          id="plugin"
          img={pluginIcon}
          active={isActive}
          setIsActive={setIsActive}
        />
        <FeatureBox
          id="server"
          img={serverIcon}
          active={isActive}
          setIsActive={setIsActive}
        />

        <DocsBox id="docs" />
      </div>
    </div>
  );
}
