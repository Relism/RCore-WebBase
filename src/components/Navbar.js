import React from "react";

export default function Navbar(props) {
  return (
    <nav className="absolute left-[57%] top-[50px] flex justify-end items-center bg-grey--light/30 backdrop-blur-[10px] backdrop-saturate-50 rounded-lg w-[40%]">
      <button
        className="bg-accent border-none rounded-lg h-[50%] py-[5px] px-[30px] font-[600] text-gray-800 text-[15px] m-0 mr-[25px] hover:bg-accent--dark"
        onClick={props.signOutUser}
      >
        Sign Out
      </button>
      <div className="flex items-center px-[25px]">
        <h1 className="font-[500] text-[18px] text-slate-50 pr-[25px] py-[25px]">
          Welcome, {props.user.user_metadata.full_name}
        </h1>
        <img
          className="rounded-full w-[60px] h-[60px]"
          src={props.user.user_metadata.avatar_url}
        />
      </div>
    </nav>
  );
}
