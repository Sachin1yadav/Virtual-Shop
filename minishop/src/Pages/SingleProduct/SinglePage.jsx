import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/SingleProducts/SingleProduct.actions";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import Loading from"../Loading/Loading"
import { Button, Heading, useToast } from "@chakra-ui/react";
import "./SinglePage.scss";
import { BsFillHeartFill } from "react-icons/bs";
import DemoSimiler from "../../DemoPagesBySachin/DemoSimiler";
import { cartActions } from "../../redux/Cart/Cart.actions";
import Navbar from "../../components/Navbar/Navbar";
import { getUser, updateUser, userCartUpdate } from "../../redux/AddUser/User.actions";

const SinglePage = () => {
  const { id } = useParams();
  const [img, setImg] = useState(1);
  let rat = 4.3;
  let des =
    "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.";
  const {loading , error, itemDetail } = useSelector((store) => store.singleProduct);
  const dispatch = useDispatch();
const {cartData}=useSelector((store)=>store.cart)
//   const {cartData}=useSelector((store)=>store.cart)
  const [similarData, setSimilarData] = useState([]);

    //authentication cart
    const { isauth, userData } = useSelector((val) => val.authUser);

  const getSimilarData =async () => {
    try {
        const res = await fetch("https://lackadaisical-volcano-larch.glitch.me/data");
        const data = await res.json();
        setSimilarData(data);
    } catch (error) {
        console.log("e", error);
    }
  }
  useEffect(() => {
      dispatch(getSingleProduct(id))
      getSimilarData();
      dispatch(cartActions())
  }, [dispatch, id, img]);

  const toast = useToast();
  const likeFuc = (itemDetail) => {
    toast({
      title: "Added to wishlist",
      description: "We've added this item to wishlist",
      variant: "subtle",
      position:'top-right',
      duration: 3000,
      isClosable: true,
    });
    return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`, itemDetail);
  };
  
  const addToCart = async(itemDetail) => {

    // userData.cart.push({...itemDetail,qty:1})

    // toast({
    //   title: "Added to Cart",
    //   description: "We've added this item to Cart",
    //   variant: "subtle",
    //   position:'top-right',
    //   duration: 3000,
    //   isClosable: true,
    // });

   

    let currUser = await dispatch(getUser(userData.id))
    // console.log('currUser:', currUser.cart)
    let cartItem = {...itemDetail,qty:1}
    let newCartData = currUser.cart.push(cartItem)
    console.log('newCartData:', newCartData)
    // dispatch(userCartUpdate(newCartData))

    // return axios.post(`https://lackadaisical-volcano-larch.glitch.me/cart`,{...itemDetail,qty:1});
  };

  if(loading){
    <Loading/>
  };

  return (
    <>
     <Navbar />
    <div style={{marginTop:"75px"}} >
        <div className="maindiv">
        <div className="imgDiv">
          <div className="curimg">
            <img src={itemDetail?.image?(itemDetail.image?.[img]):("https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9528g3llcf2o3218mjzzpt270ckvllpe9aew6nax25k&rid=200w.gif&ct=g")} alt={itemDetail.name} />
          </div>
          <div className="imagess">
            <div>
              {" "}
              <img
                onClick={() => setImg(0)}
                src={itemDetail?.image?(itemDetail.image?.[0]):("https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9528g3llcf2o3218mjzzpt270ckvllpe9aew6nax25k&rid=200w.gif&ct=g")}
                alt={itemDetail.name}
              />
            </div>
            <div>
              {" "}
              <img
                onClick={() => setImg(1)}
                src={itemDetail?.image?(itemDetail.image?.[1]):("https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9528g3llcf2o3218mjzzpt270ckvllpe9aew6nax25k&rid=200w.gif&ct=g")}
                alt={itemDetail.name}
              />
            </div>
            <div>
              {" "}
              <img
                onClick={() => setImg(2)}
                src={itemDetail?.image?(itemDetail.image?.[2]):("https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9528g3llcf2o3218mjzzpt270ckvllpe9aew6nax25k&rid=200w.gif&ct=g")}
                alt={itemDetail.name}
              />
            </div>
            <div>
              {" "}
              <img
                onClick={() => setImg(3)}
                src={itemDetail?.image?(itemDetail.image?.[3]):("https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9528g3llcf2o3218mjzzpt270ckvllpe9aew6nax25k&rid=200w.gif&ct=g")}
                alt={itemDetail.name}
              />
            </div>
          </div>
        </div>
        <div className="detailsdiv">
          <p className="catog">{itemDetail?.Categories}</p>
          <h3 className="name">{itemDetail?.name}</h3>
          <p className="price">
            {" "}
            Price: ₹{itemDetail?.price} <span>₹{itemDetail?.og_price}</span>
          </p>
          <p className="offer">Offer: {itemDetail?.saving}</p>
          <div className="ratingDiv">
            {" "}
            <p className="rating">
              {itemDetail?.rating ? itemDetail?.rating : rat}
            </p>
            <span>
              <BsStarFill />
            </span>
          </div>
          <p className="discription">
            {itemDetail?.discription ? itemDetail?.discription :
            <>
            <p>
                {des}
            </p>
            </>
            }
          </p>
          <div className="btnWC">
          <button className="wish" onClick={()=>likeFuc(itemDetail)}>
          <div> <p>Wishlist</p>
          <span><BsHeart/></span></div>
         </button>
         {itemDetail.show?(
          <div  >
        {
          cartData.some((p) => p.id === itemDetail.id) ? (
                <Button isDisabled colorScheme='red' className="cart">Already In Cart</Button>
            ) : (
              <button className="cart" onClick={()=>addToCart(itemDetail)
                 }>Add To Cart</button>
            )}
            </div>
           ) :( <Button isDisabled colorScheme='red' className="cart">Out Of stock</Button  >)}
          </div>
        </div>
      </div>
      <div>
        <div className="bannner" >
         <img  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-header.jpg" alt="banner" />
      </div>
        <Heading  className="similar">similar products</Heading>
        <div >
        <DemoSimiler
            data={similarData.filter((item) => item.Categories === itemDetail.Categories)}/>
        </div>
          </div>
      {/* banner */}
      <div className="recmend"></div>
      <div className="bannner2"  >
         <img  src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Fashionation-Coupon-header.gif" alt="banner" />
      </div>
      {/* recmended product  footer*/}
      <div className="recFooter">
        <p>
          India's fastest growing audio & wearables brand. The most incredible
          range of wireless earphones, earbuds, headphones, smart watches, and
          home audio. From workouts to adventures, boAt will get you sailing!
        </p>
      </div>
    </div>
    </>
  );
};

export default SinglePage;