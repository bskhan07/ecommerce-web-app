import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.scss";
import About from "../About/About";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    fetchCategory();
  }, []);
  const fetchCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.log(error));
  };
  const navigate = useNavigate();
  return (
    <>
      <Carousel
        autoPlay={true}
        showStatus={false}
        interval={2000}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        className="carousel"
      >
        <div className="heading">
          <h1>stylish watches</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus{" "}
          </p>
          <div className="buttons">
            <button onClick={() => navigate("/contact-us")}>Contact Us</button>
            <button onClick={() => navigate("/about")}>About Us</button>
          </div>
        </div>
        <div className="heading">
          <h1>stylish watches</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus{" "}
          </p>
          <div className="buttons">
            <button>Contact Us</button>
            <button>About Us</button>
          </div>
        </div>
        <div className="heading">
          <h1>stylish watches</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus{" "}
          </p>
          <div className="buttons">
            <button>Contact Us</button>
            <button>About Us</button>
          </div>
        </div>
        <div className="heading">
          <h1>stylish watches</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus{" "}
          </p>
          <div className="buttons">
            <button>Contact Us</button>
            <button>About Us</button>
          </div>
        </div>
      </Carousel>
      <About />
      <Category category={category} />
      {category?.map((e,i) => {
        return <Products category={e} key={i} />;
      })}
      <Contact />
    </>
  );
};

export default Home;
