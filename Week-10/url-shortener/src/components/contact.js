import React from "react";
import ContactImg from "../images/contact.jpg";
import "../components/style/contact.css";
import { toast } from "react-toastify";

function Contact() {
  const form = document.querySelector(".contact-form");
  const formSubmit = (event) => {
    event.preventDefault();
    toast.info("Form has been submitted. We will contact you shortly", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    form.reset();
  };

  return (
    <>
      <div className="contact-body">
        <div className="contact">
          <img src={ContactImg} alt="contact-us" className="contact-img" />
        </div>
        <form className="contact-form" onSubmit={formSubmit}>
          <h1>Let's start a conversation</h1>
          <h3 style={{ margin: "12px 22px" }}>
            Please note all fields are required
          </h3>
          <label>
            Name :
            <input
              className="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email :
            <input
              className="email"
              type="email"
              placeholder="Enter your mail"
              required
            />
          </label>
          <label>
            Phone Number :
            <input
              className="number"
              type="text"
              placeholder="Enter your number"
              required
            />
          </label>
          <label>
            Concern :
            <input
              className="concern"
              type="text"
              placeholder="Enter your concern"
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Contact;
