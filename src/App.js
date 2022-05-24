import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homestyle.css";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./assets/M2.jpg";
import logo from "./assets/Spacebar.svg";

function App() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
      setError("");
    }, 5000);
  }, [error, successMessage]);

  const sendData = async (e) => {
    e.preventDefault();
    await axios
      .post(
        // "https://spacebarapi.herokuapp.com/",
        "http://localhost:3000/",
        { phone: phone, email: email },
        { headers: { "Content-type": "application/json" } }
      )
      .then((response) => {
        setSuccessMessage(response);
      })
      .catch((err) => {
        setError(err);
      });

    setEmail("");
    setPhone("");
  };

  return (
    <div className="container">
      <div className="header">
        <img alt="logo" src={logo} />
        <nav className="navigation">
          <p> Email: friends@ourspacebar.com </p>
          <p> Tel: 0505715339/0200498056 </p>
        </nav>
      </div>

      {/* end of header */}
      <div className="bodycontainer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="content">
                <h1 className="text-bold">
                  List your available spaces <br />
                  to earn extra income
                </h1>
                <p>
                  Rent unique and affordable spaces for your events - parties,{" "}
                  <br />
                  weddings ceremonies, corporate events, networking events, etc{" "}
                  <br />
                  Enter your email and phone number to receive <br /> updates on
                  our services
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
                    className="form-control"
                    id="tel"
                    placeholder="Enter phone number"
                    name="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />

                  <button className="btn mb-2" id="btn" onClick={sendData}>
                    Join Waitlist
                  </button>
                  {successMessage && (
                    <p>
                      You have successfully joined the waitlist. Look out for
                      SpaceBar!
                    </p>
                  )}
                  {error && <p>There was an error with your request</p>}
                </form>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={img1} alt="" className="bannerImage" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
