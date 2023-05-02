import React from "react";
import "./style.scss"

import { useDispatch } from "react-redux";
import { toggleOverlay } from "../../../redux/slice/overlaySlice";
import  footerNext from "../../../assets/icons/footer-next.svg";
import  footerPrev  from "../../../assets/icons/footer-prev.svg";

const Overlay = () => {

    const dispatch = useDispatch();

  return (
    <div className="overlay-popup">
      <div className="overlay-content">
        <button className="center-button" onClick={()=>{dispatch(toggleOverlay(false))}}>Go To Lab</button>
        <div className='dot-description'>
          <img src={footerPrev}/>
          <ul className="dots">
            <li><div className="dot active"><img src="../../../assets/icons/bullet-checked.png"/></div></li>
            <li><div className="dot selected"></div></li>
            <li><div className="dot "></div></li>
            <li><div className="dot "></div></li>
          </ul>
          <img src={footerNext}/>
        </div>
        <div className="overlay-footer">
          <button className="overlay-footer-btn">Next</button>
        </div>
        <div >
        <div className="description selected-description"><p>Select buttons to navigate to different screens of a section. A filled circle indicates the screen that you are currently on.</p></div>
        <div className="description active-description"><p>Checkmarks will appear on each screen and section as you complete them</p></div>
        <div className="description next-description"><p>Go to the next section</p></div>
      </div>
      </div>
    </div>
  );
};

export default Overlay;
