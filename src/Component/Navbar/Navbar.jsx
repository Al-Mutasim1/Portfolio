import React, { useContext, useEffect, useHistory, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Home from '../Home/Home'
import { mediaContext } from '../Context/mediaContext';




export default function Navbar() {

  const location = useLocation();
  let [pathName, setPathName] = useState('');

  const { innerHeight, setInnerHeight, innerWidth, setInnerWidth } = useContext(mediaContext);



  useEffect(() => {
    setPathName(location.pathname);
    console.log(location.pathname);
  }, [location]);


  useEffect(() => {
    setInnerHeight(window.innerHeight);
    console.log(window.innerHeight);
  }, [innerHeight])

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    console.log(window.innerWidth);
  }, [innerWidth])

  return <>
    {(pathName === '/') ? <div className='d-flex main-page border-color overflow-hidden vh-100 '>
      <nav className="navbar navbar-expand-lg flex-column main-page h-100  d-flex navbar-white navColor">
        <div className="container-fluid ">
          <Link className="navbar-brand  my-5 pb-5 bebas-neue-regular semi-bold  text-light" to={'/'}>L <span className='orange-text'>O </span>G <span className='orange-text'>O</span></Link>
          <button className="navbar-toggler orange-main  mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2  ">

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-house orange-text"></i>
                <Link className="nav-link active nav-links  light " aria-current="page" to={'/'}>Home</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-address-card orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/about'}>About</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-screwdriver-wrench orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/services'}>Services</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-address-book orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/contact'}>Contact</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-diagram-project orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/projects'}>Projects</Link>
              </li>
            </ul>
            <div className="social orange-text fs-2 mt-5 d-flex mx-auto justify-content-center align-items-center ">
              <Link target="_blank" to={'https://github.com/Al-Mutasim1?tab=repositories'} className='text-white'><i className="fa-brands fa-github me-4 "></i></Link>
              <Link target="_blank" to={'https://www.linkedin.com/feed/'} className='text-white'><i className="fa-brands fa-linkedin me-4 "></i></Link>
              <Link target="_blank" to={'https://www.instagram.com'} className='text-white'><i className="fa-brands fa-instagram me-4 "></i></Link>
              <Link target="_blank" to={'https://x.com/i/flow/login'} className='text-white text-center'><i class="fa-brands fa-square-x-twitter "></i></Link>
            </div>
          </div>
        </div>


        <p className='lead text-center orange-text fw-bold mt-3'>© 2024 Al-Mu'tasim</p>

      </nav >
      <Outlet></Outlet>

    </div> : <div className='d-flex main-page border-color min-vh-100  '>
      <nav className="navbar navbar-expand-lg flex-column main-page min-vh-100  d-flex navbar-white navColor">
        <div className="container-fluid ">
          <Link className="navbar-brand  my-5 pb-5 bebas-neue-regular semi-bold  text-light" to={'/'}>L <span className='orange-text'>O </span>G <span className='orange-text'>O</span></Link>
          <button className="navbar-toggler orange-main  mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2  ">

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-house orange-text"></i>
                <Link className="nav-link active nav-links  light " aria-current="page" to={'/'}>Home</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-address-card orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/about'}>About</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-screwdriver-wrench orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/services'}>Services</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-address-book orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/contact'}>Contact</Link>
              </li>

              <li className="nav-item mb-4 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-diagram-project orange-text"></i>
                <Link className="nav-link nav-links  light ms-2" to={'/projects'}>Projects</Link>
              </li>
            </ul>
            <div className="social orange-text  fs-2 mt-5 d-flex mx-auto justify-content-center align-items-center  row">
              <div className="col-md-3">
                <Link target="_blank" to={'https://github.com/Al-Mutasim1?tab=repositories'} className='text-white'><i className="fa-brands fa-github me-4 "></i></Link>
              </div>
              <div className="col-md-3">
                <Link target="_blank" to={'https://www.linkedin.com/feed/'} className='text-white'><i className="fa-brands fa-linkedin me-4 "></i></Link>
              </div>
              <div className="col-md-3">
                <Link target="_blank" to={'https://www.instagram.com'} className='text-white'><i className="fa-brands fa-instagram me-4 "></i></Link>
              </div>
              <div className="col-md-3">
                <Link target="_blank" to={'https://x.com/i/flow/login'} className='text-white text-center'><i class="fa-brands fa-square-x-twitter "></i></Link>
              </div>
            </div>
          </div>
        </div>


        <p className='lead text-center orange-text fw-bold mt-3'>© 2024 Al-Mu'tasim</p>

      </nav >
      <Outlet></Outlet>

    </div>}


  </>

}
