import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import ImageSlider, { Slide } from "react-auto-image-slider";

import minecraft1 from "../assets/wallpapers/minecraft2.jpg";
import minecraft2 from "../assets/wallpapers/minecraft1.jpg";
import minecraft3 from "../assets/wallpapers/minecraft3.png";
import minecraft4 from "../assets/wallpapers/minecraft4.jpg";

import "./LoginPortal.css";

const supabase = createClient(
  "https://wzexnpmvncxoditytmcn.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZXhucG12bmN4b2RpdHl0bWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyNjcxMDQsImV4cCI6MTk4NTg0MzEwNH0._2-G-30OrwDOn8YStqBhD2MmKaObVGPZFsqyABm86Mw"
);

export function Carousel() {
  return (
    <div className="carousel__container absolute brightness-50">
      <ImageSlider effectDelay={500} autoPlayDelay={2500}>
        <Slide>
          <img alt="img2" src={minecraft1} />
        </Slide>
        <Slide>
          <img alt="img2" src={minecraft2} />
        </Slide>
        <Slide>
          <img alt="img1" src={minecraft3} />
        </Slide>
        <Slide>
          <img alt="img1" src={minecraft4} />
        </Slide>
      </ImageSlider>
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/success");
    } else {
      navigate("/");
    }
  });

  return (
    <>
      <div className="bg-grey h-[100vh] font-main overflow-x-hidden">
        <h1 className="absolute left-[20%] font-[700] text-slate-50 text-center text-[6rem] z-10">
          Welcome to RCore
        </h1>
        <p className="absolute left-[31%] top-[125px] text-main text-[25px] z-10">
          Configure your Minecraft plugins, seamlessly
        </p>
        <Carousel />

        <section className="mt-[250px] bg-grey--light/30 w-[40%] rounded-lg mx-auto backdrop-blur-[10px] backdrop-saturate-50">
          <Auth
            supabaseClient={supabase}
            providers={["discord"]}
            appearance={{
              className: {
                button: "auth__btn",
                input: "auth__input",
                label: "auth__label",
                container: "auth__container",
                anchor: "auth__anchor",
              },
            }}
          />
        </section>
      </div>
    </>
  );
}
