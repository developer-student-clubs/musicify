import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { useEffect, useRef } from "react";
const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const divRef = useRef(null);
  // useEffect(() => {
  //   Window.scrollTo(0, 0);
  // });
  if (isFetchingArtistDetails)
    return <Loader title="Gathering Artist Details..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col" ref={divRef}>
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
