
// Import the useState Hook from React
import { useState } from "react";

// Create a functional component named Counter
function Counter() {

  // useState(0) creates a state variable named count
  // count = stores the current counter value
  // setCount = function used to update the count value
  // 0 = initial value of count
  const [count, setCount] = useState(0);

  // This function will run when the button is clicked
  const increase = () => {

    // Update the count value by increasing it by 1
    setCount(count + 1);
  };

  // Return the HTML (JSX) that will be displayed on the screen
  return (
    <div>

      {/* Display the current count value */}
      <h1>Count: {count}</h1>

      {/* 
        When the button is clicked,
        the increase function will be called
      */}
      <button onClick={increase}>
        Increase
      </button>

    </div>
  );
}

// Export the Counter component
// So that it can be imported and used in another file
export default Counter;
