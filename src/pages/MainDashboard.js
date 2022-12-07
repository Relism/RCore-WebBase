// import * as dotenv from "dotenv";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainForm from "../components/MainForm";

// dotenv.config();

const supabase = createClient(
  "https://wzexnpmvncxoditytmcn.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZXhucG12bmN4b2RpdHl0bWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyNjcxMDQsImV4cCI6MTk4NTg0MzEwNH0._2-G-30OrwDOn8YStqBhD2MmKaObVGPZFsqyABm86Mw"
);

const api = axios.create({
  baseURL: `https://api.relimc.com/rcore/super`,
});

const supersecret = "3LVJ9sYhmBVX9Vrml3MLR5QB18Ks4Cxc5YVucEzzWSyHy4GX19";
// const sss = process.env.SUPER_SECRET;

export default function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    user_metadata: {
      full_name: "",
      avatar_url: "",
    },
  });
  const [configs, setConfigs] = useState([]);
  const arr = [];
  const [isAllowed, setIsAllowed] = useState(false);
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
          // console.log(value.data.user);
          // console.log(user.email);
        }
      });
    }
    // console.log(user);
    getUserData();

    async function isAuthenticated() {
      try {
        const res = await api.get(
          "/authenticate?supersecret=" + supersecret + "&email=" + user.email
        );
        // console.log(res.data);
        setIsAllowed(true);
      } catch (err) {
        console.log(err);
      }
    }

    // console.log(process.env.SUPER_SECRET);

    async function getAuthTokenAndConfig() {
      try {
        let authRes = await api.get(
          "/getAuthToken/?email=" + user.email + "&supersecret=" + supersecret
        );

        let configRes = await api.get(
          "/getConfigByToken/?authtoken=" +
            authRes.data +
            "&supersecret=" +
            supersecret
        );
        console.log(Object.entries(configRes.data));

        setConfigs(Object.entries(configRes.data));
      } catch (err) {
        console.log(err);
      }
    }

    if (user.email !== "") {
      isAuthenticated();
      getAuthTokenAndConfig();
    }

    // async function getConfigData(token) {
    //   try {

    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    // api
    //   .get(
    //     `https://api.relimc.com/rcore/super/getConfig/?authtoken=${userAuth}&supersecret=${supersecret}`
    //   )
    //   .then((res) => {
    //     setConfigs(res);
    //   })
    //   .catch((err) => console.log(err));
  }, [user.email]);

  // async function updateConfigData(newVal) {
  //   try {
  //     await api.get(
  //       `/updateEntry/?authtoken=${userAuth}&entry=<entry>&value=${newVal}&supersecret=${supersecret}`
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="bg-grey font-main h-[100vh]">
      <Navbar user={user} signOutUser={signOutUser} />
      <section className="mx-auto">
        <MainForm data={configs} />
      </section>
    </div>
  );
}
