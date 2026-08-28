import cityofgod from "../assets/cityofgod.png";
import chaplin from "../assets/chaplin-camera.png";

const MovieQuote = () => {
  return (
    <section
      className="movie-quote"
    >
      <img
        src={cityofgod}
        alt="Movie"
        className="quote-clapper"
      />

      <div className="quote-content">
        <h2>
          MOVIES ARE THE
          <br />
          BEST KIND OF <span>ESCAPE.</span>
        </h2>
      </div>

      <img
        src={chaplin}
        alt="Charlie Chaplin with a movie camera"
        className="quote-chaplin"
      />
    </section>
  );
};

export default MovieQuote;