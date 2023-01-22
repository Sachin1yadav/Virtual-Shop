import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { removeWishlistData, wishlistGetData } from '../../redux/';

export default function HomeProducts(data) {
  // const {    wishData} = useSelector((store) => store.wishlist);
  // const toast = useToast();
  // const navigate  = useNavigate();
//   console.log('wishDat:', wishData)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(wishlistGetData())
// }, [ wishData.length]);
// console.log("wish",wishData)
    return (
      <div className="container">
          {data.data.map((el, i) => {
            return (
              <div key={el.id} className="cord">
              
          <div className="imgBox">
            <img  src={el?.image?(el.image?.[1]):("https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9528g3llcf2o3218mjzzpt270ckvllpe9aew6nax25k&rid=200w.gif&ct=g")}  alt="" />
            
          </div>
          <h3 className="firstName">
            {el.name.length < 18 ? el.name : `${el.name.slice(0, 18)}`}   
            </h3>
            
          <div className="details">
            <div className="nameHeart">
            <h3>
            {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}   
            </h3>
            
            {data.data?.some((p) => p.id !== el.id) ? (
                
                   
                   <p><BsHeart className="heart" /></p>
                   
                
              ) : (
                <p><BsFillHeartFill className="heart" /></p>
              )}
            </div>
            <div>
            <h5>Price:{el.price}</h5>
            <h5>Rating:{el.rating}</h5>
            </div>
            {/* <p> <BsFillHeartFill className="heart" /></p> */}
            {/* <p>
              Lorem ipsum dolor sit, orrupti ip consequatur voluptatum facilis
              animi commodi dolor sed cupiditate quam corrupti quisquam vero,
              aliquid odio.
            </p>{" "} */}
            <div className="btn">
            <Link to={`/data/${el.id}`} >
                          <button className="viweBtn">View</button>
                      </Link>
               
            </div>
          </div>
        </div>
            )
            // (<Box  key={el.id}  height='350px' border='1px' >
            //     <Image src={el.image[0]}  alt={el.price} w='50%' margin={'auto'} />
            //     <h2> {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`} </h2>
            //       <Box >
            //         <Box ><Heading fontSize={'14px'} >Price:</Heading><span> {el.price}</span></Box>
            //         <Box ><Heading fontSize={'14px'}>Ratting:</Heading> <span>{el.rating}</span></Box>
            //         <Box >
            //           <Link to={`/data/${el.id}`} >
            //             <Text>View Details</Text>
            //           </Link>
            //         </Box>   
            //     </Box>
            // </Box>)
            })}
         </div>
     
    );
  }