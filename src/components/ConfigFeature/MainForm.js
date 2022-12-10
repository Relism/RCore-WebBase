import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactLoading from "react-loading";

import { api, supersecret } from "./ConfigPage";
import ConfigInput from "./ConfigInput";

export function SuccessPopUp(props) {
  const variants = {
    enter: {
      y: "-100vh",
    },
    visible: {
      y: "0",
      transition: 0.1,
      type: "spring",
      damping: 25,
      stifness: 500,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="startpop"
        className="relative -top-[24vh] z-10 bg-green-600 text-slate-50 px-[30px] py-[7px] w-fit rounded-lg mx-auto"
        variants={variants}
        initial="enter"
        animate="visible"
        exit={{ opacity: 0 }}
      >
        {props.entry} Updated!
      </motion.div>
    </AnimatePresence>
  );
}

export default function MainForm(props) {
  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [hasUpdated, setHasUpdated] = useState({ entry: "", updated: false });
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (props.configs.length !== 0) {
      setIsLoading(false);
    }
  }, [props.configs]);

  return (
    <div className="z-0">
      {hasUpdated.updated && <SuccessPopUp entry={hasUpdated.entry} />}
      <h2 className="text-main font-[500] text-[30px] text-center mb-[25px]">
        Configure Your Plugins Here
      </h2>
      <div className="bg-[#2c2e30] rounded-lg w-[50%] mx-auto pt-[30px]">
        {isLoading && (
          <ReactLoading
            type="bubbles"
            color="#51FFFD"
            width={"25%"}
            height={"1%"}
            className="mx-auto"
          />
        )}
        {props.configs.map((item, i) => {
          return (
            <ConfigInput
              key={i}
              changeHandler={(event) => {
                inputRef.current = event.target.value;
                setHasChanged(true);
              }}
              clickHandler={() => {
                console.log(item[0]);
                console.log(inputRef.current);
                api
                  .get(
                    `/updateEntry/?authtoken=${props.authToken}&entry=${item[0]}&value=${inputRef.current}&supersecret=${supersecret}`
                  )
                  .then((res) => {
                    console.log(res);
                    setHasUpdated({ updated: true, entry: item[0] });

                    setTimeout(() => {
                      setHasUpdated({ ...hasUpdated, updated: false });
                    }, 2000);
                  })
                  .catch((err) => console.log(err));
              }}
              entry={item[0]}
              value={item[1]}
              changed={hasChanged}
            />
          );
        })}
      </div>
    </div>
  );
}
