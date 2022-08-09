import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function ItemQuantity() {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount((count) => normalizeChange(count) + 1);
  };
  let decrement = () => {
    setCount((count) => Math.max(normalizeChange(count) - 1, 0));
  };

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setCount(result);
  };

  // const exampleThing = () => {};

  const normalizeChange = (value) => {
    let newNumber = parseInt(value);
    if (!isNaN(newNumber)) {
      return newNumber;
    }
    return 0;
  };

  console.log(count);
  console.log(typeof count);
  console.log(Number(count));

  return (
    <>
      <Button
        size="small"
        // disabled={count <= 0}
        variant="contained"
        onClick={decrement}
        aria-label="Subtract Item"
      >
        -
      </Button>
      {/* <input /> */}
      <TextField
        value={count}
        id="outlined-basic"
        variant="outlined"
        onChange={handleChange}
      />

      <Button
        size="small"
        variant="contained"
        onClick={increment}
        aria-label="Add Item"
      >
        +
      </Button>
    </>
  );
}
