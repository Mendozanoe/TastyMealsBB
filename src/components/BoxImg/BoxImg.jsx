import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import "../BoxImg/boxImg.css"
import ModalDescription from '../Modal/ModalDescription'



const BoxImg = ({img,description,title,text}) => {
    const[isOpenModal,setIsOpenModal]=useState(false)
 
  const openModal=()=>{
 setIsOpenModal(true)
  }
  const closeModal=()=>{
    setIsOpenModal(close)
  }
  return (
    <div className='container-boxImg'>
        <section className='style-box'>
            <img className='image-menu' src={img} alt="" />
            <h2>{title}</h2>
            <aside>{description}</aside>
           <button className='btn-box' onClick={openModal}> {text}</button>
        </section>
    </div>
  )
}


export default BoxImg