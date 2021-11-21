import React from "react";
// import SEO from "../components/SEO";
import { ContactForm } from "../components/ContactForm";
import Links from "../components/links";
import contact from "../images/contactimg.svg";
import "../styles/contact.css";

export const ContactPage = () => (
  <section className="contact" id="top">
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-8">
          <h1>Contact Details</h1>
          <p>
            Hi! How are you? Thank you for visiting my site. If you have any
            inquiries or feedback, please don't hesitate to reach out. I am
            available at the following social media outlets:
          </p>
          <Links />

          <a
            href="https://bit.ly/krunal-cv"
            target="_blank"
            rel="noreferrer"
            className="main-button btn btn-primary shadow-sm mt-2"
          >
            Download my resume
          </a>
        </div>
        <div className="col-lg-4 my-auto">
          <div className="img-container">
            <img src={contact} alt="Vector of a man and a phone" />
          </div>
        </div>
      </div>
    </div>
    <ContactForm />
  </section>
);
