import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”<br></br> - Aristotle</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                  <h5>Web Development</h5>
                  <h6>I have developed modern web interfaces with React and JavaScript, combining semantic HTML and well-structured CSS to create responsive, maintainable, and user-friendly applications.</h6>
                            </div>
                            <div className="item">
                                <h5>Mobile App Development</h5>
                                <h6>I have worked with Kotlin and Flutter to build mobile applications, including a simple chat app focused on basic real-time interaction and user interface design.</h6>
                            </div>
                            <div className="item">
                  <h5>Backend Development</h5>
                  <h6>I have experience creating server-side applications with Laravel and Node.js, including RESTful APIs, authentication, and database management for web platforms.</h6>
                            </div>
                            <div className="item">
                                <h5>Database Management</h5>
                                <h6>I have experience managing databases with MySQL,MongoDB and Postgres for web platforms.</h6>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
