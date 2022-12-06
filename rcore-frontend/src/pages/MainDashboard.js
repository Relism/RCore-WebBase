import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import Functions from "../components/Functions";
import Navbar from "../components/Navbar";

const supabase = createClient(
  "https://wzexnpmvncxoditytmcn.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZXhucG12bmN4b2RpdHl0bWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyNjcxMDQsImV4cCI6MTk4NTg0MzEwNH0._2-G-30OrwDOn8YStqBhD2MmKaObVGPZFsqyABm86Mw"
);

export default function Dashboard() {
  const [user, setUser] = useState({
    user_metadata: {
      full_name: "",
      avatar_url: "",
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log("s");
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
          console.log(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }
  return (
    <div className="bg-grey font-main h-[100vh]">
      <Navbar user={user} signOutUser={signOutUser} />
      <section>
        <Functions />
      </section>
    </div>
  );
}
