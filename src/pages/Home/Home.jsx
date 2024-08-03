import React from 'react'
import "../Home/home.css"
import BoxImg from '../../components/BoxImg/BoxImg'
import waffles from "../../assets/waffle1.jpg"
import tortilla from "../../assets/tortillaProte.jpg"
import donita from "../../assets/donitasColores.jpg"
import Galery from '../../components/Galery/Galery'
import FormContact from '../../components/Form/FormContact'
import Map from '../../components/Map/Map'
import FloatingWhatsAppButton from '../../components/WhatsApp/FloatingWhatsAppButton'
import SliderText from '../../components/SliderTxt/SliderText'
import wafflePng from "../../assets/wafflepng.png"





const Home = () => {



  return (
    <>
      <div className='box-title' id='home'>
        <article id='nosotros' className='container-title' >
          <h2 className='tt'>En Tasty Meals B&B</h2>
          <span  className='welcome'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad animi, aspernatur velit saepe consequatur explicabo sed ducimus. Atque, commodi illum vitae, quibusdam nulla delectus ratione consequatur autem ullam architecto pariatur?
          </span>
         
        </article>
         <img className='img-waffle' src={wafflePng} alt="waffle" />

      </div>

      <div className='container-slider'>
      
        <SliderText/>
      </div>
      <div  id='menu'className='title-menu'>
        <span className='title-title' >Algo de lo que vas a degustar</span>
      </div>
      <div id='menu'  className='container-3boxes'>
      

        <BoxImg className="box-waffle"
          title="Waffles Tasty"
          img={waffles}
          text="Hacer pedido"
          description="Los waffles más deliciosos, 100% caseros y hechos al momento, 
     con sabores especiales como ganache de chocolate, relleno de frutas y crema chantilly."


        />
        <BoxImg className="box-waffle"
          title="Tortilla Protéica"
          img={tortilla}
           text="Hacer pedido"
          description="Los waffles más deliciosos, 100% caseros y hechos al momento, 
     con sabores especiales como ganache de chocolate, relleno de frutas y crema chantilly."


        />
        <BoxImg className="box-waffle"
          title="Mini Donuts"
          img={donita}
           text="Hacer pedido"
          description="Los waffles más deliciosos, 100% caseros y hechos al momento, 
     con sabores especiales como ganache de chocolate, relleno de frutas y crema chantilly."


        />

      </div>
      <div id='eventos' className='my-galery'>
        <section className='container-photos'>
          <h1 className='title-photos'>Compartiendo eventos especiales</h1>
          <p className='description-photos'>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis eum modi aspernatur distinctio molestiae iure
            quidem excepturi pariatur vitae. Quam, voluptate non labore dignissimos
            ea officiis distinctio qui eos officia?</p>
          <Galery />
        </section>

      </div>
      <div id='contacto' className='container-contact'>
        <section className='form'>
          <span className='title-contact'>Contáctanos</span>

          <FormContact />
        </section>
        <section className='map'>
          <span className='title-contact' >Nuestra Dirección</span>
          <Map />
        </section>

      </div>

      <FloatingWhatsAppButton />

    </>
  )
}

export default Home