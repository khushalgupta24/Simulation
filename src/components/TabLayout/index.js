import React from "react";
import "./style.scss";
import { tabs } from "../../assets/data/tabs";
import TextBox from "../layout/TextBox";

const TabLayout = (props) => {
  const { handleTabClick, activeTab } = props;

  return (
    <main>
      <div className="tabs">
        <div className="tab-list">
          {tabs.tabContent.map((tab, index) => (
            <button
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.tabContent.map((tab, index) => (
            <div
              key={index}
              className={` ${activeTab === index ? "active" : "hidden"}`}
            >
              <div className="tab-content-wrapper">
                {tab.view === "image" ? (
                  <div className="tab-container image-container">
                    <div className="left-container">
                      <img
                        src={tab.image}
                        alt="my img"
                        className="image-right"
                      />
                    </div>
                    <div className="right-container">
                      <div className="audio-container"></div>
                      <div className="tab-para">
                        <p dangerouslySetInnerHTML={{__html : tab.content}}/>
                      </div>
                    </div>
                  </div>
                ) : tab.view === "carousel" ? (
                  <div className="tab-container carousel-container">
                    <div className="left-container">
                      <TextBox />
                    </div>
                    <div className="right-container">
                      <p>{tab.content}</p>
                    </div>
                  </div>
                ) : tab.view === "activity" ? (
                  <div className="tab-container activity-container">
                    <div className="left-container">
                      {/* <img src=../ alt="my img" /> */}
                    </div>
                    <div className="right-container">
                      <p>{tab.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="tab-container">This is empty view</div>
                )}

                <div className="footer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TabLayout;
