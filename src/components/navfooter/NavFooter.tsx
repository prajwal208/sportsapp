import React from 'react'
import './navfooter.css'
import home from '../images/home-2.png'
import cup from '../images/cup.png'
import plus from '../images/add.png'
import headphone from '../images/headphone.png'
import book from '../images/book-saved.png'

const NavFooter = () => {
  return (
    <>
      <section className='navfooter_main_wrap'>
        <div className='navfooter'>
            <div className='navsec'>
                <img src={home} alt='home'/>
                <p>Home</p>
            </div>

            <div  className='navsec'>
                <img src={cup} alt='home'/>
                <p>Matches</p>
            </div>

            <div  className='navsec'>
                <img src={plus} alt='home'/>
                <p>Tournament</p>
            </div >

            <div  className='navsec'>
                <img src={headphone} alt='home'/>
                <p>Live</p>
            </div>

            <div  className='navsec'>
                <img src={book} alt='home'/>
                <p>Syllabus</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default NavFooter
