import React, { useEffect, useState } from "react";
import "./singleproduct.scss";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [e, setSingleProduct] = useState();

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  const fetchSingleProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((error) => console.log(error));
  };

  const addTocartHandler = (options) => {
    dispatch(addToCart(options));
    toast.success("Add to Cart");
  };
  return (
    <>
      <div className="singleProduct">
        <div className="left">
          <img src={e?.image} alt="" />
        </div>
        <div className="right">
          <h2>{e?.title}</h2>
          <h2>$ {e?.price}</h2>
          <div className="add-to-cart">
            <button
              onClick={() => addTocartHandler({ e, quantity: 1 })}
              className="checkout"
            >
              add to cart
            </button>
          </div>
          <div className="line"></div>
          <div className="cat">
            <span>category :</span>
            <span>{e?.category}</span>
          </div>
        </div>
      </div>
      <Products category={e?.category} />
      <Toaster />
    </>
  );
};

export default SingleProduct;
