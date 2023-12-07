import React from 'react';
import LowerBody from '../Components/LowerBody';
import UpperBody from '../Components/UpperBody';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const HomePage = () => {
   useNowPlayingMovies();

  return (
    <div>
      <UpperBody/>
      <LowerBody/>
    </div>
  )
}

export default HomePage