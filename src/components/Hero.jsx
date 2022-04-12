import React from 'react'
import logo from '../img/logo.jpeg'
import Slider from 'infinite-react-carousel';
import  aro1 from '../img/aros sin fondo.png'
import { motion } from "framer-motion"
import  aro3 from '../img/a (1).png'

import  aro5 from '../img/a (3).png'
import  aro6 from '../img/a (4).png'
import  aro7 from '../img/a (5).png'
export default function Hero() {

  return (
    
        <section className='hero'>
            
            
            <div>
                <motion.img src={logo} alt="logo" animate={{ x:[-1000,0]  }}
                  transition={{ duration: 2 }}/>
                <motion.p animate={{opacity:[0,100]}} transition={{ duration: 22 }}>Joyeria y accesorios hechas a mano en recina</motion.p>
            </div>
            <Slider className="slider" dots={false} autoplay={true} autoplaySpeed={2000} duration={500} arrows={false} adaptiveHeight={true} centerPadding={70}>
              <div>
                <img src={aro7} alt="" />
                
                
              </div>
              <div>
                <img src={aro1} alt="" />
                
              </div>
              <div>
              <img src={aro3} alt="" />
              </div>
              <div>
                <img src={aro5} alt="" />
              </div>
              <div>
                <img src={aro6} alt="" />
              </div>
            
            </Slider>

            
           
            
        


        </section>
    
  )
}
