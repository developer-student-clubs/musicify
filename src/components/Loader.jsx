import CircleLoader from "react-spinners/CircleLoader";

const Loader = ({ title }) => (
  <div className="w-full flex mt-5 justify-center items-center flex-col">
    <CircleLoader
      color="#3e00f6"
      height={70}
      width={8}
      margin={3}
      speedMultiplier={1}
    />
    <h1 className="font-bold text-2xl text-white mt-4">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
