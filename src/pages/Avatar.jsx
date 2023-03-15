
import React, { Profiler, useEffect, useState } from 'react'
import axios from 'axios'
import imgSrc from '..//images/avatar.png'

const Avatar = () => {



  const [selectedImg, setSelectedImg] = useState(null)
  const [profileImg, setProfileImg] = useState('')
  const [flag, setFlag] = useState(false)

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

 const handleFileRead = (e) => {
  return new Promise((res, rej)=>{
    
    res(e.target.files[0])
  })
  .then(res=>convertBase64(res))
  .then(res=>{
   return ( axios.post(
      'http://localhost:7000/create-data',
       
      {
      
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    },
  data:res,
   
      })
  
  )
 
  })
  .then(res=>{
    setFlag(!flag)
  })
   
   
  
    
  }

useEffect(()=>{
  axios('http://localhost:7000')
    .then(res=>setProfileImg(res.data.data))
},[flag])


  return (
    <div className='container'>
      <div className='avatar'>
        
        <div className='img-frame'>
        
        <label className="custom-file-upload" htmlFor='select'>
        <input id='select'  type="file" onChange={handleFileRead} />
          <i className="fa-regular fa-pen-to-square" ></i>
        </label>
          <img src={profileImg == ''?imgSrc:profileImg} alt="" />
          </div>
          
      </div>
    </div>
  )
}


export {Avatar}