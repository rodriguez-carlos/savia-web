import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import  '../styles/Sass/aboutPage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const About = () => {
  return (
    <div>
      <Nav />
      <div className="main-container">
        <h1 className="title">Conoce nuestra historia</h1>
        <div className="cards-container">

          <div className="grey-one">
          </div>
          <div className="white-one" data-aos="fade-right">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique quisquam explicabo sit nam doloribus modi dignissimos! Praesentium officiis cum ad in et? Autem unde, ducimus repudiandae commodi laudantium enim!</p>
          </div>

          <div className="grey-two" data-aos="fade-left">
          </div>

          <div className="grey-three" data-aos="fade-right">
          </div>
          <div className="white-two" data-aos="fade-right">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique quisquam explicabo sit nam doloribus modi dignissimos! Praesentium officiis cum ad in et? Autem unde, ducimus repudiandae commodi laudantium enim!</p>
          </div>

          <div className="grey-four" data-aos="fade-right">
          </div>
          <div className="white-three" data-aos="fade-left">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique quisquam explicabo sit nam doloribus modi dignissimos! Praesentium officiis cum ad in et? Autem unde, ducimus repudiandae commodi laudantium enim!</p>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
