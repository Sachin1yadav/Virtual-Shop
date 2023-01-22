import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomeProducts(data) {

    return (
      <div className="container">
          {data.data.map((el, i) => {
            if(i<8){
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
              <p><BsHeart className="heart" /></p>
              </div>
              <div>
              <h5>Price:{el.price}</h5>
              <h5>Rating:{el.rating}</h5>
              </div>
            
              <div className="btn">
              <Link to={`/data/${el.id}`} >
                            <button className="viweBtn">View</button>
                        </Link>
                 
              </div>
            </div>
          </div>
              )
            }  
            })}
         </div>
     
    );
  }


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