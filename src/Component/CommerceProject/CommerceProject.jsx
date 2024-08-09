import React from 'react'
import { Link } from 'react-router-dom'
import todos1 from '../../imgs/AFTER/0.png';
import todos2 from '../../imgs/AFTER/1.png';
import todos3 from '../../imgs/AFTER/2.png';
import todos4 from '../../imgs/AFTER/3.png';
import todos5 from '../../imgs/AFTER/4.png';
import todos6 from '../../imgs/AFTER/5.png';
import todos7 from '../../imgs/AFTER/6.png';
import todos8 from '../../imgs/AFTER/7.png';
import todos9 from '../../imgs/AFTER/8.png';


export default function commerceProject() {
    return <>
        <div className="todos-section  w-100 bg-black bg-gradient">
            <div className="container cardContentBg  min-vh-100 ">
                <div className="project-title pb-5  text-center mx-auto ">
                    <h1 className=' semi-bold  pt-5 orange-text '>FRESH CART <span className='semi-bold text-white text-uppercase'>React </span> </h1>
                    
                     <p className='lead text-white mt-5'>In a <span className='orange-text fw-bold'>Fresh Cart App</span>   is a dynamic <span className='orange-text fw-bold'>E-commerce Platform</span> designed to provide users with a seamless shopping experience. It integrates various features such as adding and deleting products, managing the cart, and removing all items at once through a robust API. The app is structured into several key components: Cart, where users can view and manage their selected items; Category, which organizes products into different groups for easy browsing; Brands, allowing users to explore products by specific brands; Home, which serves as the main dashboard displaying featured products and deals; and Wishlist, where users can save products they wish to purchase later. Together, these components work in harmony to deliver a comprehensive and intuitive shopping experience.  </p> 
                     <hr/>
                     <Link target="_blank" to={'https://al-mutasim1.github.io/Fresh-Cart/#/login'}><span className=' h3  orange-text fw-bold'># You can take a tour of my site </span></Link>

                    

                </div>
               



                <div className="row todosBorder  gy-4 p-5 my-4  ">
                <h1 className=' bebas-neue-regular bold-smaller text-white  text-center'>Fresh cart <span className=' orange-text bebas-neue-regular bold-smaller '>GALLERY</span></h1>
                    

                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos8} alt="" />
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
                                    <img className='w-100' src={todos2} alt="" />
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
                                    <img className='w-100' src={todos5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos9} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className=" cardSec   ">
                            <div className='cardPreview '>
                                <div className="cart-img">
                                    <img className='w-100' src={todos7} alt="" />
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
