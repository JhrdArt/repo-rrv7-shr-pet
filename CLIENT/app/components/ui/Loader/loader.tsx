interface Props {
  /*Props*/
}

const Loader: React.FC<Props> = (props) => {
  return (
    <div className="absolute -translate-x-1/2 left-1/2 z-10 w-full h-full flex bg-black/20 backdrop-blur-xl">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
