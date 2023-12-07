import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from '../constant';
import { addNowPlayingMovies } from '../store/MoviesSlices';

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
              const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_options);
              const res = await data.json();
              dispatch(addNowPlayingMovies(res.results));
  
    }
    useEffect(()=>{
      getNowPlayingMovies();
  
    },[]);
}
export default useNowPlayingMovies;




