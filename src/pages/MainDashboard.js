import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://wzexnpmvncxoditytmcn.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZXhucG12bmN4b2RpdHl0bWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyNjcxMDQsImV4cCI6MTk4NTg0MzEwNH0._2-G-30OrwDOn8YStqBhD2MmKaObVGPZFsqyABm86Mw"
);

export default function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
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
      <div className="flex items-center w-[50%]">
        <h1 className="font-[500] text-slate-50 text-[3rem] pr-[50px] py-[50px]">
          Hi, {user.user_metadata.full_name}
        </h1>
        <img className="rounded-full " src={user.user_metadata.avatar_url} />
      </div>
      <button
        className="bg-accent border-none w-[30%] rounded-lg p-[10px] font-[600] text-gray-800 m-0"
        onClick={() => signOutUser()}
      >
        Sign Out
      </button>
    </div>
  );
}
