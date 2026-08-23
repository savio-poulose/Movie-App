import clapperboard from "../assets/clapperboard.png";
import chaplin from "../assets/chaplin-camera.png"
const MovieQuote = () => {
  return (
    <section className="movie-quote">
      
      {/* Left image */}
      <img
        src={clapperboard}
        alt="Movie clapperboard"
        className="quote-clapper"
      />

      {/* Center text */}
      <div className="quote-content">
        <p className="quote-small">THE MAGIC OF CINEMA</p>

        <h2>
          “Movies are the
          <br />
          best kind of <span>escape.</span>”
        </h2>

        <div className="quote-line"></div>

        <p className="quote-sub">
          Sit back. Press play. Forget the world for a while.
        </p>
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