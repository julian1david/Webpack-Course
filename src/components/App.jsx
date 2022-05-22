import React, { useState, useEffect } from "react";

//components
import Card from "@components/Card.jsx";

//api
import api from "@utils/api.js";
import random from "@utils/random.js";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const ran = random.getRandomArbitrary(0,826);
  //Get data
  const getData = async () => {
    setLoading(true);
    const response = await api.getData(ran);
    if (response !== false) {
      setData(response);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  /*Loading state*/
  if (loading) {
    return (
      <div className="About">
        <h1 style={{ textAlign: "center" }}>Loading ...</h1>
      </div>
    )
  }

  /*Default state*/
  return (
    <div className="About">
      <Card {...data} />
    </div>
  )
}

export default App;