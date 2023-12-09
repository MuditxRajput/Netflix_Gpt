import MovieCard from './MovieCard';
const MoviesList = ({ title, data }) => {
    console.log(data);
  return (
    data&&
    <div className="px-4 ">
      <h1 className="text-lg md:text-3xl  text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar  ">
        <div className="flex">
          {data?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default MoviesList;
