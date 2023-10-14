import React, { useEffect, useState } from "react";
import "./products.scss";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart, calcualtion } from "../../redux/reducer";

const Products = ({ category }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [category]);
  const fetchProducts = () => {
    fetch(
      `https://fakestoreapi.com/products/category/${category ? category : id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const handler = (options) => {
    toast.success("Add to Cart");
    dispatch(addToCart(options));
    dispatch(calcualtion());
  };

  return (
    <div id="products" className="products-container">
      <h1>{category ? category : id}</h1>
      {products?.map((e, i) => {
        return (
          <div key={i} className="card">
            <h3 onClick={() => navigate(`/product/${e.id}`)}>{e.title}</h3>
            <div onClick={() => navigate(`/product/${e.id}`)} className="price">
              <span>price</span>
              <span>{e.price} $</span>
            </div>
            <div onClick={() => navigate(`/product/${e.id}`)} className="img">
              <img src={e.image} alt="image" />
            </div>
            <button onClick={() => handler({ e, quantity: 1 })}>
              add to cart
            </button>
            <Toaster />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
