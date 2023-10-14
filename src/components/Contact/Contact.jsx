import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-us">
      <h2>contact us</h2>
      <form action="">
        <input required placeholder="Name" type="text" />
        <input required placeholder="Phone Numeber" type="number" />
        <input required placeholder="Email" type="email" />
        <input required placeholder="Message" type="text" />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Contact;
