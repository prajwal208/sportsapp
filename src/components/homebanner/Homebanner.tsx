import React from 'react'
import './homebanner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../images/banner.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'

const Homebanner = () => {
  return (
    <>
     <Carousel autoPlay={true} infiniteLoop={true} transitionTime={1000}>
                <div className='banner_1'>
                    <img src={banner} alt='banner_img' width="100%" height="600px" />
                   
                </div>
                <div  className='banner_1'>
                    <img src={banner2} alt='banner2_img' width="100%" height="600px"/>
                    
                </div>
                <div  className='banner_1'>
                    <img src={banner3} alt='banner3_img' width="100%" height="600px"/>
                    
                </div>
            </Carousel>
    </>
  )
}

export default Homebanner
