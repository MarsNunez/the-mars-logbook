import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="screen">
      <Navbar page="aboutpage" />
      <img
        src="/img/me.jpg"
        alt="me-img"
        className="w-48 md:w-56 rounded-full mx-auto mt-10 shadow-2xl"
      />
      <p className="text-center mt-10 text-2xl md:text-3xl font-medium">
        Mars Nunez
      </p>
      <p className="w-fit mx-auto text-center mt-5 md:text-lg italic">
        I need a gun to keep myself among <br />
        The poor people who are burning in the sun <br />
        But they ain't got a chance <br />
        They ain't got a chance <br />
        I need a gun <br />
        'Cause all I do is dance <br />
        'Cause all I do is dance...
      </p>
    </div>
  );
};

export default AboutPage;
