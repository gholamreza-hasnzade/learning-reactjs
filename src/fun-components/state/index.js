import React, { useEffect, useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);

  /*   useEffect(() => {
      console.log("this work"); // Mount - Updating
    }) */

  /*   useEffect(() => {
        console.log("this work"); // Mount - Updating
      },[count]) */
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default State;
