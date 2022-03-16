import "../styles/pages/_contact.scss"
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Typography } from "@mui/material";

const Contact = () => {
    return (
      <>
        <Nav />
        <div className="contact-container">
            <Typography className="contact-title" variant="h1">Comunícate con nosotros!</Typography>
            <ContactForm className="contact-form" />
        </div>
        <Footer />
      </>
    );
  };
  
  export default Contact;