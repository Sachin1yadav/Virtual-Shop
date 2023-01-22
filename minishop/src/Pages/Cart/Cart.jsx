import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  deleteCartItem,
  updateCarts,
} from "../../redux/Cart/Cart.actions";
import "./Cart.scss";
import { FaShippingFast } from "react-icons/fa";
import { AiFillDelete, AiOutlineHome } from "react-icons/ai";
import { SlMinus, SlPlus } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handelOnSubtmi=()=>{
    onClose()
  }
  const {loading , error, cartData,totalPrice} = useSelector((store) => store.cart);
  console.log('totalPriceSelector:', totalPrice)
  console.log('cartData:', cartData)
  const dispatch = useDispatch();
  const [totalCartPrice,setTotalCartPrice] = useState(totalPrice);
  const updatePrice = () => {
    setTotalCartPrice(
      cartData.reduce(
        (acc, el) => acc + (+el.price+152) * el.qty,
        0
      )
    );
  }
  console.log('totalCartPrice:', totalCartPrice)
  useEffect(() => {
    dispatch(cartActions())
    // if(cartData.length !== 0){
      // let sum = cartData.reduce((acc,el) =>
      // {
      //     let prc = (+el.price+152);
      //     acc += el.qty*prc;
      //     return acc
      // },0)
      // setTotalCartPrice(sum)
      updatePrice()
    // }
}, [ cartData.length,totalPrice]);
console.log('loading:', loading)
console.log('After UseEffect totalSum:', totalCartPrice)
  //------Cart Total Price Function-------------------------------------------------------------------- //
  const [detailIcon,setDetailIcon] = useState(true);
   //------Offer Function-------------------------------------------------------------------- //
   const [apply,setApply] = useState("");
   const offerClick = () => {
     console.log('val:', totalCartPrice)
     console.log("Apply text",apply);
     if(apply === "VS50"){
      //  let dis = (30 / 100);
      // //  console.log("dis",dis)
      //  let totalValue = Math.floor(totalCartPrice - (totalCartPrice * dis))
      //  console.log('VS300:', totalValue);
       setTotalCartPrice(cartData.reduce(
        (acc, el) => acc + (+el.price+152) * el.qty *50/100,
        0
      ));
       setApply("")
     }else if(apply !== "VS50"){
       alert("sahi se lga")
     }
   }
   //------Price Details hide Function-------------------------------------------------------------------- //
  const paymentFun = () => {
      alert(totalCartPrice)
  } //detail hoide div
  //------Quantity Increase Function-------------------------------------------------------------------- //
  const quantityIncre = async(id,qty) => {
      dispatch(updateCarts(id,{"qty":qty+1}))
      .then(()=> {
        dispatch(cartActions());
      });
  }
   //------Quantity Decrease Function----------------------------------------------------------------------- //
  const quantityDecre = async(id,qty) => {
    dispatch(updateCarts(id,{"qty":qty-1})).then(()=> {
      dispatch(cartActions());
    });
  }
  // Loading And Error
  // if(loading) return <Loading/>;
  // if(error) return <h3>Error...</h3>;
  return (
    <>
      <div className="CartMainDiv">
        <div className="BothDiv">
          <div className="firstDiv">
            <div className="CartDetails">
              <p>My Cart:[{cartData.length}]</p>
              <Link to="/" ><p style={{fontSize:"30px"}}><AiOutlineHome/></p></Link>
              
            </div>
            {cartData.map((e, id) => (
              <div className="cartProDiv" key={id}>
                <div className="CartImgDeatils">
                  <div className="CartImgDiv">
                    <img src={e?.image[0]} alt={e.price} />
                  </div>
                  <div className="ProDivDetail">
                    <p className="Prodivname">
                      {e.name.length < 25
                        ? e.name
                        : `${e.name.slice(0, 25)}...`}{" "}
                    </p>
                    <p className="Prodivprice">Price: ₹{e.price}</p>
                    <p className="Prodivrating">
                      Rating: {e.raitng ? e.raitng : "4.3"}
                    </p>
                  </div>
                </div>
                <div className="QRdiv">
                  <div className="Qdiv">
                    <Button  onClick={()=> quantityDecre(e.id,e.qty)}
                    disabled={e.qty === 1}
                    color="red" variant="light">
                      -
                    </Button>
                    <Button variant="light">{ loading ? <Spinner/> : e.qty}</Button>
                    <Button
                    onClick={()=> quantityIncre(e.id,e.qty)}
                    color="green" variant="light">
                      +
                    </Button>
                  </div>
                  <div>
                    <Button
                     onClick={()=>{
                      dispatch(deleteCartItem(e.id)).then(()=> dispatch(cartActions()));
                      // dispatch(cartActions());
                      }}
                      type="button"
                      variant="light"
                      marginTop="-7px"
                      className="delBTN"
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="secondDiv">
            <div className="secHeading">
              <p>PRICE DETAILS</p>
            </div>
            <div className="secAmountDiv">
              <div className="secPriceDiv">
                <p>Total Ammount</p>
                <p>₹{totalCartPrice}</p>
              </div>
              <div className="secPriceDiv">
                <p>GST</p>
                <p style={{ color: "green" }}>18%</p>
              </div>
              <div className="secPriceDiv">
                <p>Delivery Charges</p>
                <p style={{ color: "green" }}>Free</p>
              </div>
            </div>
            <div className="secCoopan">
              <p>
                Congrats! :smiley: You can use Coupan code for Intresting Offers!{" "}
              </p>
              <div className="secCoopanInput">
                <InputGroup
                  width="80%"
                  border={"1px dotted gray"}
                  borderRadius="5px"
                >
                  <Input
                    pr="4.5rem"
                    type="text"
                    // color={'black'}
                    placeholder="Enter Offer"
                    value={apply}
                    onChange={(e) => setApply(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      colorScheme="teal"
                      h="1.75rem"
                      size="sm"
                      onClick={offerClick}
                    >
                      Apply
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
              <div
                className="secCoopanCode"
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  borderRadius: "10px",
                  textAlign: "left",
                }}
              >
                       <Button
                       className="tap"
                     colorScheme='teal' variant='outline'
                     margin="auto"
                      h="1.75rem"
                      size="lg"
                      onClick={onOpen}
                    >
                      Tap!
                    </Button>
                    <h3>You can Apply only one Once </h3>
              </div>
            </div>
            <div className="checkoutDiv">
            <Link to='/payment'  >
            <button  className="Checkout" onClick={paymentFun}  >
             Check Out
          </button>
    </Link>
          <Modal
            className="ordermodal"
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReO4PsZOqzxtG7IDo2_bZja_Q97FXTKUx0GQ&usqp=CAU"   style={{margin:"auto"}}    />
                <p  style={{textAlign:"center"  }}> Woow! You Can use "VS50" </p>
              </ModalBody>
              <ModalFooter>
                  <Button margin="auto" onClick={handelOnSubtmi} style={{cursor:"pointer"}} colorScheme="red">Congrats</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;