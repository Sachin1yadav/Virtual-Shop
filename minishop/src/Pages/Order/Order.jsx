import { Button, Modal, useDisclosure} from '@chakra-ui/react';
import {AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb';
import "./Order.scss"
import Navbar from '../../components/Navbar/Navbar';
import DelOrderModal from './DelOrderModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Order = () => {
  const {user} =  useSelector(val=>val?.userAllData)
    const orderData = user.orders;
    let today = new Date()
    let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [elem, setElem] = useState({})
  //   -------- delete function of an order modal will open -------
  const deleteOrder = (el)=>{
    onOpen()
    setElem(el)
  }
    return (
      <>
       <Navbar />
        <div className="CartMainDiv" mt='80px'>
        <div className="firstDivOrder">
          <div className="CartDetailsOrder">
            <p>My Orders:[{orderData?.length}]</p>
            <Link to="/">
              <p style={{ fontSize: "30px" }}>
                <AiOutlineHome />
              </p>
            </Link>
          </div>
          {orderData?.map((e, id) => (
            <div className="cartProDivOrder" key={id}>
              <div className="CartImgDeatilsOrder">
                <div className="CartImgDivOrder">
                  <img src={e?.image[0]} alt={e.price} />
                </div>
                <div className="ProDivDetailOrder">
                  <p className="ProdivnameOrder">
                    {e.name.length < 25 ? e.name : `${e.name.slice(0, 25)}...`}{" "}
                  </p>
                  <p className="ProdivpriceOrder">Price: ₹{e.price}</p>
                </div>
              </div>
              <div className="deliveryDivOrder">
                <h5>
                  {" "}
                  <TbTruckDelivery />{" "}
                </h5>
                <p>Delivery by {date}</p>
              </div>
              <div className="QRdiv">
                <div>
                  <Button
                    onClick={()=>deleteOrder(e)}
                    type="button"
                    variant="light"
                    marginTop="-7px"
                    className="delBTN"
                    colorScheme="red"
                    color="red"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <Modal onClose={onClose} isOpen={isOpen}>
        <DelOrderModal onClose={onClose} data={elem} />
        </Modal>
        </>
      );
}

export default Order