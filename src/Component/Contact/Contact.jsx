import React, { useEffect, useState } from 'react'

export default function Contact() {




  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => { setInnerWidth(window.innerWidth) }, [innerWidth])



  return <>
    {innerWidth < 992 ? <div className="contact-section min-vh-100  cardContentBg"> 
      <div className="container  min-vh-100  cardContentBg 
       px-5">
        <div className="title-contact my-5  ">
          <h1 className='text-white text-center mb-3  fw-bold'>CONTACT ME</h1>
          <p className=' text-white text-center mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eveniet iusto, </p>
        </div>

        <div className="row mt-5  ">

          <div className="col-lg-4  my-3 ">
            <div className=" shadow contactCart  d-flex justify-content-center align-items-center p-4  ">
              <div className='me-5 '>
                <i className="fa-regular fa-desktop borderColor orange-text card-title  p-2 rounded rounded-circle  "></i>
              </div>
              <div className=' cart-content text-center'>
                <h3 className='text-white  fw-bold mb-3 text-center'>CALL ME</h3>
                <h6 className='text-white'>+212 556 89 23</h6>
                <h6 className='text-white'>+212 556 89 23</h6>
              </div>


            </div>


          </div>

          <div className="col-lg-4  my-3  ">
            <div className=" shadow contactCart d-flex justify-content-center align-items-center p-4  ">
              <div className='me-5'>
                <i className="fa-regular fa-envelope borderColor orange-text card-title  p-2 rounded rounded-circle  "></i>
              </div>
              <div className='cart-content text-center'>
                <h3 className='text-white fw-bold mb-3 text-center ' >E-MAIL</h3>
                <h6 className='text-white'>example@gmail.com</h6>
                <h6 className='text-white'>example@yahoo.com</h6>
              </div>


            </div>


          </div>

          <div className="col-lg-4  my-3  ">
            <div className=" shadow  contactCart  d-flex justify-content-center align-items-center p-4  ">
              <div className='me-5'>
                <i className="fa-regular fa-location-dot borderColor orange-text card-title  p-2 rounded rounded-circle  "></i>
              </div>
              <div className='cart-content text-center'>
                <h3 className='text-white fw-bold mb-3'>LOCATION</h3>
                <h6 className='text-white'>21 Avcilar-Ambarli</h6>
                <h6 className='text-white'>Istambul-Turkey</h6>
              </div>


            </div>


          </div>


        </div>

        <div className="getMessage  my-5 ">
          <h1 className='text-white mb-3 text-center justify-content-center align-content-center align-items-center fw-bold'>GET IN TOUCH</h1>

          <div className="form row  d-flex  ">



            <div className="col-md-6 mb-3">

              <div className="form-control p-2 cardContentBg inputBorder   borderFocus  ">

                <input placeholder="Name" aria-label="Name" className='form-control shadow-none  text-white cardContentBg border border-0' type="text" />

              </div>
            </div>

            <div className="col-md-6">
              <div className="form-control  text-white p-2 cardContentBg inputBorder borderFocus ">

                <input placeholder="Email" aria-label="Email" className=' shadow-none text-white form-control cardContentBg border border-0 ' type="text" />

              </div>
            </div>


          </div>


          <div className="form-control  p-2 cardContentBg inputBorder  mt-3 borderFocus  ">

            <input placeholder="Subject" aria-label="Email" className='form-control text-white  shadow-none  cardContentBg border border-0' type="text" />

          </div>



          <div className="form row d-flex flex-column overflow-hidden ">
            <div className="col-md-8 w-100">
              <div className="form-control w-100 p-2 cardContentBg inputBorder  my-3  borderFocus ">

                <textarea placeholder="Message" aria-label="Email" className='form-control text-white shadow-none  cardContentBg border border-0' rows="2" cols="20" type="text" />

              </div>


            </div>
            <div className="col-md-4  w-100">
              <div className='  text-center'>
                <button className='btn sendBtn orange-main text-center px-4 fw-bolder py-2'>Send Message</button>
              </div>
            </div>
          </div>



        </div>











      </div>
    </div> : <div className="contact-section   w-100 bg-black bg-gradient">
      <div className="container  cardContentBg vh-100 px-5">
        <div className="title-contact my-5 ">
          <h1 className='text-white semi-bold text-center mb-3 '>CONTACT ME</h1>
          <p className='lead text-white w-50 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eveniet iusto, impedit ad voluptatibus provident esse nostrum fugiat quae voluptatum quia nisi aperiam exercitationem, molestiae soluta. Sunt Lorem, ipsum dolor.!</p>
        </div>

        <div className="row mt-5  ">

          <div className="col-xl-4   ">
            <div className=" shadow contactCart  d-flex justify-content-center align-items-center p-4  ">
              <div className='me-5 '>
                <i className="fa-regular fa-desktop borderColor orange-text card-title bold-smaller p-4 rounded rounded-circle  "></i>
              </div>
              <div className=' cart-content'>
                <h1 className='text-white  bebas-neue-regular mb-3 text-center'>Call Me</h1>
                <h5 className='text-white'>+212 556 89 23</h5>
                <h5 className='text-white'>+212 556 89 23</h5>
              </div>


            </div>


          </div>

          <div className="col-xl-4    ">
            <div className=" shadow contactCart d-flex justify-content-center align-items-center p-4  ">
              <div className='me-5'>
                <i className="fa-regular fa-envelope borderColor orange-text card-title bold-smaller p-4 rounded rounded-circle  "></i>
              </div>
              <div className='cart-content'>
                <h1 className='text-white bebas-neue-regular mb-3 text-center ' >E-mail</h1>
                <h5 className='text-white'>example@gmail.com</h5>
                <h5 className='text-white'>example@yahoo.com</h5>
              </div>


            </div>


          </div>

          <div className="col-xl-4    ">
            <div className=" shadow  contactCart  d-flex justify-content-center align-items-center p-4  ">
              <div className='me-5'>
                <i className="fa-regular fa-location-dot borderColor orange-text card-title bold-smaller p-4 rounded rounded-circle  "></i>
              </div>
              <div className='cart-content'>
                <h1 className='text-white bebas-neue-regular mb-3'>Location</h1>
                <h5 className='text-white'>21 Avcilar-Ambarli</h5>
                <h5 className='text-white'>Istambul-Turkey</h5>
              </div>


            </div>


          </div>


        </div>

        <div className="getMessage pt-5 my-5 ">
          <h1 className='text-white semi-bold mb-5 text-center justify-content-center align-content-center align-items-center'>Get In Touch</h1>

          <div className="form row  d-flex  ">



            <div className="col-md-6">

              <div className="form-control p-2 cardContentBg inputBorder   borderFocus  ">

                <input placeholder="Name" aria-label="Name" className='form-control shadow-none  text-white  cardContentBg border border-0' type="text" />

              </div>
            </div>

            <div className="col-md-6">
              <div className="form-control  text-white p-2 cardContentBg inputBorder borderFocus ">

                <input placeholder="Email" aria-label="Email" className=' shadow-none text-white form-control cardContentBg border border-0 ' type="text" />

              </div>
            </div>


          </div>


          <div className="form-control  p-2 cardContentBg inputBorder  mt-5 borderFocus  ">

            <input placeholder="Subject" aria-label="Email" className='form-control text-white  shadow-none  cardContentBg border border-0' type="text" />

          </div>



          <div className="form row d-flex flex-column overflow-hidden ">
            <div className="col-md-8 w-100">
              <div className="form-control w-100 p-2 cardContentBg inputBorder  my-5  borderFocus ">

                <textarea placeholder="Message" aria-label="Email" className='form-control text-white shadow-none  cardContentBg border border-0' rows="4" cols="50" type="text" />

              </div>


            </div>
            <div className="col-md-4  w-100">
              <div className='  text-center'>
                <button className='btn sendBtn orange-main text-center px-5 fw-bolder py-3'>Send Message</button>
              </div>
            </div>
          </div>



        </div>











      </div>
    </div>}
  </>
}
