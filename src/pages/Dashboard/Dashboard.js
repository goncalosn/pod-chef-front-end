import React, { useState, useCallback, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
import Nodes from "./Nodes.js";
import Navbar from "../../components/Navbar.js";
import Sidebar from "./Sidebar.js";

const Dashboard = (props) => {
  const [currentChild, setCurrentChild] = useState(null);
  let history = useHistory();
  let { name } = useParams();

  const handleClick = useCallback((next, url) => {
    setCurrentChild(next);
    history.push("/dashboard" + url);
  }, []);

  //on mount
  useEffect(() => {
    // props.children == null
    //   ? setCurrentChild(<Nodes handler={handleClick} />)
    //   : setCurrentChild(
    setCurrentChild(
      <Child component={props.children} handler={handleClick} name={name} />
    );
    // );
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex w-full px-4 py-4" style={{ height: "90%" }}>
        <Sidebar handler={handleClick} />
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

function Child(props) {
  return <props.component handler={props.handler} name={props.name} />;
}
