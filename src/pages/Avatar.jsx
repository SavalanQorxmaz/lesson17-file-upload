
import React from 'react'

const Avatar = () => {


  const  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
    // .then(res=>console.log(res))
  
  }

 const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    console.log(base64)
  }





  return (
    <div className='container'>
      <div className='avatar'>
        <input onChange={handleFileRead} type="file" />
        <div className='img-frame'><img src="" alt="" /></div>
      </div>
    </div>
  )
}


export {Avatar}