import { useState } from "react";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

import girl from "../assets/images/girl.png";
import arrow from "../assets/images/arrow.png";
import rocket from "../assets/images/rocket.png";
import faq from "../assets/object/FAQ";

const HomePage = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleAnswer = (question: string) => {
    setExpanded((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };
  return (
    <>
      <Navbar>
        <Link to="/login">
          <button className="get-project">Get Projects</button>
        </Link>
        <button className="Onboard-Talend">Onboard Talent</button>
      </Navbar>
      <section className="home-page">
        <h1 className="main-heading">Success Stories</h1>
        <h2 className="sub-heading">
          Every success journey <br /> we've encountered
        </h2>
        <div className="show">
          <div className="show-item">
            <div className="disscunt-image">
              <img src={girl} alt="Image 1" className="show-image" />
            </div>
            <div className="discount-amount">
              <div className="dis-amount"> 40%</div>
              <p className="dis-amount-details">
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
            <div className="days-10">
              <div className="icon-rocket">
                <img src={rocket} alt="" />
              </div>
              <div className="day-content">
                <p className="days">10 DAYS</p>
                <p className="staff">Staff Development</p>
              </div>
            </div>

            <div className="discount-amount-2">
              <p className="dis-amount-2">
                $0.5 <span> MILLION</span>
              </p>
              <p className="dis-amount-details-2">
                Reduced client expenses by saving on hiring and employee costs
              </p>
            </div>
          </div>
          <div className="show-details">
            <h2 className="show-heding">
              Enhance fortune 50 company's insights teams research capabilities
            </h2>
            <div className="dots-container">
              <span className="dot white-dot"></span>
              <span className="dot gray-dot"></span>
              <span className="dot gray-dot"></span>
            </div>
            <button className="black-button">
              <p>Explore more</p>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </section>
      <section className="questions">
        <div className="qyestions-heading">
          <p className="mind">What's on your mind</p>
          <h1 className="main-question"> Ask Questions</h1>
        </div>
        <div className="all-question">
          {Object.entries(faq).map(([question, answer], index, array) => (
            <div key={question} className="question">
              <div className="question-header">
                <h2>{question}</h2>
                <button
                  className="toggle-btn"
                  onClick={() => toggleAnswer(question)}
                >
                  {expanded[question] ? "-" : "+"}
                </button>
              </div>
              <p className={`answer ${expanded[question] ? "show" : ""}`}>
                {answer}
              </p>
              {index !== array.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </section>
      <Fotter></Fotter>
    </>
  );
};

export default HomePage;
