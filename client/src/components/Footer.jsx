
const Footer = () => {
  return (
    <footer className="cinema-footer">
      <div className="film-strip film-strip-top"></div>

      <div className="footer-content">
        <div className="footer-brand">
          <h2>NY<span>X</span></h2>
          <p>
            Where every story finds its screen.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>EXPLORE</h4>
            <a href="#">Movies</a>
            <a href="#">Genres</a>
            <a href="#">Trending</a>
          </div>

          <div>
            <h4>ABOUT</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ReelScape. All rights reserved.</p>
        
        <p className="film-text">LIGHTS • CAMERA • ACTION</p>
      </div>

      
    </footer>
  );
};

export default Footer;