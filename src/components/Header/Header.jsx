import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TbShoppingCartFilled } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  const removeNav = (path) => {
    navigate(path);
    showNavbar();
  };
  return (
    <header>
      <span  className="logo">khanstore</span>
      <nav ref={navRef}>
        <ul>
          <li onClick={() => removeNav("/")}>Home</li>
          <li onClick={() => showNavbar()}>
            <HashLink to={"/#products"}>products</HashLink>
          </li>
          <li>
            {" "}
            <HashLink onClick={() => showNavbar()} to={"/#category"}>
              category
            </HashLink>{" "}
          </li>
          <li onClick={() => removeNav("/about")}>about</li>
          <li onClick={() => removeNav("/cart")}>cart</li>
          <li onClick={() => removeNav("/contact-us")}>contact</li>
        </ul>
        <span className="nav-btn close">
          <AiOutlineClose onClick={() => showNavbar()} />
        </span>
      </nav>
      <div className="header-icons">
        <span>
          <AiFillHome onClick={() => navigate("/")} />
        </span>
        <span>
          <TbShoppingCartFilled onClick={() => removeNav("/cart")} />
        </span>
        <span className="nav-btn">
          <GiHamburgerMenu onClick={() => showNavbar()} />
        </span>
      </div>
    </header>
  );
};

export default Header;
