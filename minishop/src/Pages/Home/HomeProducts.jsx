import { useToast } from "@chakra-ui/react";
import "./Home.css";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { updateUser } from "../../redux/Auth/auth.actions";
export default function HomeProducts(data) {
  const {userData } = useSelector((val) => val.authUser);
  const user = userData 
  const wishData = user?.wishlist
  const toast = useToast();
  const likeFuc = (itemDetail) => {
    user?.wishlist?.push(itemDetail)
    dispatch(updateUser(user.id,{wishlist:user.wishlist}))
    toast({
      title: "Added to wishlist",
      description: "We've added this item to wishlist",
      variant: "subtle",
      position:'top-right',
      duration: 3000,
      isClosable: true,
    });
  };
  const dispatch = useDispatch();
  return (
    <div className="container">
      {data?.data?.map((el,i)=> {
        if(i<10){
          return (
            <div key={el.id} className="cord">
              <div className="imgBox">
                <img
                  src={
                    el?.image
                      ? el.image?.[1]
                      : "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9528g3llcf2o3218mjzzpt270ckvllpe9aew6nax25k&rid=200w.gif&ct=g"
                  }
                  alt=""
                />
              </div>
              <h3 className="firstName">
                {el.name.length < 18 ? el.name : `${el.name.slice(0, 18)}`}
              </h3>
              <div className="details">
                <div className="nameHeart">
                  <h3>
                    {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}
                  </h3>
                  {wishData?.some((p) => p.id === el.id) ? (
                    <p>
                      <BsFillHeartFill  className="heart" />
                    </p>
                  ) : (
                    <p >
                      <BsHeart onClick={()=>likeFuc(el)} className="heart"  />
                    </p>
                  )}
                </div>
                <div>
                  <h5>Price:{el.price}</h5>
                  <h5>Rating:{el.rating}</h5>
                </div>
                <div className="btn">
                  <Link to={`/data/${el.id}`}>
                    <button className="viweBtn">View</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }else{
          return null
        }
      })}
    </div>
  );
}