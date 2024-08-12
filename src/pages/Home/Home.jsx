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
          <h2 className='tt'>Descubre la Autenticidad Artesanal

          </h2>
          <span className='welcome'>
            En Tasty Meals B&B, cada producto es una obra maestra artesanal. Disfruta de nuestros clásicos waffles y donuts, o elige nuestras tortillas proteicas con frutas frescas para una opción saludable.

            Visítanos o haz tu pedido con un clic. ¡Sabor y calidad a tu alcance!
          </span>

        </article>
        <img className='img-waffle' src={wafflePng} alt="waffle" />

      </div>

      <div className='container-slider'>

        <SliderText />
      </div>
      <div id='menu' className='title-menu'>
        <span className='title-title' >Algo de lo que vas a degustar</span>
      </div>
      <div id='menu' className='container-3boxes'>


        <BoxImg className="box-waffle"

          title="Waffles Tasty"
          img={waffles}
          text="Hacer pedido"
          description="Los waffles más deliciosos, 100% caseros y hechos al momento, 
     con sabores especiales como ganache de chocolate, relleno de frutas y crema chantilly. 
     Una excelente opcion para compartir con amigos "


        />
        <BoxImg className="box-waffle"
          title="Tortilla Protéica"
          img={tortilla}
          text="Hacer pedido"
          description="Nuestra tortilla proteíca una de las mejores opciones cuando queres disfrutar 
          de algo rico y cuidar tu dieta a la vez, echa de avena, banana, huevo , recubierto de exquisita pasta de mani y frutas "


        />
        <BoxImg className="box-waffle"
          title="Mini Donuts"
          img={donita}
          text="Hacer pedido"
          description="Las mini donuts! realizadas con masa casera y recubiertas en chocolate y variedad de coverturas de colores, 
          sabrosas y divertidas podes acompañarlas con jugos naturales o una infusion caliente."


        />

      </div>
      <div id='eventos' className='my-galery'>
        <section className='container-photos'>
          <h1 className='title-photos'>Crea Recuerdos Inolvidables</h1>
          <p className='description-photos'>Los buenos momentos quedan grabados para siempre. En Tasty Meals B&B, nos especializamos en hacer que cada reunión con amigos o familia sea especial,
            ofreciendo sabores excepcionales que disfrutas en cada bocado.</p>
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