import React, { useState, useEffect } from "react";

import MainForm from "./MainForm";
import axios from "axios";

import aiPlugin from "../../assets/ai-gen-images/plugins.jpg";

export const api = axios.create({
  baseURL: `https://api.relimc.com/rcore/super`,
});

export const supersecret = process.env.REACT_APP_SUPER_SECRET;

export default function ConfigPage(props) {
  const [isAllowed, setIsAllowed] = useState(false);
  const [configs, setConfigs] = useState([]);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    async function isAuthenticated() {
      try {
        const res = await api.get(
          "/authenticate?supersecret=" +
            supersecret +
            "&email=" +
            props.user.email
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
          "/getAuthToken/?email=" +
            props.user.email +
            "&supersecret=" +
            supersecret
        );

        setAuthToken(authRes.data);

        let configRes = await api.get(
          "/getConfig/?authtoken=" +
            authRes.data +
            "&supersecret=" +
            supersecret
        );
        // console.log(Object.entries(configRes.data));

        setConfigs(Object.entries(configRes.data));
      } catch (err) {
        console.log(err);
      }
    }

    if (props.user.email !== "") {
      isAuthenticated();
      getAuthTokenAndConfig();
    }
  }, [props.user.email]);

  return (
    <>
      <div
        className="h-[28vh]"
        style={{
          backgroundImage: `url(${aiPlugin})`,
          backgroundSize: "100vw 28vh",
        }}
      ></div>
      <section className="py-[50px]">
        <MainForm
          configs={configs}
          setConfig={setConfigs}
          authToken={authToken}
        />
      </section>
    </>
  );
}
