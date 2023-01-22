import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  deleteCartItem,
  updateCarts,
} from "../redux/Cart/Cart.actions";
import "./WishList.scss";

import { AiFillDelete, AiOutlineHome } from "react-icons/ai";

import { RiDeleteBinLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const WishList = () => {
  const { loading, cartData, totalPrice } = useSelector((store) => store.cart);
  console.log("totalPriceSelector:", totalPrice);
  console.log("cartData:", cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions());

    // }
  }, [cartData.length]);

  return (
    <>
      <div className="CartMainDiv">
        <div className="firstDivWish">
          <div className="CartDetailsWish">
            <p>My WishList:({cartData.length})</p>
            <Link to="/">
              <p style={{ fontSize: "30px" }}>
                <AiOutlineHome />
              </p>
            </Link>
          </div>
          {cartData.map((e, id) => (
            <div className="cartProDivWish" key={id}>
              <div className="CartImgDeatilsWish">
                <div className="CartImgDivWish">
                  <img src={e?.image[0]} alt={e.price} />
                </div>
                <div className="ProDivDetailWish">
                  {e.show ? (
                    <p className="StockWish">In Stock</p>
                  ) : (
                    <p className="OutStockWish">Out Of Stock</p>
                  )}

                  <p className="ProdivnameWish">
                    {e.name.length < 25 ? e.name : `${e.name.slice(0, 25)}...`}{" "}
                  </p>
                  <div className="ProdivpriceWish">
                    <h4>Price: ₹{e.price}</h4>
                    <p
                      style={{ color: "gray", textDecoration: "line-through" }}
                    >
                      {e.og_price}
                    </p>
                    <p
                      style={{
                        color: "green",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      17% off
                    </p>
                  </div>

                  <p className="ProdivratingWish">
                    Rating: {e.raitng ? e.raitng : "4.3"}
                  </p>
                </div>
              </div>
              <div className="QRdivDiv">
                <div className="QdivWish">
                {e.show ? (
                    <Button variant="light">Add To Cart</Button>
                  ) : (
                    <Button className="Explor" variant="light">Explore Similar</Button>
                  )}
                 
                </div>
                <div>
                  <Button
                    onClick={() => {
                      dispatch(deleteCartItem(e.id)).then(() =>
                        dispatch(cartActions())
                      );
                      // dispatch(cartActions());
                    }}
                    type="button"
                    variant="light"
                    marginTop="-7px"
                    className="delBTNWish"
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishList;
