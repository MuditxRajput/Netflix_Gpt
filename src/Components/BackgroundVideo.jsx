import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const BackgroundVideo = ({ id }) => {
  useTrailerVideo(id);
  const VideoKey = useSelector((state) => state.movies?.key);

  return (
    <div className=" absolute w-screen h-screen overflow-hidden">
        <iframe
          className="w-screen aspect-video overflow-hidden  "
          src={`https://www.youtube.com/embed/${VideoKey}?autoplay=1&controls=0&showinfo=0&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
  );
};

export default BackgroundVideo;
