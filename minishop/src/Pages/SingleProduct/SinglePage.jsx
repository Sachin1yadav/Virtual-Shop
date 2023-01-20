import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";

import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/SingleProducts/SingleProduct.actions";

import axios from "axios";
import { BsStarFill } from "react-icons/bs";


import { Heading, useToast } from "@chakra-ui/react";


import "./SinglePage.scss";
import { BsFillHeartFill } from "react-icons/bs";

// import { FaAngleRight, FaHeart, FaAngleDown } from "react-icons/fa";

// import {
//   MdOutlineCrueltyFree,
//   MdOutlineWaterDrop,
//   MdSettings,
//   MdOutlineAssignmentReturn,
// } from "react-icons/md";


import "./SinglePage.scss";
import { BsFillHeartFill } from "react-icons/bs";

 
 
const SinglePage = () => {
  const { id } = useParams();
  const [img, setImg] = useState(1);
  let rat = 4.3;
  let des =
    "Self-Timer | Type C and Mini HDMI, |9 Auto Focus Points | 35x Optical Zoom., Effective Pixels: 18 MP APS-C CMOS sensor-which is 25 times larger than a typical Smartphone sensor., WiFi | Full HD | Video Recording at 1080 p on 30fps.";
 
  const {loading , error, itemDetail} = useSelector((store) => store.singleProduct);
  const dispatch = useDispatch();


  const [similarData, setSimilarData] = useState([]);
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
  }, [dispatch, id, img]);

 

  console.log(id);
  console.log("singleProductitemDetail", itemDetail);

  const toast = useToast();

  const likeFuc = (itemDetail) => {
    toast({
      title: "Added to wishlist",
      description: "We've added this item to wishlist",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
    return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`, itemDetail);
  };

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

  
  if(loading) return <h3>Loading...</h3>;

  // const handleAddCart = (id) => {
  //   return axios.post(`https://b-tmart-api-5tjm.vercel.app/itemDetail/${id}`);
  // };

  // const hideDiv = {
  //   display: "none",
  //   width: "90%",
  //   margin: "auto",
  //   marginTop: "20px",
  // };

  // const [angle, setAngle] = useState(false);

  // const handleReadMore = () => {
  //   const targetDiv = document.getElementById("disHideDiv");
  //   // document.getElementById("hideDiv").style.display = "block"
  //   if (targetDiv.style.display !== "none") {
  //     targetDiv.style.display = "none";
  //     setAngle(false);
  //   } else {
  //     targetDiv.style.display = "block";
  //     setAngle(true);
  //   }
  // };

  // if(loading) return <h3>Loading...</h3>;

  if(error) return <h3>Error...</h3>;
  return (
    <div>
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
            {itemDetail?.discription ? itemDetail?.discription : des}
          </p>
          <div className="btnWC">

          <button className="wish" onClick={()=>likeFuc(itemDetail)}> 
          <div> <p>Wishlist</p>
            <span><BsHeart/></span></div>
           
         </button>
          <button className="cart" onClick={()=>addToCart(itemDetail)}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div>
        <div className="banner">
         <img  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4923d2c3-74ef-4550-99ec-d0b6533b5b22.jpg" alt="banner" />
      </div>
        <Heading  className="similar">You might be interested in</Heading>
        <div>
        <SimilarData
            data={similarData.filter((item) => item.Categories === itemDetail.Categories)}/>
        </div>
          </div>
  
      {/* banner */}
    
      <div className="banner">
         <img  src="./shippingBanner.PNG" alt="banner" />
      </div>

      

      {/* banner */}

      


      {/* recmended product */}

      <div className="recmend"></div>
       
       

      {/* recmended product  footer*/}
      <div className="recFooter">
        <p>
          India's fastest growing audio & wearables brand. The most incredible
          range of wireless earphones, earbuds, headphones, smart watches, and
          home audio. From workouts to adventures, boAt will get you sailing!
        </p>

      </div>
    </div>
  );
};


function SimilarData(data) {
  return (
    <div className="container">
        {data.data.map((el, i) => {
          return (
            <div key={el.id} className="cord">
                <div className="imgBox">
                  <img  src={el.image[0]}  alt="" />
                </div>
                <div className="details">
                  <div className="nameHeart">
                    <h3>
                    {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}   
                    </h3>
                    <p><BsFillHeartFill className="heart" /></p>
                  </div>
                  <h5>Price:{el.price}</h5>
                  <h5>Rating:{el.rating}</h5>
                  <div className="btn">
                  <Link to={`/data/${el.id}`} >
                                <button className="viweBtn">View</button>
                  </Link> 
                  </div>
                </div>
            </div>
          )
         
        })}
    </div>
   
  );
}

export default SinglePage;
