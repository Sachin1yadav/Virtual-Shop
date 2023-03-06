import { Button, useToast } from "@chakra-ui/react";
import { AiFillDelete, AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { updateUser } from "../../redux/Auth/auth.actions";

import "./Wishlist.scss";
const Wishlist = () => {
  const { userData } = useSelector((val) => val.authUser);
  const user = userData
  const wishData = user.wishlist;
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = (itemDetail) => {
    toast({
      title: "Added to Cart",
      description: "We've added this item to Cart",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
    // eslint-disable-next-line array-callback-return
    let newWishlist = userData.wishlist.filter(el=>{
      if(el.id!==itemDetail.id){
        return el
      }
    })
    userData.wishlist=newWishlist
    userData.cart.push(itemDetail)
    dispatch(updateUser(userData.id,{cart:userData.cart,wishlist:newWishlist}))
  };

  const removeWishFun = (e) => {
    // eslint-disable-next-line array-callback-return
    let newWishdata = wishData.filter((el) => {
      if (el.id !== e.id) {
        return el;
      }
    });
    user.wishlist = newWishdata;
    dispatch(updateUser(user.id,{wishlist:user.wishlist}));
  };

  return (
    <>
      <Navbar />
      <div className="CartMainDiv" mt="80px">
        <div className="firstDivWish">
          <div className="CartDetailsWish">
            <p>My WishList:({wishData?.length})</p>
            <Link to="/">
              <p style={{ fontSize: "30px" }}>
                <AiOutlineHome />
              </p>
            </Link>
          </div>
          {wishData?.length === 0 ? (
            <div>
              <img
                style={{ margin: "auto" }}
                src="https://2.bp.blogspot.com/-QfSOClZc8r0/XNr6srFlzjI/AAAAAAAAGlA/lzs505eFFiEdyAytzKkMabdUTihKywcqwCLcBGAs/s1600/EXAM360%2B-%2BNo%2BWishlist.png"
                alt="Your Wish list is Empty!!"
              />
            </div>
          ) : (
            <div>
              {wishData?.map((item, id) => (
                <div className="cartProDivWish" key={id}>
                  <div className="CartImgDeatilsWish">
                    <div className="CartImgDivWish">
                      <img src={item?.image[0]} alt={item.price} />
                    </div>
                    <div className="ProDivDetailWish">
                      {item.show ? (
                        <p className="StockWish">In Stock</p>
                      ) : (
                        <p className="OutStockWish">Out Of Stock</p>
                      )}
                      <p className="ProdivnameWish">
                        {item.name.length < 25
                          ? item.name
                          : `${item.name.slice(0, 25)}...`}{" "}
                      </p>
                      <div className="ProdivpriceWish">
                        <h4>Price: ₹{item.price}</h4>
                        <p
                          style={{
                            color: "gray",
                            textDecoration: "line-through",
                          }}
                        >
                          {item.og_price}
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
                        Rating: {item.raitng ? item.raitng : "4.3"}
                      </p>
                    </div>
                  </div>
                  <div className="QRdivDiv">
                    <div className="QdivWish">
                      {item.show ? (
                        <Button variant="light" onClick={() =>addToCart(item)}>
                          Add To Cart
                        </Button>
                      ) : (
                        <Button
                          className="Explor"
                          variant="light"
                          onClick={() => navigate("/")}
                        >
                          Explore Similar
                        </Button>
                      )}
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          removeWishFun(item);
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
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
