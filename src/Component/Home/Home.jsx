import React, { useEffect, useState } from 'react';
import { motion, stagger } from 'framer-motion';
export default function Home() {


  const textFrondEnd = "FRONTEND WEB DEVELOPER";
  const textName = "AL-MU'TASIM"


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


  const titleVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
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


  const [innerWidth , setInnerWidth] = useState(0);

  useEffect(() => {setInnerWidth(window.innerWidth)} ,[innerWidth])

  return <>
   {innerWidth < 992 ?  <div className='    main-page w-100 vh-100  '>
      <div className="   main-page  black-main  ">
        <div className="container-fluid main-page   ">
          <div className="row   ">
            <div className=" cardContentBg ">
              <div className="title vh-100   d-flex  justify-content-around align-items-center  ">
                <div className='bg-danger'>
                </div>
                <div className='mb-5 pb-5'>
                  <h1 className='bebas-neue-regular light  '>HELLO , I'M </h1>
                  <motion.h1
                    variants={textVariant}
                    initial='hidden'
                    animate='visible'
                    
                    className='bebas-neue-regular  orange-text '>
                    {textName.split("").map((char, index) =>
                      <motion.span
                        key={index}
                        variants={spanVariant}
                      >{char}
                      </motion.span>
                    )}

                  </motion.h1>
                  
                  <motion.h1
                    variants={titleVariant}
                    initial='hidden'
                    animate='visible'

                    className='bebas-neue-regular light animate '
                  >
                    {textFrondEnd.split("").map((char, index) =>
                      <motion.span
                        key={index}
                        variants={spanVariant}
                      >{char}
                      </motion.span>
                    )}

                  </motion.h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>: <div className='bgImage   main-page w-100 h-100 '>
      <div className="   main-page  black-main ">
        <div className="container-fluid main-page  ">
          <div className="row   ">
            <div className=" bgImage ">
              <div className="title  vh-100 d-flex  justify-content-around align-items-center  ">
                <div className='bg-danger'>
                </div>
                <div className='mb-5 pb-5'>
                  <h1 className='bebas-neue-regular light  '>HELLO , I'M </h1>
                  <motion.h1
                    variants={textVariant}
                    initial='hidden'
                    animate='visible'
                    
                    className='bebas-neue-regular brands orange-text '>
                    {textName.split("").map((char, index) =>
                      <motion.span
                        key={index}
                        variants={spanVariant}
                      >{char}
                      </motion.span>
                    )}

                  </motion.h1>
                  
                  <motion.h1
                    variants={titleVariant}
                    initial='hidden'
                    animate='visible'

                    className='bebas-neue-regular light animate '
                  >
                    {textFrondEnd.split("").map((char, index) =>
                      <motion.span
                        key={index}
                        variants={spanVariant}
                      >{char}
                      </motion.span>
                    )}

                  </motion.h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>}


  </>
}
