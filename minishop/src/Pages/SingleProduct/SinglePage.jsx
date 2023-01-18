import { useEffect } from "react"
// import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/SingleProducts/SingleProduct.actions";


const SinglePage = () => {
// const { id } = useParams()
let id = 1;
const {loading , error, singleProductData} = useSelector((store) => store.singleProduct);
  const dispatch = useDispatch();
  

  useEffect(() => {
      dispatch(getSingleProduct(id))
  }, []);



console.log("id",id);
console.log("SingleData",singleProductData)
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
