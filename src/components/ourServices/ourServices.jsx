import './ourServices.css'
import React from 'react'
import Login from '../button/button'



export default function OurServices({title, children, }) {
  return (
    <div className='service'>
      <h5 className='textBlue'>{title}</h5>
      <p className='lorem'>{children}</p>
      <Login >Узнать подробнее</Login>
    </div>
  )
}
