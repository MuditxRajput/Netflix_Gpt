import React from 'react';
import { useSelector } from 'react-redux';
import BackgroundVideo from './BackgroundVideo';
import VideoInfo from './VideoInfo';

const UpperBody = () => {
  const movieData = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movieData || movieData.length === 0) {
    // You can return some loading content or an error message
    return <div>Loading...</div>;
  }

  // Check if the first movie is defined
  const mainMovie = movieData[2];
  if (!mainMovie) {
    // You can return some loading content or an error message
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackgroundVideo id={mainMovie.id} />
      <VideoInfo
        title={mainMovie.original_title}
        desc={mainMovie.overview}
      />
    </div>
  );
};

export default UpperBody;
