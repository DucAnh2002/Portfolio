import './Footer.css'
import {Facebook, Github} from 'lucide-react'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <h2>Ha Duc Anh</h2>
        <p>© 2025 All rights reserved.</p>
        <div className='icon-contact'>
            <Facebook size={30} className='icon' onClick={() => window.open('https://www.facebook.com/hnacudah2002/', '_blank')} />
            <Github size={30} className='icon' onClick={() => window.open('https://github.com/DucAnh2002', '_blank')} />
        </div>
        <p>Designed by Ha Duc Anh</p>
      </div>
    </div>
  )
}

export default Footer
