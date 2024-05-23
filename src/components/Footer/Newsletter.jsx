import React, { useRef } from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Newsletter = () => {
  const form = useRef();

  const handleSubmit = () => {
    var data = document.getElementById("email").value;
    if (data == "") Swal.fire("Please enter your email address");
    else Swal.fire("Thank you for your response!!!");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xadxh6a", "template_3s8kjfa", form.current, {
        publicKey: "X2FuApS1j73IVSS5k",
      })
      .then(
        () => {
          handleSubmit();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // e.target.reset();
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates!</p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="app__newsletter-input flex__center"
      >
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          name="user_email"
          autoComplete="off"
        />

        <button className="custom__button" onClick={handleSubmit}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
