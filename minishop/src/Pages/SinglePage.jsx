import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/SingleProducts/SingleProduct.actions";

import { Link, useNavigate } from 'react-router-dom';

 
import {FaAngleRight ,FaHeart,FaAngleDown } from "react-icons/fa"

import {MdOutlineCrueltyFree,MdOutlineWaterDrop,MdSettings,MdOutlineAssignmentReturn} from "react-icons/md"

const SinglePage = () => {

//   const { id } = useParams()

  const {loading , error, data} = useSelector((store) => store.SinglePage);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if(data.length === 0){
      dispatch(getSingleProduct())
    }
    
  }, []);

  if(loading) return <h3>Loading...</h3>;
  if(error) return <h3>Error...</h3>;
  return (
    <div>
      <h1>getSingleProduct</h1>
      {/* {
        data.map((post) => (
            <ul key={post.id}>
            <li>{post.message}</li>
            </ul>
        ))
      } */}

    </div>
  );
};

export default SinglePage;
