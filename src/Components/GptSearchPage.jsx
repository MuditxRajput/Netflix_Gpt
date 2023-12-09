import React from "react";
import { useSelector } from "react-redux";
import { LanguageVal } from '../LanguageVal';
import Language from "./Language";

const GptSearchPage = () => {
  const lan = useSelector((state) => state.language?.lan);
  console.log("Current lan:", lan);
  console.log("LanguageVal:", LanguageVal);
  console.log("Hindi Search:", LanguageVal.Hindi.Search);

  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex justify-center flex-col w-full h-72 items-center ">
        <div className="rounded-lg flex p-3">
          <input
            type="text"
            className="px-6 py-4 rounded-full w-[500px] outline-none "
            placeholder={LanguageVal[lan]?.Placeholder}
          />
          <div className="absolute ml-[400px]">
            <button className="bg-red-500 px-6 py-3 mt-1 hover:bg-red-700 rounded-full text-white font-semibold">
              {LanguageVal[lan]?.Search}
            </button>
          </div>
        </div>
        <div>
          <Language />
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
