import { React } from "react";
import ReactDOM from 'react-dom';
import "./style.scss"
import imgBtnClose from "../../../assets/icons/img-btn-close.svg";
import { togglePopup } from "../../../redux/slice/popupSlice";
import { useDispatch } from "react-redux";

const Popup = (tabData) => {

    const dispatch = useDispatch();

  return (
    <>
      <div className="overlay-popup">
        <figure className="popup-main">
          <button
          onClick={()=>{
            dispatch(togglePopup(false));
          }}>
            <img src={imgBtnClose} height='24px' width='24px' />
          </button>
          <div className="popup-container">
            <p
              className="popupContent"
            >{tabData.popupContent}</p>
          </div>
        </figure>
      </div>
    </>
  );
};

export default Popup;
