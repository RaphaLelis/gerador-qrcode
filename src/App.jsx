import { useState } from 'react'
import QRCode from 'react-qr-code'
import QrCodeLink from 'qrcode'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QrCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <motion.h1
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{duration: 0.9}}
      >Generate Qrcode</motion.h1>
      <QRCode 
        value={link}
      />

      <input
      className='input'
       placeholder='Digite seu link...'
       value={link}
       onChange={ (e) => handleQrcode(e)}
      />

      <motion.a 
      href={qrcodeLink} 
      download={`qrcode.png`}
      whileHover={{ scale: 1.3 }}
      style={{ x: "0" }}
      transition={{duration: 0.3}}
      >Download QrCode</motion.a>
    </div>
  )
}

export default App
