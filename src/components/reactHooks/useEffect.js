import React, { useDebugValue, useEffect, useState } from "react";
import axios from "axios";

const Effect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("hello");
        setData(response.data[count].email);
      });
  }, [count]); //dependency array

  function increament() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{data}</h1>
      <h2>{count}</h2>
      <button onClick={increament}>Click</button>
    </div>
  );
};

export default Effect;
