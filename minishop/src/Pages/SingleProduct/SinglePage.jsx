import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/SingleProducts/SingleProduct.actions";

import axios from "axios";

import { Heading, useToast } from "@chakra-ui/react";

// import { FaAngleRight, FaHeart, FaAngleDown } from "react-icons/fa";

// import {
//   MdOutlineCrueltyFree,
//   MdOutlineWaterDrop,
//   MdSettings,
//   MdOutlineAssignmentReturn,
// } from "react-icons/md";

import "./SinglePage.css";
import { BsFillHeartFill } from "react-icons/bs";

const SinglePage = () => {
  const { id } = useParams();
  const [img, setImg] = useState(0);
  let des="Self-Timer | Type C and Mini HDMI, |9 Auto Focus Points | 35x Optical Zoom., Effective Pixels: 18 MP APS-C CMOS sensor-which is 25 times larger than a typical Smartphone sensor., WiFi | Full HD | Video Recording at 1080 p on 30fps."
  // let id =1;
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

  // const [itemDetail, setItemDetail] = useState({});

  // const getitemDetail = async(id) => {
  //    let res = await fetch(`https://b-tmart-api-5tjm.vercel.app/itemDetail/${id}`)
  //    let itemDetail  = await res.json();
  //    console.log('itemDetail:', itemDetail)
  //    setItemDetail(itemDetail)
  // }

  // useEffect(() => {
  //   // getitemDetail(id)
  //   // fetch(`https://lackadaisical-volcano-larch.glitch.me/data/${id}`)
  //   //   .then((res) => res.json())
  //   //   .then((json) => {
  //   //     setItemDetail(json);
  //   //     console.log("singalpage", json);
  //   //   })
  //   //   .catch((e) => console.log(e));
  // }, [id, img]);

  

  console.log(id);
  console.log("singleProductitemDetail", itemDetail);

  const toast = useToast();

  const likeFuc = (itemDetail) => {
    toast({
      // colorScheme:'yellow',
      title: "Added to wishlist",
      description: "We've added this item to wishlist",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
    return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`, itemDetail);
  };

  // const handleWishlist = (item) => {
  //   return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`, item);
  // };

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

  if(loading) return <h3>Loading...</h3>;
  if(error) return <h3>Error...</h3>;
  return (
    <div>
      <div className="maindiv">
        <div className="imgDiv">
          <div className="curimg">
            <img src={itemDetail?.image?.[img]} alt={itemDetail.name} />
          </div>
          <div className="imagess">
            <div>
              {" "}
              <img
                onClick={() => setImg(0)}
                src={itemDetail?.image?.[0]}
                alt={itemDetail.name}
              />
            </div>
            <div>
              {" "}
              <img
                onClick={() => setImg(1)}
                src={itemDetail?.image?.[1]}
                alt={itemDetail.name}
              />
            </div>
            <div>
              {" "}
              <img
                onClick={() => setImg(2)}
                src={itemDetail?.image?.[2]}
                alt={itemDetail.name}
              />
            </div>
            <div>
              {" "}
              <img
                onClick={() => setImg(3)}
                src={itemDetail?.image?.[3]}
                alt={itemDetail.name}
              />
            </div>
          </div>
        </div>
        <div className="detailsdiv">
          <h3 className="name">{itemDetail?.name}</h3>
          <p className="catog">{itemDetail?.catogeries}</p>
          <p className="price">{itemDetail?.price}</p>
          <p className="rating">{itemDetail?.rating}</p>
          <p className="discription">{itemDetail?.discription?(itemDetail?.discription):(des)}</p>
          <div className="btnWC">
          <button className="wish" onClick={()=>likeFuc(itemDetail)}><span style={{
            fontSize:'20px', textAlign:'center'
          }} >♡</span> Add To Wishlist!</button>
          <button className="cart" onClick={()=>addToCart(itemDetail)}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div>
        <Heading color={'white'}>Similar Products</Heading>
        <div>
        <SimilarData
            data={similarData.filter((item) => item.Categories === itemDetail.Categories)}/>
        </div>
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
