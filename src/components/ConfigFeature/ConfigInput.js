import React from "react";

export default function ConfigInput(props) {
  return (
    <div className="pb-[50px] grid grid-cols-[1fr_2fr_1fr] mx-auto">
      <label className="text-main px-[20px] ml-[50px] my-auto">
        {props.entry}:
      </label>
      <input
        className="bg-grey--light border-none rounded-lg py-[5px] px-[10px] mr-[50px] focus:text-slate-50 focus:outline-none"
        defaultValue={props.value}
        onChange={props.changeHandler}
      />
      <button
        onClick={props.clickHandler}
        disabled={!props.changed}
        className="bg-accent w-[90%] border-none rounded-lg px-[10px] py-[8px] font-[600] text-gray-800 focus:outline-none hover:bg-accent--dark disabled:bg-[#62bf93]"
      >
        Update!
      </button>
    </div>
  );
}
