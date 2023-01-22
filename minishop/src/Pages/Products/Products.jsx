import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Products.scss";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import Navbar from "../../components/Navbar/Navbar";
import { LeftSideFilter } from "./LeftSideFilter";
import { SortFilters } from "./SortFilters";
import { Button } from "@chakra-ui/react";

const Products = () => {
  const { Categories } = useParams();
  const [value, setValue] = useState([]);
  const [sort, setSort] = useState(Categories);
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [order, setOrder] = useState("");

  const getSimilarData = async () => {
    try {
      const res = await fetch(
        `https://lackadaisical-volcano-larch.glitch.me/data/?q=${sort}&_sort=${price}&_order=${order}`
      );
      const datas = await res.json();
    //   console.log(datas);
      setValue(datas);
    } catch (error) {
    //   console.log("e", error);
    }
  };
//   console.log("line22", Categories);
  useEffect(() => {
    getSimilarData();
  }, [Categories, sort, price, order]);

  return (
    <div>
      <Navbar />
      <h1 className="heading">Products - {value.length}</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginRight: "2rem",
        }}
      >
        <div>
          <Button
            onClick={() => {
              setPrice("");
              setOrder("");
            }}
            style={{ marginRight: "1rem", marginBottom: "1rem",border:"1px solid gray" }}
          >
            Reset filters
          </Button>
        </div>
        <div>
          <SortFilters setPrice={setPrice} setOrder={setOrder} />
        </div>
      </div>
      <div className="main_container">
        <div>
          <LeftSideFilter setPrice={setPrice} setOrder={setOrder} />
        </div>
        <div className="proMainDiv">
          {value?.map((el, index) => (
            <div className="prodiv" key={index}>
              <img src={el?.image?.[1]} alt="name" />
              <p className="proName">
                {el.brand.length < 8 ? el.brand : `${el.brand.slice(0, 8)}`}
              </p>
              <div className="divPriceRating">
                <p className="proPrice">
                  Price: <span>₹ {el.price}</span>
                </p>
                <div className="divStar">
                  <p className="proRating">
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
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;