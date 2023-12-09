import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const BackgroundVideo = ({ id }) => {
  useTrailerVideo(id);
  const VideoKey = useSelector((state) => state.movies?.key);

  return (
    <div className="absolute w-full h-full aspect-video  ">
      {VideoKey && (
        <iframe
          className=" w-full h-full overflow-hidden  aspect-video   "
          src={`https://www.youtube.com/embed/${VideoKey}?autoplay=1&controls=0&showinfo=0&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default BackgroundVideo;
