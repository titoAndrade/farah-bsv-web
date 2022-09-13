import logotype from '../../images/logotype.svg'
import video from '../../videos/backgroundVideoTest.mp4'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id='homeContainer'>
      <video autoPlay loop muted >
        <source src={video} type='video/mp4'/>
      </video>
      
      {/* __SECTION_1__ */}
      <div className='row justify-content-center align-items-center' id='filter'>
        <div className='col-1' id='logo'>
          <img src={logotype} alt="logotype" />
        </div>
      </div>

      {/* __SECTION_2__ */}
      <div className='row justify-content-center align-items-center' id='second'>
        <div className='col-4' id='image_figure'></div>
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' id='prelude'>
          <h1>Farah</h1>
          <h2>Un Beso con</h2>
          <h2>sabor a vino</h2>
          <h4>brief history</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      {/* __SECTION_3__ */}
      <div className='row justify-content-center align-items-center' id='third'>
   
        <div className='col-4' id='card_1'>
          <div className='product_container'>
            <h1>Tablas</h1>
            <button><Link to='/Tablas' className='card-link'>ver mas</Link></button>
          </div>
        </div>
        <div className='col-4' id='card_2'>
          <div className='product_container' id='container_alt'>
            <h1>Panes</h1>
            <button><Link to='/Panes' className='card-link'>ver mas</Link></button>
          </div>
        </div>
        <div className='col-4' id='card_3'>
          <div className='product_container'>
            <h1>Deeps</h1>
            <button><Link to='/Contacto' className='card-link'>ver mas</Link></button>
          </div>
        </div>
        <div className='col-4' id='card_4'>
          <div className='product_container' id='container_alt'>
            <h1>Vinos</h1>
            <button><Link to='/Nosotros' className='card-link'>ver mas</Link></button>
          </div>
        </div>

      </div>

      {/* __SECTION_4__ */}
      <div className='row justify-content-center align-items-center' id='fourth'>
        <div className='row justify-content-center align-items-center' id='sale_card'>
  
          <div className='col-xl-6 col-lg-6 col-md-4 col-sm-10'>
            <h1 className='text_h1'>OFERTA del mes</h1>
            <h3 className='text_h3'>Tabla mediterránea para 8</h3>
            <p className='text_p'>Rica tabla mediterránea compuesta por quesos y fiambres con frutos secos, pancitos y 2 deeps de tu elección</p>
            <p className='text_p2'>
              $ 259.900
            </p>
            <button>obtener</button>
          </div>
  
          <div className='col-xl-6 col-lg-6 col-md-4 col-sm-10'>
            <img src="https://i.pinimg.com/564x/4f/71/4b/4f714b11d6e132a5d286e091a8b44543.jpg" alt="tabla de quesos en oferta" />
          </div>
  
        </div>
      </div>

    </div>
  )
}