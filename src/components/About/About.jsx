import React from "react";
import "./about.scss";
import { FaShippingFast } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="banner">
        <div className="item">
          <FaShippingFast />
          <h3>FAST DELIVERY</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="item">
          <HiMiniWrenchScrewdriver />
          <h3>24X7 CUSTOMER SUPPORT</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="item">
          <BsShieldFillCheck />
          <h3>best quality</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="item">
          <BsCoin />
          <h3>free shiping</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
      <div className="second-aboutus">
        <div className="img-wrapper">
          <div className="img1">
            <img
              src="https://staticimg.titan.co.in/Titan/Catalog/1698KM02_1.jpg?impolicy=pqmed&imwidth=640"
              alt=""
            />
          </div>
          <div className="img2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsemCNZTnmcXQkVmcaDVsIUU8zcABksOPkaxHHe1HQ4kLw2cdbsxZW41HzqKO7uiNMnw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="about-content">
          <h2>about our store</h2>
          <p>
            There are many variations of passages of Lorem Ipsum There are many
            variations of passages of Lorem Ipsum
          </p>
          <button onClick={() => navigate("/contact-us")}>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default About;
