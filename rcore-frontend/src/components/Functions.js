import React from "react";
import FunctionCard from "./FunctionCard";

export default function Functions() {
  const functionArr = [
    {
      name: "Create",
      desc: "",
      function: () => {},
    },
    {
      name: "Read",
      desc: "",
      function: () => {},
    },
    {
      name: "Update",
      desc: "",
      function: () => {},
    },
    {
      name: "Delete",
      desc: "",
      function: () => {},
    },
  ];
  return (
    <section className="flex justify-around my-[30px]">
      {functionArr.map((item) => {
        return <FunctionCard name={item.name} func={item.function} />;
      })}
    </section>
  );
}
