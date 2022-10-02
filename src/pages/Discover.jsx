import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useRef, useEffect } from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useSelector } from "react-redux";
const Discover = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  });
  const divRef = useRef(null);
  if (isFetching) return <Loader title="Loading Songs" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col" ref={divRef}>
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover Songs
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
