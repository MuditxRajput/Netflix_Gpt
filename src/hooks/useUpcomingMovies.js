import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from '../constant';
import { addUpComingMovies } from '../store/MoviesSlices';
const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
              const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_options);
              const res = await data.json();
              dispatch(addUpComingMovies(res.results));
  
    }
    useEffect(()=>{
      getNowPlayingMovies();
  
    },[]);
}
export default useUpcomingMovies;




