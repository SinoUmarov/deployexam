import './Price.css'

import { Login2 } from '../button/button'

export default function Price({src, children, what, first, second, third, fourth, fifth}) {
  return (
    <div className='divPrice'>
      <div className='priceImg'>
        <img src={src} alt="" />
        <h3>{children}</h3>
      </div>
        <hr />

      <div className='priceWhat'>
        <h4>{what}</h4>
        <div className='priceWhat2'>
            <p>{first}</p>
            <p>{second}</p>
            <p>{third}</p>
            <p>{fourth}</p>
            <p>{fifth}</p>
        </div>
      </div>

      <div className='gotov'>
        <hr />
        <div className='gotovChild'>
            <h4>Готовность</h4>
            <p>7 раб. дней</p>
        </div>
            <hr />
        <div className='gotovChild'>
            <h4>Язык</h4>
            <p>рус. / англ.</p>
        </div>
                <hr />
        <div className='gotovChild'>
            <h4>Стоимость</h4>
            <p><b style={{color: '#1178B2'}}>$1 000 </b></p>
        </div>
      </div>
      <Login2>Оставить заявку</Login2>
    </div>
  )
}

