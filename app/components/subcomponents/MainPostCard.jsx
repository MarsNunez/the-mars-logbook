const MainPostCard = () => {
  return (
    <div>
      <figure className="h-56 w-full relative">
        <img
          src="/img/test2.jpeg"
          alt="MainPostImage"
          className="h-full w-full object-cover object-center"
        />
        <div className="px-5 pb-5 pt-10 bg-gradient-to-t from-gray-700 to-transparent absolute bottom-0 text-white w-full">
          <p className="text-xs">Jan 20 2022</p>
          <h3 className="font-medium my-1">Adventures from my past</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            felis egestas, congue tortor eget.
          </p>
        </div>
      </figure>
    </div>
  );
};

export default MainPostCard;
