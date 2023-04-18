import React, { useState } from "react";

const Count = () => {
  const [value, setValue] = useState(0); //value is a variable and setValue is a function
  const [name, setName] = useState("Ritesh");

  //   if (value > 10) {
  //     return;
  //   }
  function changeName() {
    setName("Dhrubajyoti");
  }
  function increament() {
    setValue(value + 1);
  }

  return (
    <>
      <div>
        <h1>{value}</h1>
        <button onClick={increament}>INC.</button>
      </div>

      <div>
        <h1>{name}</h1>
        <button onClick={changeName}>CHN.</button>
      </div>
    </>
  );
};

export default Count;

//flow : create useState. This will have a variable(value) and a function(setValue). We will create a function and in that function we will call the setValue function.
