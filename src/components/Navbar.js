
import myImage from './assests/1.PNG';
import './style.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons'; 
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  const [isSearchActive, setIsSearchActive] = useState(false);

  const [dropdowns, setDropdowns] = useState({
  ai: false,
  hybrid: false,
  support: false,
  product:false,
});

const toggleDropdown = (key) => {
    setDropdowns((prev) => {
      const newState = {};
      Object.keys(prev).forEach((k) => {
        newState[k] = k === key ? !prev[k] : false;
      });
      return newState;
    });
  };


  return (
   <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-7">  
              <div className="main d-md-flex ">
                {!isSearchActive && (
              <>
              <a href="#" className=" btn btn-light rounded-0 img-fluid p-2 shadow-none "><img src={myImage} alt="logo" ></img></a> 
               <div className="line border border-end "></div>
               <div className="dropdown" style={{ position: 'relative' }}>
                  <button className="btn btn-light rounded-0  px-4 p-3 border-0 dropdown-toggle no-caret shadow-none "  onClick={() => toggleDropdown('ai')}  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  aria-expanded={dropdowns.ai}>
                   AI <FontAwesomeIcon  icon={dropdowns.ai ? faAngleUp : faAngleDown}    className="ps-2"    style={{ transition: 'transform 0.3s ease' }}/>
                  </button>
                  <ul className={`dropdown-menu  show-dropdown   ${dropdowns.ai ? 'show' : ''}`} id="list" aria-labelledby="dropdownMenuButton">
                    <div className="d d-flex justify-content-between p-3">
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/> </a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    </div>
                    <div className="d d-flex justify-content-between pt-5 p-3">
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/> </a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    </div>
                  </ul>
                </div>
                 <div className="dropdown">
                  <button className="btn btn-light rounded-0  px-4 p-3 border-0 dropdown-toggle no-caret shadow-none "  onClick={() => toggleDropdown('hybrid')}  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  aria-expanded={dropdowns.hybrid}>
                   Hybrid Cloud <FontAwesomeIcon    icon={dropdowns.hybrid ? faAngleUp : faAngleDown}    className="ps-2"    style={{ transition: 'transform 0.3s ease' }}/>
                  </button>
                  <ul className={`dropdown-menu show-dropdown ${dropdowns.hybrid ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                   <div className="d d-flex justify-content-between p-3">
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/> </a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    </div>
                    <div className="d d-flex justify-content-between pt-5 p-3">
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/> </a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    </div>
                  </ul>
                </div>
                 <div className="dropdown">
                  <button className="btn btn-light rounded-0  px-4 p-3 border-0 dropdown-toggle no-caret shadow-none "  onClick={() => toggleDropdown('product')}  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  aria-expanded={dropdowns.product}>
                   Products <FontAwesomeIcon    icon={dropdowns.product ? faAngleUp : faAngleDown}    className="ps-2"    style={{ transition: 'transform 0.3s ease' }}/>
                  </button>
                  <ul className={`dropdown-menu s-dropdown ${dropdowns.product ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                             <div className="d-flex">
                            <div className="w-25 px-3  border-end">
                              <h6 className="text-uppercase fw-bold">Features</h6>
                              <a href="#" className="dropdown-item">Example-Text</a>
                              <a href="#" className="dropdown-item">Example</a>
                              <a href="#" className="dropdown-item">Example</a>
                              <a href="#" className="dropdown-item">Example</a>
                              <a href="#" className="dropdown-item">Example</a>
                              <a href="#" className="dropdown-item">Example</a>
                               <a href="#" className="dropdown-item">Example</a>
                               <a href="#" className="dropdown-item">Example</a>
                               <a href="#" className="dropdown-item">Example</a>
                               <a href="#" className="dropdown-item">Example</a>
                               <a href="#" className="dropdown-item">Example</a>
                               <a href="#" className="btn btn-primary ">View All Products</a>
                            </div>
                            <div className="me-4 pe-4">
                              <h1 className="text-uppercase fw-bold">Features</h1>
                              <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>   
                            </div>
                              <div className="me-4 mt-5 pe-4" >   
                                <h1 className="text-uppercase fw-bold mt-1"></h1>
                              <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                 <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a>
                                <a href="#" className="dropdown-item"> <h6>Example</h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a> 
                            </div>
                             </div>                      
                </ul>
                </div>
                 
               <a href="#" className="text-decoration-none rounded-0  btn btn-light px-4 p-3 border-0 dropdown-toggle no-caret shadow-none"> Consulting</a>
                <div className="dropdown">
                  <button className="btn btn-light rounded-0  px-4 p-3 border-0 dropdown-toggle no-caret shadow-none "  onClick={() => toggleDropdown('support')}  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  aria-expanded={dropdowns.support}>
                   Support <FontAwesomeIcon className='ps-2'  icon={dropdowns.support ? faAngleUp : faAngleDown} />   
                  </button>
                  <ul className={`dropdown-menu s-dropdown ${dropdowns.support ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                      <div className="d d-flex justify-content-between p-3">
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/> </a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    </div>
                    <div className="d d-flex justify-content-between pt-5 p-3">
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/> </a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    <li><a className="fs-3 text-decoration-none text-black" href="#">Example <FontAwesomeIcon icon={faArrowRight}/></a></li>
                    </div>
                  </ul>
                </div>
                    <a href="#" className="text-decoration-none rounded-0  btn btn-light px-4 p-3 border-0  no-caret shadow-none "> Think</a>
                        </>)}
                    </div>
                    </div>   
                      <div className="col-md d-md-flex ms-auto justify-content-end   ">
                        {!isSearchActive ? (
                        <button className="btn btn-light p-3 border-0 shadow-none" onClick={() => setIsSearchActive(true)}>
                          <FontAwesomeIcon icon={faSearch} />
                        </button>
                      ) : (
                        <div className="d-md-flex align-items-center w-100">
                          <input
                          type="text"
                          className="form-control form-control-lg border-bottom flex-grow-1"
                          placeholder="Search IBM..."
                          autoFocus
                          id="search"
                          />
                          <button className="btn btn-light p-3 border-0 shadow-none" onClick={() => setIsSearchActive(false)}>
                            ✕
                          </button>
                        </div>
                    )}
                    <a href="#" className="text-decoration-none rounded-0  btn btn-light p-3 border-0  no-caret shadow-none "> <FontAwesomeIcon icon={faComment} /></a>      
                   < div class="dropdown">
                       <button class="btn btn-light rounded-0 p-3 border-0 dropdown-toggle shadow-none no-caret shadow-none " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                         <FontAwesomeIcon icon={faEarthAmericas}/>
                       </button>
                       <ul class="dropdown-menu  rounded-0" aria-labelledby="dropdownMenuButton">
                         <li><a class="dropdown-item bg-dark text-light" href="#">Languages</a></li>
                          <div className="line border-1 border-bottom"></div>
                          <li><a class="dropdown-item" href="#">English</a></li>
                          <div className="line border-1 border-bottom"></div>
                          <li><a class="dropdown-item" href="#">English</a></li>
                          <div className="line border-1 border-bottom"></div>
                          <li><a class="dropdown-item" href="#">English</a></li>
                          <div className="line border-1 border-bottom"></div>
                          <li><a class="dropdown-item" href="#">English</a></li>
                          <div className="line border-1 border-bottom"></div> 
                       </ul>
                     </div>          
                    <div class="dropdown">
                       <button class="btn btn-light rounded-0 p-3 border-0 dropdown-toggle shadow-none no-caret shadow-none " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" >
                         <FontAwesomeIcon icon={faUser }/>
                       </button>
                       <ul class="dropdown-menu p-0 rounded-0" aria-labelledby="dropdownMenuButton">
                         <li><a class="dropdown-item" href="#">My IBM</a></li>
                          <div className="line border-1 border-bottom"></div>
                         <li><a class="dropdown-item " href="#">Log in</a></li>
                       </ul>
                     </div>      
                </div>
                <div className="line border-1 border-secondry border-bottom"></div> 
          </div>  
          
        </div>
 </>
  )
};

export default Navbar;
