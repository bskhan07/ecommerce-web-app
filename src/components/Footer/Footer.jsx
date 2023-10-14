import React, { Fragment } from "react";
import "./footer.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer>
        <h2>Khanstore</h2>
        <div className="line"></div>
        <div className="footer-content">
          <div className="about-shop">
            <h3>about shop</h3>
            <ul>
              <li>
                <span>
                  <FaLocationDot />
                </span>
                <span>Address</span>
              </li>
              <li>
                <span>
                  <FaMobileAlt />
                </span>
                <span>+91 7791067072</span>
              </li>
              <li>
                <span>
                  <SlEnvolope />
                </span>
                <span>bk173498@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="information">
            <h3>information</h3>
            <p>
              Lorem ipsum dolor s Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Est vero quaerat sint saepe ullam beatae
              repudiandae officia, omnis natus. Beatae itaque, saepe cum impedit
              fugiat rem deleniti quidem magni! Mollitia. it, amet consectetur
              adipisicing elit. Eum
            </p>
          </div>
          <div className="social-media">
            <h3>social handales</h3>
            <ul>
              <li>
                <span>Facbook :</span>
                <AiFillFacebook />
              </li>
              <li>
                <span>Youtube :</span>
                <AiFillYoutube />
              </li>
              <li>
                <span>linkedin :</span>
                <AiFillLinkedin />
              </li>
              <li>
                <span>Twitter :</span>
                <BsTwitter />
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>© 2023 All Rights Reserved By KhanStore</p>
      </div>
    </>
  );
};

export default Footer;
