const PostCard = () => {
  return (
    <>
      <div className="border-t pt-3 flex flex-col gap-1 pb-4">
        <figure className="hidden">
          <img src="/img/test.jpg" alt="card-image" />
        </figure>
        <p className="font-medium text-xs">19 Jan 2001</p>
        <h3 className="font-medium">Migrating to Linear 101</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac felis
          egestas, congue tortor eget.
        </p>
        <div className="text-xs flex gap-2 flex-wrap mt-1">
          <div className="border border-black rounded-full w-fit h-fit px-2 font-medium">
            <p>Tech</p>
          </div>
          <div className="border border-black rounded-full w-fit h-fit px-2 font-medium">
            <p>Live</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
