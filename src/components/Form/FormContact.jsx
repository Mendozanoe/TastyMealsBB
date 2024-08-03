import React, { useState } from 'react'
import "../Form/formContact.css"
import Button from '../Buttons/Button';



const FormContact = () => {
  //Aqui declaro un estado inicial del fromulario, y como se va a actualizar
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: ""
    });
    //con esta funcion se actualiza el estado de formData con los datos que usuario escribe

    const handleChange=(e)=>{
      const{name,value}=e.target;
      setFormData({
        ...formData,
        [name]:value
      })
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Datos del formulario",formData)
    }

  

  return (

    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="name">Nombre: </label>
        <input 
        type="text"
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required />
      </div>
      <div className='form-group'>
        <label htmlFor="email">E-mail: </label>
        <input 
        type="email"
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required />
      </div>

      <div className='form-group'>
        <label htmlFor="message">Mensaje: </label>
        <textarea 
        name="message" 
        id="message"
        value={formData.message}
        onChange={handleChange}
        required> Dejanos aqui tu mensaje</textarea>
      </div>
      <Button text="Enviar" onClick={handleSubmit} />
    </form>
  )
}

export default FormContact