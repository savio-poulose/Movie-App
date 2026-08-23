import octopus from "../assets/octopus.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="octopus-wrapper">
        {/* Replace the src below with the actual path to your octopus image */}
        <img 
          src={octopus} 
          alt="Sketched Octopus" 
          className="octopus-image" 
        />
        
        {/* Black stars replacing the orange dots */}
        <span className="star star-1">★</span>
        <span className="star star-2">★</span>
        <span className="star star-3">★</span>
        <span className="star star-4">★</span>
        <span className="star star-5">★</span>
        <span className="star star-6">★</span>
        <span className="star star-7">★</span>
      </div>

      <div className="text-wrapper">
        <h1 className="hero-title"><span className="explore">EXPLORE</span><br/>MOVIES</h1>
      </div>
    </div>
  )
}

export default Hero;