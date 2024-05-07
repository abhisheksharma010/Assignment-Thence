import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import tick from "../assets/images/tick.png";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let isValid = true;

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      setFormSubmitted(true);
    }
  };

  const isSubmitDisabled = !name || !email;

  useEffect(() => {
    if (formSubmitted && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (formSubmitted && countdown === 0) {
      const redirectTimer = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearTimeout(redirectTimer);
    }
  }, [formSubmitted, countdown, navigate]);

  return (
    <>
      <Navbar>
        {formSubmitted ? (
          <></>
        ) : (
          <Link to="/">
            <button className="ge-home">x</button>
          </Link>
        )}
      </Navbar>
      <section className="login">
        {formSubmitted ? (
          <div className="submitted">
            <img src={tick} alt="done" />
            <h1 className="main-heading-login">Success submitted</h1>
            <h2 className="sub-heading-login">Congratulations</h2>
            <p className="submitted-detail">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to you shortly with
              updates.
            </p>
            <p className="redirect">
              Redirecting you to HomePage in <span>{countdown}</span> Seconds
            </p>
          </div>
        ) : (
          <>
            <h1 className="main-heading-login">Registration Form</h1>
            <h2 className="sub-heading-login">
              Every success journey <br /> we've encountered
            </h2>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                />

                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <div className="error-message">{emailError}</div>
                )}
                <button
                  type="submit"
                  className={`black-button-login ${
                    isSubmitDisabled ? "disabled" : ""
                  }`}
                  disabled={isSubmitDisabled}
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Login;
