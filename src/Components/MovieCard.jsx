import React from 'react';
import { POSTER_IMG_URL } from '../constant';
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={POSTER_IMG_URL + posterPath} className='rounded-lg' />
    </div>
  );
};
export default MovieCard;
