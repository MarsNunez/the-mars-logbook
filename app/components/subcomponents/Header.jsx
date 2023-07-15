const Header = () => {
  return (
    <header className="py-10">
      <h1 className="text-4xl font-medium text-center">
        The <span className="text-[#f96d00]">Mars'</span> Logbook
      </h1>
      <div className="flex gap-3 mt-2 items-center w-fit mx-auto text-lg italic font-medium">
        <h2>Welcome to my planet</h2>
        <img src="/img/mars.png" alt="title image" className="w-7" />
      </div>
    </header>
  );
};

export default Header;
