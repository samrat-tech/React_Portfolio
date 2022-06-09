import React from 'react'
import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'

const Social = () => {
  return (
    <div className='footer__socials'>
      <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub size={23}/></a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin size={23}/></a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook size={23}/></a>
    </div>
  )
}

export default Social