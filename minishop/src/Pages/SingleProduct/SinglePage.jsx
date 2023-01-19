import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleProduct } from "../../redux/SingleProducts/SingleProduct.actions";

// import axios from "axios";

import { useToast } from "@chakra-ui/react";

// import { FaAngleRight, FaHeart, FaAngleDown } from "react-icons/fa";

// import {
//   MdOutlineCrueltyFree,
//   MdOutlineWaterDrop,
//   MdSettings,
//   MdOutlineAssignmentReturn,
// } from "react-icons/md";

import { Link, useParams } from "react-router-dom";
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [img, setImg] = useState(0);
  let des="Self-Timer | Type C and Mini HDMI, |9 Auto Focus Points | 35x Optical Zoom., Effective Pixels: 18 MP APS-C CMOS sensor-which is 25 times larger than a typical Smartphone sensor., WiFi | Full HD | Video Recording at 1080 p on 30fps."
  // let id =1;
  // const {loading , error, itemDetail} = useSelector((store) => store.singleProduct);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getSingleProduct(id))
  // }, []);

  const [itemDetail, setItemDetail] = useState({});

  // const getitemDetail = async(id) => {
  //    let res = await fetch(`https://b-tmart-api-5tjm.vercel.app/itemDetail/${id}`)
  //    let itemDetail  = await res.json();
  //    console.log('itemDetail:', itemDetail)
  //    setItemDetail(itemDetail)
  // }

  useEffect(() => {
    // getitemDetail(id)
    fetch(`https://lackadaisical-volcano-larch.glitch.me/data/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setItemDetail(json);
        console.log("singalpage", json);
      })
      .catch((e) => console.log(e));
  }, [id, img]);

  console.log(id);
  console.log("singleProductitemDetail", itemDetail);

  const toast = useToast();

  // const likeFuc = () => {
  //   toast({
  //     // colorScheme:'yellow',
  //     title: "Added to wishlist",
  //     description: "We've added this item to wishlist",
  //     variant: "subtle",
  //     duration: 3000,
  //     isClosable: true,
  //   });
  // };

  // const handleWishlist = (item) => {
  //   return axios.post(`https://busy-peplum-fawn.cyclic.app/wishList`, item);
  // };

  // const addtoCart = () => {
  //   toast({
  //     // colorScheme:'yellow',
  //     title: "Added to Cart",
  //     description: "We've added this item to Cart",
  //     variant: "subtle",
  //     duration: 3000,
  //     isClosable: true,
  //   });

  // alert("We've added this item to Cart")
  // };

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
  // if(error) return <h3>Error...</h3>;
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
          <button className="wish">Add To Wishlist!</button>
          <button className="cart">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
