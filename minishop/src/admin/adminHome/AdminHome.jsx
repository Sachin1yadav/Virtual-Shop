import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import ItemTable from './Table/ItemTable';
import AdminNav from './AdminNav';
const AdminHome = () => {
    const [allprod, setAllProd] = useState([])
    useEffect(() => {
      getProducts()
    }, [])
    const getProducts = async()=>{
      let res = await axios.get("https://lackadaisical-volcano-larch.glitch.me/data?_page=5&_limit=10")
      setAllProd(res.data)
}
const toggleshow= (id)=>{
    console.log(id)
    let dta = allprod.filter(el=>{
        if(el.id===id){
            el.show = !el.show
            return el
        }
        return null
    })
    // setAllProd(dta)
    // toggleView(id,dta[0])
    console.log(dta[0])
}

// const toggleView = async(id,data)=>{
//    let res = await axios.patch(`https://lackadaisical-volcano-larch.glitch.me/data/${id}`,data)
//    console.log(res.data.show)
// }

  return (
    <>
     <AdminNav />
      <ItemTable data={allprod} toggleshow={toggleshow} />
    </>
  )
}

export default AdminHome