import React, { useEffect, useState } from 'react'

export default function Services() {


  const [innerWidth , setInnerWidth] = useState(0);

  useEffect(() => {setInnerWidth(window.innerWidth)} ,[innerWidth])

  return <>
  {innerWidth < 992 ?   <div className="services-section  bg-black bg-gradient">
      <div className="container  cardContentBg  vh-100 ">
        <div className="about-title pb-2  text-center mx-auto ">
          <h1 className=' text-white pt-5 pb-2 '>SERVICE </h1>
          <p className=' text-white  text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa ex voluptate impedit.</p>
        </div>
        <div className="row  py-1">


          <div className="col-lg-4 mb-5  ">
            <div className="  serviceIcon px-5   shadow bgGradient text-center mx-auto pb-1 ">
              <i className="fa-solid fs-1 fa-code orange-text card-title  my-2 "></i>
              <h3 className='text-white  mb-2'>Web Development</h3>
              <p className='text-white  mb-2  mx-auto'>
                Developer with over five years
                work experience.
              </p>

            </div>
          </div>

          <div className="col-lg-4   mb-5   ">
            <div className="  px-5  shadow bgGradient serviceIcon  text-center mx-auto pb-1 ">
              <i className="fa-solid fa-pen-nib orange-text fs-1 service-title card-title  my-2 "></i>
              <h3 className='text-white  mb-2'>Graphic Designer</h3>
              <p className='text-white  mb-2  mx-auto'>
                Developer with over five years
                work experience. 
              </p>

            </div>
          </div>

          <div className="col-lg-4   mb-5  ">
            <div className=" shadow px-5 bgGradient serviceIcon  text-center mx-auto  pb-1">
              <i className="fa-solid fa-desktop  orange-text card-title  my-2 "></i>
              <h3 className='text-white  mb-3'>Web Design</h3>
              <p className='text-white  mb-2  mx-auto'>
                Developer with over five years
                work experience. | started in my
                onidron's room,
              </p>

            </div>
          </div>


          
         

        </div>

       

      </div>

    </div>:  <div className="services-section min-vh-100  w-100 bg-black bg-gradient">
      <div className="container  cardContentBg min-vh-100  px-5">
        <div className="about-title pb-5 mb-5 text-center mx-auto ">
          <h1 className='semi-bold text-white pt-5 pb-4 '>SERVICE </h1>
          <h1 className='lead text-white w-50 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa ex voluptate impedit quam doloribus magni laudantium nihil, natus commodi sequi fuga at similique, consequ. Assumenda.</h1>
        </div>
        <div className="row  py-5">


          <div className="col-lg-4 m-0   ">
            <div className="  serviceIcon   shadow bgGradient text-center mx-auto pb-1 ">
              <i className="fa-solid fa-code orange-text card-title semi-bold my-5 "></i>
              <h1 className='text-white bebas-neue-regular mb-3'>Web Development</h1>
              <p className='text-white lead mb-5 w-75 mx-auto'>
                Developer with over five years
                work experience. | started in my
                onidron's room,
              </p>

            </div>
          </div>

          <div className="col-lg-4   m-0   ">
            <div className="  shadow bgGradient serviceIcon  text-center mx-auto pb-1 ">
              <i className="fa-solid fa-pen-nib orange-text service-title card-title semi-bold my-5 "></i>
              <h1 className='text-white bebas-neue-regular mb-3'>Graphic Designer</h1>
              <p className='text-white lead mb-5 w-75 mx-auto'>
                Developer with over five years
                work experience. | started in my
                onidron's room,
              </p>

            </div>
          </div>

          <div className="col-lg-4   m-0  ">
            <div className=" shadow bgGradient serviceIcon  text-center mx-auto  pb-1">
              <i className="fa-solid fa-desktop  orange-text card-title semi-bold my-5 "></i>
              <h1 className='text-white bebas-neue-regular mb-3'>Web Design</h1>
              <p className='text-white lead mb-5 w-75 mx-auto'>
                Developer with over five years
                work experience. | started in my
                onidron's room,
              </p>

            </div>
          </div>


          
         

        </div>

        

      </div>

    </div>}


  </>
}
