import React, { useContext, useEffect, useState } from 'react'
import profilePicture from "../../imgs/smiling-man-with-arms-crossed.jpg"
import { motion, stagger } from 'framer-motion';
import { mediaContext } from '../Context/mediaContext';

export default function About() {

  const [innerWidth , setInnerWidth] = useState(0);

  useEffect(() => {setInnerWidth(window.innerWidth)} ,[innerWidth])




  const textFrondEnd = "Frontend Developer";


  const textVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }

    },
  }


  const spanVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    },



  }










  return <>
   {innerWidth < 992 ?  <div className="about-section  cardContentBg">
      <div className="container  cardContentBg h-100 overflow-hidden ">
        <div className="about-title pb-5 mb-3 text-center mx-auto ">
          <h1 className=' text-white pt-5 pb-2 '>ABOUT ME </h1>
          <p className=' text-white  text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa ex voluptate impedit quam doloribus magni laudantium nihil, natus commodi sequi fuga at similique, consequ. Assumenda.</p>
        </div>

        <div className="row  mt-2 justify-content-center align-items-center px-5">
          <div className="col-md-4">
            <img className='w-100 border-image' src={profilePicture} alt="" />
          </div>

          <div className="col-md-7 offset-md-1 ">
            <div className="about-me pt-2">

              <h4 className='text-center text-white'>Al-Mu'tasim Ali</h4>
              <motion.h5
                variants={textVariant}
                initial='hidden'
                animate='visible'
                className=' orange-text pb-2 text-center'>
                {textFrondEnd.split("").map((char, index) =>
                      <motion.span
                        key={index}
                        variants={spanVariant}
                      >{char}
                      </motion.span>
                    )}
              </motion.h5>

              <h6 className='text-white text-center pb-4'>Hello! I'm Alex Smith a self-taught & award winning Digital Designer &
                Developer with over five years work experience.  </h6>
            </div>

            <div className="buttons mb-2  text-center ">
              <button
             
               className='btn border-small downloadCV orange-text text-center fw-bolder py-2 me-3 '>
                Download CV</button>
              <button 
              
              className='btn hire orange-main text-center fw-bolder py-2 my-3 '>
                Hire Me</button>

            </div>


          </div>


        </div>

      </div>
    </div>: <div className="about-section bg-black bg-gradient w-100">
      <div className="container  cardContentBg h-100 ">
        <div className="about-title pb-5 mb-5 text-center mx-auto ">
          <h1 className='semi-bold text-white pt-5 pb-4 '>ABOUT ME </h1>
          <h1 className='lead text-white w-50 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa ex voluptate impedit quam doloribus magni laudantium nihil, natus commodi sequi fuga at similique, consequ. Assumenda.</h1>
        </div>

        <div className="row pt-5 mt-5 justify-content-center align-items-center px-5">
          <div className="col-md-4">
            <img className='w-100 border-image' src={profilePicture} alt="" />
          </div>

          <div className="col-md-7 offset-md-1 ">
            <div className="about-me">

              <h1 className='semi-bold text-white'>Al-Mu'tasim Ali</h1>
              <motion.h1
                variants={textVariant}
                initial='hidden'
                animate='visible'
                className='bold-smaller orange-text pb-5'>
                {textFrondEnd.split("").map((char, index) =>
                      <motion.span
                        key={index}
                        variants={spanVariant}
                      >{char}
                      </motion.span>
                    )}
              </motion.h1>

              <h6 className='text-white lead pb-5'>Hello! I'm Alex Smith a self-taught & award winning Digital Designer &
                Developer with over five years work experience. I started in my children':
                room, got pro at renowned digital agencies akij co and nork blue lebel.
                Now I'm based in USA, America, working for Apple fredmansky and enjoy
                ing the life in the countryside. ike to travel. I have already travelled.
                I have couple of hobbies but i like to travel. I have already travelled
                almost all the districts of our country with my father. I am fond of fruit. </h6>
            </div>

            <div className="buttons mb-5">
              <motion.button
              initial={{x:-300}}
              animate={{x:0}}
              transition={{delay:0.4}}
               className='btn border-small downloadCV orange-text fw-bolder py-2 me-3 px-5'>
                Download CV</motion.button>
              <motion.button 
              initial={{x:-600}}
              animate={{x:0}}
              transition={{delay:0.4}}
              className='btn hire orange-main  fw-bolder py-2 my-3 px-5'>
                Hire Me</motion.button>

            </div>


          </div>


        </div>

      </div>
    </div>}
  </>
}
