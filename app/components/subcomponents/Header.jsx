const Header = () => {
  return (
    <header className="py-10 md:py-16">
      <h1 className="text-4xl md:text-6xl font-medium text-center">
        The <span className="text-[#f96d00]">Mars&apos;</span> Logbook
      </h1>
      <div className="flex gap-3 mt-2 md:mt-5 items-center w-fit mx-auto text-lg md:text-2xl italic font-medium">
        <h2>Welcome to my planet</h2>
        <img src="/img/mars.png" alt="title image nice" className="w-7" />
      </div>
    </header>
  );
};

export default Header;
