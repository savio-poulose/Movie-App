// import clapperboard from "../assets/clapperboard.png";
import cityofgod from "../assets/cityofgod.png"
import chaplin from "../assets/chaplin-camera.png";

const MovieQuote = () => {
  return (
    <section className="movie-quote">

      {/* Left image */}
      <img
        src={cityofgod}
        alt="Movie clapperboard"
        className="quote-clapper"
      />

      {/* Center content */}
      <div className="quote-content">

        {/* <p className="quote-small">
          THE MAGIC OF CINEMA
        </p> */}

        <h2>
          MOVIES ARE THE
          <br />
          BEST KIND OF <span>ESCAPE.</span> 
        </h2>

        {/* <div className="quote-line"></div> */}

        {/* <p className="quote-sub">
          Sit back. Press play. Forget the world for a while.
        </p> */}

      </div>

      {/* Right image */}
      <img
        src={chaplin}
        alt="Charlie Chaplin with a movie camera"
        className="quote-chaplin"
      />

    </section>
  );
};

export default MovieQuote;