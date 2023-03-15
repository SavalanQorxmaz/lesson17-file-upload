

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {

  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)

  // const tr

  const tableCreater =()=> {
    return(
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        <tr></tr>
        </tbody>
      </table>
    )
  }

 
 
  useEffect(()=>{
    axios('http://localhost:7000/get-products',
    {
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/x-www-form-urlencoded',
      //   'Access-Control-Allow-Origin': '*'
      // },
    
    })
    .then(res=>res.data)
    .then(res=>{
      setData(res);
      // setFlag(!flag)
    })
    .then(res=>console.log(data))
  
  },[])


  return (
    <div>Products</div>
  )
}


export {Products}