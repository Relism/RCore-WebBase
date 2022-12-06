import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import "./LoginPortal.css";

const supabase = createClient(
  "https://wzexnpmvncxoditytmcn.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZXhucG12bmN4b2RpdHl0bWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyNjcxMDQsImV4cCI6MTk4NTg0MzEwNH0._2-G-30OrwDOn8YStqBhD2MmKaObVGPZFsqyABm86Mw"
);

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
      <div className=" bg-grey h-[100vh] font-main">
        <h1 className="font-[700] text-slate-50 text-center text-[6rem]">
          Welcome to RCore
        </h1>

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
      </div>
    </>
  );
}
