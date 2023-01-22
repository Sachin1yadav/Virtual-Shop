import { Button, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { AiFillDelete, AiOutlineHome } from 'react-icons/ai';
// import { BsStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { removeWishlistData, wishlistGetData } from '../../redux/Wishlist/Wishlist.actions';

import "./Wishlist.scss"

const Wishlist = () => {

    const {loading , error, wishData} = useSelector((store) => store.wishlist);
    const toast = useToast();
    const navigate  = useNavigate();


    console.log('cartData:', wishData)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(wishlistGetData())
     
  }, [ wishData.length]);

  const addToCart = (itemDetail) => {
    toast({
      // colorScheme:'yellow',
      title: "Added to Cart",
      description: "We've added this item to Cart",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
    return axios.post(`https://lackadaisical-volcano-larch.glitch.me/cart`,{...itemDetail,qty:1});
  };

  const removeWishFun = (id) => {
    dispatch(removeWishlistData(id)).then(()=> dispatch(wishlistGetData()));
  }

  return (
    <>
     <Navbar />
    <div className="CartMainDiv" mt='80px'>
        <div className="firstDivWish">
          <div className="CartDetailsWish">
            <p>My WishList:({wishData.length})</p>
            <Link to="/">
              <p style={{ fontSize: "30px" }}>
                <AiOutlineHome />
              </p>
            </Link>
          </div>
{wishData.length===0?( <div  >
    <img style={{margin:"auto"}} src="https://2.bp.blogspot.com/-QfSOClZc8r0/XNr6srFlzjI/AAAAAAAAGlA/lzs505eFFiEdyAytzKkMabdUTihKywcqwCLcBGAs/s1600/EXAM360%2B-%2BNo%2BWishlist.png" alt="Your Wish list is Empty!!"/>
  </div>):(
    <div>
     {wishData?.map((e, id) => (
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
              <Button variant="light" onClick={()=> addToCart(e)}>Add To Cart</Button>
            ) : (
              <Button className="Explor" variant="light" onClick={()=>navigate('/')}>Explore Similar</Button>
            )}
          </div>
          <div>
            <Button
              onClick={() => {
              //   dispatch(removeWishlistData(e.id)).then(() =>
              //     dispatch(wishlistGetData())
              //   );
              removeWishFun(e.id)
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
  )  
 
}

         
        </div>
      </div>
      </>
  )
}

export default Wishlist