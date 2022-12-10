import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Switch, Route, Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ConfigPage from "../components/ConfigFeature/ConfigPage";
import HomePage from "../components/HomeFeature/HomePage";

const supabase = createClient(
  "https://wzexnpmvncxoditytmcn.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZXhucG12bmN4b2RpdHl0bWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyNjcxMDQsImV4cCI6MTk4NTg0MzEwNH0._2-G-30OrwDOn8YStqBhD2MmKaObVGPZFsqyABm86Mw"
);

export default function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    user_metadata: {
      full_name: "",
      avatar_url: "",
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser({
            email: value.data.user.email,
            user_metadata: {
              full_name: value.data.user.user_metadata.full_name,
              avatar_url: value.data.user.user_metadata.avatar_url,
            },
          });
        }
      });
    }
    getUserData();
  });

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="bg-grey font-main min-h-[100vh]">
      <Navbar user={user} signOutUser={signOutUser} />
      <Sidebar />
      <ConfigPage user={user} />
      {/* <HomePage /> */}
    </div>
  );
}
