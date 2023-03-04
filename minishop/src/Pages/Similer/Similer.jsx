import React from "react";
import "./Similer.scss";
import { BsStarFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
const Similer = ({ data }) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="proMainDivSlick">
      <Slider {...settings}>
        {data?.map((el, index) => (
          <div className="prodivSlick" key={index}>
            <div className="ProImgDivSlick">
              <img src={el?.image?.[1]} alt="name" />
            </div>
            <p className="proNameSlick">
              {el.name.length < 11 ? el.name : `${el.name.slice(0, 11)}...`}
            </p>
            <div className="divPriceRatingSlick">
              <p className="proPrice">
                Price: <span>₹ {el.price}</span>
              </p>
              <div className="divStarSlick">
                <p className="proRatingSlick">
                  {" "}
                  <BsStarFill />
                </p>
                <span>{el.rating}</span>
              </div>
            </div>
            <button
              className="addtocart"
              onClick={() => navigate(`/data/${el.id}`)}
            >
              Details
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Similer;
