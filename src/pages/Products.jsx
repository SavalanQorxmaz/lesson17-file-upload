

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {

  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)

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
  const cardClick = ()=>{
    // e.preventDefault()
    // e.stopPropagation()
    // e.stopImmediatePropagation()
    console.log('salam')
  }
const modalClick = (e)=>{
  if(e.target ==e.currentTarget){
    e.currentTarget.style.display = 'none'
  }
 

}

  const iconClick = (e)=>{
    e.stopPropagation()
    // console.log(e.currentTarget.parentNode)
    const x = data.filter((item)=>item.id==e.currentTarget.parentNode.id)[0]
    console.log(x)
    document.querySelector('.details').style.display = 'flex'
    document.querySelector('.details').innerHTML =
    
      `<div class='modal' onClick={${{cardClick}} }>
      <img src="${x.image}" alt="" />
      <div>${x.id}</div>
      <div>${x.category}</div>
      <div>${x.title}</div>
      <div>${x.description}</div>
      </div>`
   
    
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
    <div className='details' onClick={modalClick}>
  
    </div>
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