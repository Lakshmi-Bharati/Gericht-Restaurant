import React, { useRef } from "react";
import "./BookTable.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const BookTable = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xadxh6a", "template_0v0y5hh", form.current, {
        publicKey: "X2FuApS1j73IVSS5k",
      })
      .then(
        () => {
          Swal.fire("Congratulations!!! Your table has been booked!");
          // console.log("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="app__table flex__center" id="book">
      <div className="app__table-content">
        <h1 className="headtext__cormorant">Book a Table </h1>
        <p className="p__opensans" id="p__book">
          Please fill the form below accurately to enable us serve you better!..
          welcome!
        </p>
        <form className="table__form" onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            required
            className="table__input"
            placeholder="Enter your name"
            name="name"
            autoComplete="off"
          />

          <input
            type="email"
            required
            className="table__input"
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
          />

          <input
            type="tel"
            required
            className="table__input"
            placeholder="Enter your contact number"
            name="phone"
            autoComplete="off"
          />

          <input
            type="number"
            required
            className="table__input"
            placeholder="#of Guests"
            name="guest"
            autoComplete="off"
          />

          <select name="reser" id="" className="table__input" required>
            <option>Reservation Type</option>
            <option>Dinner</option>
            <option>VIP</option>
            <option>Birthday/Anniversary</option>
            <option>Nightlife</option>
            <option>Private</option>
            <option>Wedding</option>
            <option>Corporate</option>
            <option>Holiday</option>
          </select>

          <input
            type="submit"
            value="Submit"
            className="custom__button table__button"
          />
        </form>
      </div>
    </div>
  );
};

export default BookTable;
