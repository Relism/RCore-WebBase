import React from "react";

export default function FunctionCard(props) {
  return (
    <div className="w-[20%] bg-grey--light rounded-lg px-[20px] py-[10px]">
      <h3 className="text-main font-[500] text-[25px]">{props.name}</h3>
      <p className="text-slate-50 text-[15px]">
        description bgrbong rgr lorem ipsum sit amet sol idor valar morghulis
        valar dohairis
      </p>
      <button
        onClick={props.func}
        className="bg-main border-none w-[30%] rounded-lg p-[10px] font-[600] text-gray-800 m-0 my-[10px]"
      >
        Click
      </button>
    </div>
  );
}
