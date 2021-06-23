import React, { useState, useCallback, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
import Nodes from "./Nodes.js";
import Navbar from "../../components/Navbar.js";
import Sidebar from "./Sidebar.js";
import Banner from "../../components/Banner.js";

const Dashboard = (props) => {
  const [currentChild, setCurrentChild] = useState(null);
  const [bannerState, setBannerState] = useState(false);
  const [bannerColor, setBannerColor] = useState(null);
  const [bannerText, setBannerText] = useState(null);

  let history = useHistory();
  let { name } = useParams(); //specific object of child(a node, a service)

  //changes the banner state
  const handleBannerState = useCallback((state) => {
    setBannerState(state);
  }, []);

  //changes the banner color
  const handleBannerColor = useCallback((color) => {
    setBannerColor(color);
  }, []);

  //changes the banner text
  const handleBannerText = useCallback((text) => {
    setBannerText(text);
  }, []);

  //changes the current child in dashboard
  const handleClick = useCallback((next, url) => {
    setCurrentChild(next);
    history.push("/dashboard" + url);
  }, []);

  //on mount
  useEffect(() => {
    // props.children == null
    //   ? setCurrentChild(<Nodes handler={handleClick} />)
    //   : setCurrentChild(

    //change de current dashboard
    setCurrentChild(
      <Child
        component={props.children}
        handler={handleClick}
        name={name}
        handleBannerState={handleBannerState}
        handleBannerColor={handleBannerColor}
        handleBannerText={handleBannerText}
      />
    );
    // );
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <Banner
        color={bannerColor}
        text={bannerText}
        state={bannerState}
        setState={setBannerState}
      />
      <div className="flex w-full px-4 py-4" style={{ height: "90%" }}>
        <Sidebar
          handler={handleClick}
          handleBannerState={handleBannerState}
          handleBannerColor={handleBannerColor}
          handleBannerText={handleBannerText}
        />
        <div className="flex flex-wrap h-full w-full">
          <div className="h-full w-full rounded-lg shadow-md p-4 overflow-y-auto">
            {currentChild}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//function to inject props into component
function Child(props) {
  return (
    <props.component
      handler={props.handler}
      name={props.name}
      handleBannerState={props.handleBannerState}
      handleBannerColor={props.handleBannerColor}
      handleBannerText={props.handleBannerText}
    />
  );
}
