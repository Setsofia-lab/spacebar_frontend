import React, { useState } from "react";
import axios from "axios";
import "./homestyle.css";
import img1 from "./assets/M2.jpg";
import logo from "./assets/Spacebar logo (1).svg";

function App() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:3000",
      { phone: phone, email: email },
      { headers: { "content-type": "application/json" } }
    );
  };

  return (
    <div className="container">
      <div class="header">
        <img alt="logo" src={logo} />
        <nav className="navigation">
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Explore</p>
        </nav>
        <button class="btn">Contact Us</button>
      </div>

      {/* end of header */}
      <div className="bodycontainer">
        <div class="content">
          <h1>
            List your available spaces <br />
            to earn extra income
          </h1>
          <p>
            Rent unique and affordable spaces for your events. <br />
            Enter your email and phone number to receive <br /> updates on our
            services
          </p>
          <form className="form" onSubmit={sendData}>
            <input
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="tel"
              class="form-control"
              id="tel"
              placeholder="Enter phone number"
              name="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <button className="btn" id="btn" onClick={sendData}>
              Join Waitlist
            </button>
          </form>
        </div>

        <img src={img1} alt="" className="bannerImage" />
      </div>
    </div>
  );
}

export default App;
