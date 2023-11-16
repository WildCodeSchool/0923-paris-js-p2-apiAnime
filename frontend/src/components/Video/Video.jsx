import React from "react";
import ReactPlayer from "react-player";
import internalSource from "../../assets/video/video.mp4";
import "./video.css";

function Video() {
  // const videoEnded = () => {
  //   alert("video terminer");
  // };
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={internalSource}
        controls
        playing
        muted
        width="120%"
        height="100%"
        className="player"
        // onEnded={videoEnded}
      />
    </div>
  );
}

export default Video;
