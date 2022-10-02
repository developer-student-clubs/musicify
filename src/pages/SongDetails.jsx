import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useEffect, useRef } from "react";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const divRef = useRef(null);
  // useEffect(() => {
  //   divRef?.current?.scrollIntoView({ behavior: "smooth" });
  // });
  const { songid } = useParams();
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery(songid);
  const dispatch = useDispatch();
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songid);
  const handlePauseClick = (song, i) => {
    dispatch(playPause(false));
  };
  const handlePlayCLick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetchingRelatedSongs || isFetchingSongDetails)
    return <Loader title="Gathering Song Details..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col" ref={divRef}>
      <DetailsHeader songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No Lyrics Found
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayCLick}
      />
    </div>
  );
};

export default SongDetails;
