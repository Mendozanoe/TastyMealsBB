import React, { Children } from 'react'
import "../Modal/modalDescription.css"




function ModalDescription() {

  return (
    
    <div className='container-modal'>
   <div className='container-modal'>
        <article>
            <h1>{titleModal}</h1>
            <Children/>
            <button></button>            
        </article>
        
    </div>
    
</div>
  )
}

export default ModalDescription