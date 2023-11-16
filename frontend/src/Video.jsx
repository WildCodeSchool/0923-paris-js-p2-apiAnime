import React from "react";
import ReactPlayer from "react-player";
import internalSource from "./assets/video/video.mp4";
import "./video.css";

function Video() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={internalSource}
        playing
        controls
        muted
        width="100%"
        height="100%"
        className="player"
      />
    </div>
  );
}

export default Video;
