import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';
const LowerBody = () => {
  const movies = useSelector((state)=>state.movies);
  if(movies.length==0) return;
  return (
    movies.nowPlayingMovies &&
    <div className='bg-black'>
      <div className=" -mt-16  relative z-20">
        <MoviesList
          title ="Now Playing" data ={movies.nowPlayingMovies}
        />
        <MoviesList
          title ="Popular Movies" data ={movies.popularMovies}
        />
        <MoviesList
          title ="Upcoming Movies" data ={movies.upComingMovies}
        />
        <MoviesList
          title ="Now Playing" data ={movies.nowPlayingMovies}
        />
      </div>
    </div>
  )
}

export default LowerBody