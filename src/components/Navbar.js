import React from "react";

export default function Navbar(props) {
  return (
    <nav className="flex justify-around items-center h-[10%] bg-grey--light rounded-lg w-[50%]">
      <button
        className="bg-accent border-none rounded-lg h-[50%] w-[10%] font-[600] text-gray-800 m-0"
        onClick={props.signOutUser}
      >
        Sign Out
      </button>
      <div className="flex items-center w-[50%]">
        <h1 className="font-[500] text-slate-50 pr-[50px] py-[50px]">
          Hi, {props.user.user_metadata.full_name}
        </h1>
        <img
          className="rounded-full w-[60px] h-[60px]"
          src={props.user.user_metadata.avatar_url}
        />
      </div>
    </nav>
  );
}
