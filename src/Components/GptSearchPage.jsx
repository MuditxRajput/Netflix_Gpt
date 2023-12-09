import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageVal } from "../LanguageVal";
import { API_options } from "../constant";
import openai from "../open";
import { setMoviesName, setSearchedMovies } from "../store/GptInfo";
import Language from "./Language";
import SearchedList from './SearchedList';
const GptSearchPage = () => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language?.lan);
  const GptSearch = useRef(null);
  const tmdbapiCall = async (movie) => {
    const val = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const res = await val.json();

    console.log(res.results);
    //  dispatch(setMoviesName(res.results));
    return res.results;
  };
  const handleGpt = async () => {
    const query =
      "Act as a Movies Recommendation system and suggest some movies for the query : " +
      GptSearch.current.value +
      "Only give me name of 5 movies , comma seperated like the example result given ahead , Example Result : Gadar , Sholay ,Don, Animal, 3idiots";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    // console.log(chatCompletion.choices);

    const gptSearchedMovies =
      chatCompletion.choices[0].message.content.split(",");
    // console.log(gptSearchedMovies);
    const tmdbcall = gptSearchedMovies?.map((val) => tmdbapiCall(val));
    const tmbdResult = await Promise.all(tmdbcall);
    dispatch(setSearchedMovies(tmbdResult));
    dispatch(setMoviesName(gptSearchedMovies));
  };

  return (
    <>
    <div className="bg-black h-screen">
      <div className=" w-auto h-52 bg-black ">
        <div className="flex justify-center flex-col w-full h-72 items-center ">
          <div className="rounded-lg flex p-3">
            <input
              ref={GptSearch}
              type="text"
              className="px-6 py-4 rounded-full w-[500px] outline-none "
              placeholder={LanguageVal[lan]?.Placeholder}
            />
            <div className="absolute ml-[400px]">
              <button
                className="bg-red-500 px-6 py-3 mt-1 hover:bg-red-700 rounded-full text-white font-semibold"
                onClick={handleGpt}
              >
                {LanguageVal[lan]?.Search}
              </button>
            </div>
          </div>
          <div>
            <Language />
          </div>
        </div>
      </div>
      <div><SearchedList/></div>
      </div>
    </>
  );
};

export default GptSearchPage;
