import whatsApp from '../../images/whatsapp.svg'
import instagram from '../../images/instagram.svg'
import mail from '../../images/mail.svg'

export default function Footer() {
  return (
    <div className='FooterContainer mt-auto'>
      <div className='row justify-content-center align-items-center'>

        <div className='col' id='company_col'>
          <p> <b>Farah</b> UBSV © 2022</p>
        </div>

        <div className='col' id='icon_col'>
          <img src={whatsApp} alt="whatsApp icon" />
          <img src={instagram} alt="instagram icon" />
          <img src={mail} alt="mail icon" id='mail_icon'/>
        </div>
        
      </div>
    </div>
  )
}