import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import TabLayout from "./TabLayout";
import Popup from "./layout/PopupBox";
import { useSelector, useDispatch } from "react-redux";
import Overlay from "./layout/Overlay";
import Footer from "./layout/Footer";
import { setActiveTab } from "../redux/slice/activeTabSlice";

const Lesson = () => {

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.activeTab.currState);

  console.log(activeTab,'curr active')

  const isPopupOpen = useSelector((state) => state.popup.isOpen);

  const isOverlayOpen = useSelector((state) => state.overlay.isOpen);

  const handleTabClick = (tabIndex) => {
    dispatch(setActiveTab(tabIndex));
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <TabLayout 
        handleTabClick={handleTabClick} 
        activeTab={activeTab} />
        <Footer 
        />
      </div>
      {isPopupOpen && <Popup />}
      {isOverlayOpen && <Overlay />}
    </>
  );
};

export default Lesson;
