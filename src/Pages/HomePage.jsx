import React from 'react';
import LowerBody from '../Components/LowerBody';
import UpperBody from '../Components/UpperBody';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
// import { default as usePopularMovies, default as useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from '../Components/GptSearchPage';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const HomePage = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useUpcomingMovies();
   const search = useSelector((store)=>store.gpt.search);
  //  console.log(search);
  //  useTopRatedMovies();

  return (
    <div>
      {search==true? <GptSearchPage/> :<><UpperBody/>
      <LowerBody/> </>}
    </div>
  )
}

export default HomePage