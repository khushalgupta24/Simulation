import React from "react";
import "./style.scss";
import { tabs } from "../../../assets/data/tabs";
import Popup from "../PopupBox";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../../redux/slice/popupSlice";
import { toggleOverlay } from "../../../redux/slice/overlaySlice";

const Header = () => {
  const isPopupOpen = useSelector((state) => state.popup.isOpen);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(togglePopup(true));
  };

  const overlay = () => {
    dispatch(toggleOverlay(true));
  }

  return (
    <>
      <header id="header">
        <div className="header-container">
          <h1>{tabs.templateTitle}</h1>
          <div className="header-buttons">
            <div
              onClick={() => {
                toggle();
              }}
            >
              Save
            </div>
            <div
             onClick={() => {
              overlay();
             }}>Help</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
