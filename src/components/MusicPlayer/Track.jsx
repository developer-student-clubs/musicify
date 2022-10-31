import React from "react";
import {BsDownload} from "react-icons/bs"

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex w-1/3 items-center justify-start">
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
      } hidden sm:block h-16 w-16 mr-4`}
    >
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <div className="flex flex-row gap-2">
        <p className="truncate text-gray-300">
          {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
        </p>
        <a href={activeSong?.hub?.actions[1]?.uri} download = "my.mp3">
          <BsDownload
            color="white"
            size={20}
            className="sm:block cursor-pointer"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Track;
