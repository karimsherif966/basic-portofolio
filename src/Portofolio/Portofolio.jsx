import React, { useState } from 'react';
import img1 from '../assets/photos/poert1.png';
import img2 from '../assets/photos/port2.png';
import img3 from '../assets/photos/port3.png';

export default function Portofolio() {
  const [hover, setHover] = useState(-1);

  const handleMouseEnter = (index) => {
    setHover(index );
  };

  const handleMouseLeave = () => {
    setHover(-1);
  };

  const [overlay,setOverlay] = useState(0);
  const [overlayState, setOverlaystate] = useState (false)

  function handleOverlay (index){
    setOverlay(index);
  }

  function addOverlay(){
    setOverlaystate (true)
  }
  
  function removeOverlay(){
    setOverlaystate (false);
  }

  const portfolioData = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img1 },
    { img: img2 },
    { img: img3 }
  
  ];

  return (
    <div className="portofolio py-5">
      <div className="container py-5">
        <div className="text-center portofolio-title">
          <h1 className="fw-bolder">PORTFOLIO COMPONENT</h1>
          <div className="d-flex justify-content-center">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
        </div>

        <div className="row gy-3 mt-3">
          {portfolioData.map((item, index) => (
            <>
            <div
              key={index + 1}
              className="col-md-4 position-relative overflow-hidden portofolio-card"
              onMouseEnter={() => handleMouseEnter(index )}
              onMouseLeave={handleMouseLeave}
              onClick={()=> {handleOverlay(index );addOverlay()}}
            >
                <div className="position-relative">
                <img src={item.img} className="w-100 rounded-3" alt="Portfolio Item" />
                {hover==index ? <div 
                className={`layout position-absolute top-0 bottom-0 w-100 h-100 rounded-3 d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus text-white"></i>
                </div> : ""}
              </div>
            </div>

             {overlayState==true?<div
              onClick={removeOverlay}
  
              className={`overlay fixed-top d-flex justify-content-center align-items-center `} >
              <img src={portfolioData[overlay].img}></img>
              </div>:''}
            </>
            
          ))}
        </div>

       
      </div>
    </div>
  );
}