import React from "react";
import { Hero } from "../components/landing/Hero";
import { Content } from "../components/landing/Content";
import { ContactForm } from "../components/ContactForm";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Content />
      <ContactForm />
    </>
  );
};
