import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const SearchedList = () => {
    const SearchedMovies = useSelector((state) => state.gpt?.SearchedMovies);
    const MoviesName = useSelector((state) => state.gpt?.moviesName);

    return (
        SearchedMovies && MoviesName && (
            <div className='bg-black'>
                {SearchedMovies?.map((movie, index) => (
                    <MoviesList
                        key={index}
                        data={movie}
                        title={MoviesName[index]}
                    />
                ))}
            </div>
        )
    );
}

export default SearchedList;
