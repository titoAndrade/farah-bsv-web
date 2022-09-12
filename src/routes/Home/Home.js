import logotype from '../../images/logotype.svg'
import video from '../../videos/backgroundVideoTest.mp4'

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
            <button>ver mas</button>
          </div>
        </div>
        <div className='col-4' id='card_2'>
          <div className='product_container' id='container_alt'>
            <h1>Panes</h1>
            <button>ver mas</button>
          </div>
        </div>
        <div className='col-4' id='card_3'>
          <div className='product_container'>
            <h1>Deeps</h1>
            <button>ver mas</button>
          </div>
        </div>
        <div className='col-4' id='card_4'>
          <div className='product_container' id='container_alt'>
            <h1>Vinos</h1>
            <button>ver mas</button>
          </div>
        </div>

      </div>

      {/* __SECTION_4__ */}
      {/* <div className='row justify-content-center align-items-center' id='fourth'>
        hola
      </div> */}

    </div>
  )
}