import React from "react";
import ReactPlayer from "react-player";
import internalSource from "../../assets/video/video.mp4";
import "./video.css";

function Video() {
  const videoEnded = () => {
    alert("video terminer");
  };
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={internalSource}
        controls
        playing
        muted
        width="15%"
        height="15%"
        className="player"
        onEnded={videoEnded}
      />
    </div>
  );
}

export default Video;
