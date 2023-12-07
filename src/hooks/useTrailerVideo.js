import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from '../constant';
import { addKey } from "../store/MoviesSlices";
const useTrailerVideo=(id)=>{
  console.log(id);
   const dispatch = useDispatch();
    const backGroundVideo = async () => {
        const data = await fetch (`https://api.themoviedb.org/3/movie/${id}/videos`, API_options);
        const res = await data.json();
        
        const trailerVideo = res.results.filter((val)=>val.type=="Trailer")
        // console.log(trailerVideo[0].key);
        dispatch(addKey(trailerVideo[0].key))
    };
  
  
    useEffect(() => {
      backGroundVideo();
    },[]);
}
export default useTrailerVideo;