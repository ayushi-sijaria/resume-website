import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import ReactLogo from "../../assets/images/ReactLogo.png";
import HTMLLogo from "../../assets/images/HTML5Logo.png";
import CSSLogo from "../../assets/images/CSSLogo.png";
import BootstrapLogo from "../../assets/images/BootstrapLogo.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Skills = () => {
  return (
    <div className="skills height-100-vh ">
      <p className="h1">Skills</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="skill d-flex">
            <div>
              <h3>ReactJS</h3>
              <ul>
                <li>
                  React is a third party library to create reusable user
                  interfaces.
                </li>
                <li>
                  Working as a React UI developer in Wizroots Technologies.
                </li>
                <li>
                  Worked on admin panel creation of a client website in ReactJS.
                </li>
                <li>Worked on Neoastra company website in ReactJS.</li>
                <li>Completed the ReactJS certification from Udemy.</li>
              </ul>
            </div>
            <div className="d-flex">
              <img src={ReactLogo} alt="React Logo" height={"200px"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill d-flex">
            <div>
              <h3>HTML</h3>
              <ul>
                <li>HTML is the standard markup language for Web pages.</li>
                <li>Working as a UI developer in Wizroots Technologies.</li>
                <li>Involved in Website development for Ryzklytix.</li>
                <li>Worked as UI developer for Adobe.</li>
                <li>
                  Completed The Frontend Development course certification from
                  Udemy.
                </li>
              </ul>
            </div>
            <div className="d-flex">
              <img src={HTMLLogo} alt="React Logo" height={"200px"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill d-flex">
            <div>
              <h3>CSS</h3>
              <ul>
                <li>
                  CSS is the language we use to style an HTML document. It
                  describes how HTML elements should be displayed.
                </li>
                <li>Used CSS in all projects for styling.</li>
                <li>Completed the CSS certification from Udemy.</li>
              </ul>
            </div>
            <div className="d-flex">
              <img src={CSSLogo} alt="React Logo" height={"200px"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skill d-flex">
            <div>
              <h3>Bootstrap</h3>
              <ul>
                <li>
                  Bootstrap 5 is the newest version of Bootstrap, which is the
                  most popular HTML, CSS, and JavaScript framework for creating
                  responsive, mobile-first websites.
                </li>

                <li>Used Bootstrap for in Neoastra company website.</li>
                <li>Completed the Bootstrap certification from Udemy.</li>
              </ul>
            </div>
            <div className="d-flex">
              <img src={BootstrapLogo} alt="React Logo" height={"200px"} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Skills;
