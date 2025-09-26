import { FaWhatsapp } from 'react-icons/fa'
import { TbMessageChatbot } from 'react-icons/tb'
import './floatingPopup.css'

export default function FloatingPopup() {
  const openWhatsapp = () => {
    window.open('https://wa.me/9319395333', '_blank')
  }

  return (
    <div className="floating-popup-wrapper">
      <div className="circle-btn main" onClick={openWhatsapp}>
        <TbMessageChatbot color="white" size={30} />
      </div>
    </div>
  )
}