import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { LanguageVal } from '../LanguageVal';
import openai from '../open';
import Language from "./Language";
const GptSearchPage = () => {
  const lan = useSelector((state) => state.language?.lan);
  const GptSearch = useRef(null);

  const handleGpt = async() => {
    const query = "Act as a Movies Recommendation system and suggest some movies for the query : " + GptSearch.current.value + "Only give me name of 5 movies , comma seperated like the example result given ahead , Example Result : Gadar , Sholay ,Don, Animal, 3idiots";
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          { role: 'user', content: query },
        ],
        model: 'gpt-3.5-turbo',
      });
      console.log(chatCompletion.choices);
    
  
  
  };
  
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex justify-center flex-col w-full h-72 items-center ">
        <div className="rounded-lg flex p-3">
          <input
          ref={GptSearch}
            type="text"
            className="px-6 py-4 rounded-full w-[500px] outline-none "
            placeholder={LanguageVal[lan]?.Placeholder}
          />
          <div className="absolute ml-[400px]">
            <button className="bg-red-500 px-6 py-3 mt-1 hover:bg-red-700 rounded-full text-white font-semibold" onClick={handleGpt}>
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
