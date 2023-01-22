import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";

import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/SingleProducts/SingleProduct.actions";

import axios from "axios";
import { BsStarFill } from "react-icons/bs";


import { Button, Heading, useToast } from "@chakra-ui/react";


import "./SinglePage.scss";
import { BsFillHeartFill } from "react-icons/bs";
import DemoSimiler from "../../DemoPagesBySachin/DemoSimiler";
import { cartActions } from "../../redux/Cart/Cart.actions";

 
 
const SinglePage = () => {
  const { id } = useParams();
  const [img, setImg] = useState(1);
  let rat = 4.3;
  let des =
    "Based on purchases by customers who wear your size, L will fit you best";
 
  const {loading , error, itemDetail} = useSelector((store) => store.singleProduct);
  const dispatch = useDispatch();
  const {cartData}=useSelector((store)=>store.cart)

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
      dispatch(cartActions())
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
            {itemDetail?.discription ? itemDetail?.discription : 
            <>
            <p>Based on purchases by customers who wear your size, L will fit you best.
                Size Chart 
                Care Instructions: Machine Wash
                Fit Type: Regular Fit
                Occasion : Leisure Sport
                Pattern : Solid
                Fit :Regular Fit
                Material: 60%Cotton40%Polyester
                Sleeves : Half Sleeves
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
        <div className="banner">
         <img  src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Fashionation-Coupon-header.gif" alt="banner" />
      </div>
        <Heading  className="similar">You might be interested in</Heading>
        <div >
        <DemoSimiler
            data={similarData.filter((item) => item.Categories === itemDetail.Categories)}/>
        </div>
          </div>
  
      {/* banner */}
    
      {/* <div className="banner">
         <img  src="./shippingBanner.PNG" alt="banner" />
      </div> */}

      

      {/* banner */}

      


      {/* recmended product */}

      <div className="recmend"></div>
       
      <div className="banner">
         <img  src="https://assets.ajio.com/cms/AJIO/WEB/Earlybird-Strip-D-1440x128%20(1).gif" alt="banner" />
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
  );
};


// function SimilarData(data) {
//   return (
//     <div className="container">
//         {data.data.map((el, i) => {
//           return (
//             <div key={el.id} className="cord">
//                 <div className="imgBox">
//                   <img  src={el.image[0]}  alt="" />
//                 </div>
//                 <div className="details">
//                   <div className="nameHeart">
//                     <h3>
//                     {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}   
//                     </h3>
//                     <p><BsFillHeartFill className="heart" /></p>
//                   </div>
//                   <h5>Price:{el.price}</h5>
//                   <h5>Rating:{el.rating}</h5>
//                   <div className="btn">
//                   <Link to={`/data/${el.id}`} >
//                                 <button className="viweBtn">View</button>
//                   </Link> 
//                   </div>
//                 </div>
//             </div>
//           )
         
//         })}
//     </div>
   
//   );
// }

export default SinglePage;
