import React from "react";

export default function MainForm(props) {
  return (
    <div className="mx-auto">
      <h2 className="text-main font-[500] text-[25px]">Edit Here</h2>
      <p className="text-slate-50 text-[15px]">
        description bgrbong rgr lorem ipsum sit amet sol idor valar morghulis
        valar dohairis
      </p>
      <form className="bg-[#2c2e30] rounded-lg w-[50%]">
        {props.data.map((item, i) => {
          return item.map((subitem, j) => {
            console.log(subitem[j]);
            return (
              <div className="pt-[20px]" key={`${i}_${j}`}>
                <label className="text-main px-[20px]">{subitem}</label>
                <input
                  className="bg-grey--light border-none w-[30%] rounded-lg py-[5px] px-[10px]"
                  defaultValue={subitem}
                />
                <button
                  onClick={props.clickHandler}
                  className="bg-accent border-none w-[30%] rounded-lg px-[10px] py-[8px] font-[600] text-gray-800 my-[30px]"
                >
                  Configure it!
                </button>
              </div>
            );
          });
        })}
      </form>
    </div>
  );
}
