import React from 'react'
import './Page1.css'
import Group1 from './img/Group1.svg'
import Group2 from './img/Group2.svg'
function Page1() {
  return (
    <div className='Page1'>
        <div className='Table-1'>
            <div className='Tap-Table'>Tap Table</div>
            <div className='Tap-Table-2'>
              <div>О компании</div>
              <div>Условия сотрудничества</div>
              <div>Регистрация</div>
            </div>
        </div>

        <div className='Table-2'>
          <div className='parent-1'>
            <div className='Lorem'> Lorem ipsum </div>
            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in convallis odio. Aliquam erat volutpat. Vivamus accumsan interdum eros non dignissim. Vivamus magna sem, lacinia blandit ultricies quis, sagittis in orci. Duis et pulvinar lectus, ut tempus leo. Ut at dui lorem. Lorem ipsum dolor sit amet, consectetur </div>
            <div className='img-group'>
              <div><img src={Group1}/></div>
              <div><img src={Group2}/></div>
            </div>
          </div>
          <div className='parent-2'></div>
        </div>
    </div>
  )
}

export default Page1