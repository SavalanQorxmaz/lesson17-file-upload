

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal } from '../components/Modal'

const Products = () => {

  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)
  const [selectedRow, setSelectedRow] = useState({})

  useEffect(()=>{
    axios('http://localhost:7000/get-products',
    )
     .then(res=>res.data)
     .then(res=>{
       setData(res);

     })
  
  
  },[])


  const rowClick = (e) =>{
    
    // if(e && e.stopPropagation) e.stopPropagation();
    // e.preventDefault()
    // e.stopPropagation()
    // e.stopImmediatePropagation()
      console.log(e.target)
   
  }


 



  const iconClick = (e)=>{
    e.stopPropagation()
    // console.log(e.currentTarget.parentNode)
    setSelectedRow(data.filter((item)=>item.id==e.currentTarget.parentNode.id)[0])
    document.querySelector('.details').style.display = 'flex'
    
   
    
  }

 

 

  const TableRow =({id, category, title, description})=>{

    return(
  
      <tr onClick={rowClick} id = {id}>
      <td>{id}</td>
     <td>{category}</td>
     <td>{title.slice(0,20)}</td>
     <td>{description.slice(0,20)}</td>
     <td  onClick={iconClick} style={{color: 'green', cursor: 'pointer'}} >
      <div>
     <i  className="fa-solid fa-chevron-left"></i>
      </div>
      </td>
     </tr>
    )

  }

  return (
    <div className='products'>  
  <div className='container'>
    <Modal selectedRow = {selectedRow}/>
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
   {
 data.map((row)=>(
//   <tr id={row.id} key={row.id} onClick={rowClick}>
//   <td>{row.id}</td>
//  <td>{row.category}</td>
//  <td>{row.title.slice(0,20)}</td>
//  <td>{row.description.slice(0,20)}</td>
//  </tr>

<TableRow key={row.id} id = {row.id} title = {row.title} category = {row.category} description = {row.description}/>

 ))
   }
    
    </tbody>
  </table>
  </div>
  </div>
  )
}


export {Products}