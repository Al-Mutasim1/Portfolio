import React from 'react'
import { Link } from 'react-router-dom'
import todos from '../../imgs/clipboard-with-coffee-camera-flowers-bouquet-table.jpg'
import todos1 from '../../imgs/1.png';
import todos2 from '../../imgs/2.png'
import todos3 from '../../imgs/3.png'
import todos4 from '../../imgs/4.png'
import todos5 from '../../imgs/5.png'
import todos6 from '../../imgs/6.png'


export default function Todos() {
    return <>
        <div className="todos-section  w-100 bg-black bg-gradient">
            <div className="container cardContentBg  min-vh-100 ">
                <div className="project-title pb-5  text-center mx-auto ">
                    <h1 className=' semi-bold  pt-5 orange-text '>TODOS <span className='semi-bold text-white text-uppercase'>React </span> </h1>
                    
                     <p className='lead text-white mt-5'>In a <span className='orange-text fw-bold'>Todo App </span> built with React, CRUD operations (Create, Read, Update, Delete) can be efficiently managed using libraries like Formik, React-Router-Dom, and Toast notifications. Formik simplifies form handling by managing form state, validation, and submission, making it easier to add or update todos. React-Router-Dom helps in navigating between different components, such as listing all <span className='orange-text fw-bold'>todos </span>, adding a new one, or editing an existing one. Toast notifications are used to provide feedback to the user, such as confirming a successful operation or showing error messages during CRUD operations. Together, these tools create a smooth and user-friendly experience for managing <span className='orange-text fw-bold'>todos. </span>  </p>
                     <hr/>
                     <Link target="_blank" to={'https://al-mutasim1.github.io/TODOS-React-App/'}><span className=' h3  orange-text fw-bold'># You can take a tour of my site  </span></Link>
                </div>
               



                <div className="row todosBorder  gy-4 p-5 my-4  ">
                <h1 className=' bebas-neue-regular bold-smaller text-white  text-center'>TODOS <span className=' orange-text bebas-neue-regular bold-smaller '>GALLERY</span></h1>
                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>









                </div>

                



            </div>
        </div>


    </>
}
