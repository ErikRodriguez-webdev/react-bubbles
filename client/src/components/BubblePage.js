import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  //Rerender Get call after SaveEdit
  const [triggerGet, setTriggerGet] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((response) => {
        //console.log(response);
        setColorList(response.data);
        setTriggerGet(false);
      })
      .catch((error) => {
        //console.log(error.response);
        setTriggerGet(false);
      });
  }, [triggerGet]);

  return (
    <>
      <ColorList colors={colorList} setTriggerGet={setTriggerGet} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
