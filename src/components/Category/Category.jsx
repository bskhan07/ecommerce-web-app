import React from "react";
import "./category.scss";
import { useNavigate } from "react-router-dom";
const Category = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div id="category" className="category">
      {category?.map((e, i) => {
        return (
          <div
            onClick={() => navigate(`/category/${e}`)}
            key={i}
            className="cat-card"
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
