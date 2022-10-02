import React, { useRef, useEffect } from "react";
import { BsAlarmFill } from "react-icons/bs";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  if (!activeSong?.hub?.actions) {
    return <div></div>;
  }
  const ref = useRef(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  const handleSpeed = () => {
    ref.current.playbackRate = 5;
  };
  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);
  return (
    <div>
      <a href={activeSong?.hub?.actions[1]?.uri}>{/* <BsAlarmFill /> */}</a>
      <audio
        src={activeSong?.hub?.actions[1]?.uri}
        ref={ref}
        loop={repeat}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
      />
    </div>
  );
};

export default Player;
