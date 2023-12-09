import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from '../constant';
import { addPopularMovies } from '../store/MoviesSlices';
const usePopularMovies=()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
              const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_options);
              const res = await data.json();
              dispatch(addPopularMovies(res.results));
  
    }
    useEffect(()=>{
      getNowPlayingMovies();
  
    },[]);
}
export default usePopularMovies;




