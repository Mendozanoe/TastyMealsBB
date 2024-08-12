import React  from 'react'
import "../BoxImg/boxImg.css"



const BoxImg = ({img,description,title,text}) => {


const handleClick=(e)=>{
  const whatsappNumber = '5493875603301'; 
  const message = 'Hola, vengo desde su página, me interesa saber más sobre los productos.';
  const encodedMessage = encodeURIComponent(message); 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappLink, '_blank');
 
}
  return (
    <div className='container-boxImg'>
        <section className='style-box'>
            <img className='image-menu' src={img} alt="" />
            <h2>{title}</h2>
            <aside>{description}</aside>
           <button className='btn-box' onClick={handleClick}> {text}</button>
        </section>
    </div>
  )
}


export default BoxImg