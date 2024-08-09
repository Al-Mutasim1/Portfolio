import React from 'react'
import todos from '../../imgs/clipboard-with-coffee-camera-flowers-bouquet-table.jpg'
import Ecommerce from '../../imgs/10626306.jpg'
import portfolio from '../../imgs/black-frame-with-copy-space-top-view.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Projects() {
  return <>
    <div className="services-section   w-100 bg-black bg-gradient">
      <div className="container cardContentBg h-100 ">
        <div className="project-title pb-5  text-center mx-auto ">
          <h1 className='semi-bold text-white pt-5 pb-4 orange-text '>PORTFOLIO </h1>
          <h1 className='lead text-white w-50 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa ex voluptate impedit quam doloribus magni laudantium nihil, natus commodi sequi fuga at similique, consequ. Assumenda.</h1>
       
        </div>

        <div className="row   p-5  ">
        <p className=' semi-bold  mt-3 orange-text text-center bebas-neue-regular'>PROJECTS</p>
          <Link
                to={'/todosproject'}
            className="col-lg-6 cardSec  "
          >

            <div className='cardPreview '>
              <div className="cart-img">
                <img className='w-100' src={todos} alt="" />
              </div>
              <div className="portfolio-content text-center p-3 border border-1">
                <h1 className=' text-white testBg mb-0 bold-smaller bebas-neue-regular'>TODOS</h1>

              </div>
            </div>
          </Link>


          <Link
          to={'/commerceproject'}
            className="col-lg-6 cardSec "
          >

            <div className='cardPreview '>
              <div className="cart-img">
                <img className='w-100' src={Ecommerce} alt="" />
              </div>
              <div className="portfolio-content text-center p-3  border border-1">
                <h1 className='  text-white testBg mb-0 bold-smaller bebas-neue-regular'>fresh-cart</h1>

              </div>
            </div>
          </Link>






        </div>

        {/* <div className="row  ">

          <Link
            
            className="col-md-6 cardSec   mx-auto  my-5 py-5 "
          >

            <div className='cardPreview '>
              <div className="cart-img">
                <img className='w-100 ' src={portfolio} alt="" />
              </div>
              <div className="portfolio-content text-center p-3 border border-1">
                <h1 className='bg-black text-white  mb-0 bold-smaller bebas-neue-regular'>PORTFOLIO</h1>

              </div>
            </div>
          </Link>
        </div> */}





      </div>
    </div>

  </>
}
