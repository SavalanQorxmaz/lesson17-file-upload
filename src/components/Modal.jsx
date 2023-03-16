
import React from 'react'

import { useNavigate } from 'react-router-dom'


const Modal = ({selectedRow}) => {
const navigate = useNavigate()

  const modalClick = (e)=>{
    if(e.target ==e.currentTarget){
      e.currentTarget.style.display = 'none'
    }
  }

  const cardClick = (e)=>{
    // e.preventDefault()
    // e.stopPropagation()
    // e.stopImmediatePropagation()
    console.log(e.currentTarget)
  }

  return (
    <div className='details' onClick={modalClick}>
      <div className='modal' onClick={cardClick} >
      <img src={selectedRow.image} alt="" />
      <div>{selectedRow.id}</div>
      <div>{selectedRow.category}</div>
      <div>{selectedRow.title}</div>
      <div>{selectedRow.description}</div>
      <div className='actions'>
      <i className="fa-solid fa-trash"></i>
      <i onClick={()=>navigate(`/product/${selectedRow.id}`)} className="fa-solid fa-circle-info"></i>
      </div>
      </div>
    </div>
  )
}

export {Modal}