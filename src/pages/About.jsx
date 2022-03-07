import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import  '../styles/Sass/aboutPage.scss';


const About = () => {
  return (
    <div>
      <Nav />
      <div className="main-container">
        <h1 className="title">Concoce nuesta historia</h1>
        <div className="cards-container">

          <div className="grey-one">
          </div>
          <div className="white-one">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique quisquam explicabo sit nam doloribus modi dignissimos! Praesentium officiis cum ad in et? Autem unde, ducimus repudiandae commodi laudantium enim!</p>
          </div>

          <div className="grey-two">
          </div>

          <div className="grey-three">
          </div>
          <div className="white-two">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique quisquam explicabo sit nam doloribus modi dignissimos! Praesentium officiis cum ad in et? Autem unde, ducimus repudiandae commodi laudantium enim!</p>
          </div>

          <div className="grey-four">
          </div>
          <div className="white-three">
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
