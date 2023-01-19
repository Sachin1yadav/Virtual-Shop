import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomeProducts(data) {

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