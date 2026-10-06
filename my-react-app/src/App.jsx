
// Import the useState Hook from React
import { useState } from "react";

// Create a functional component named App
function App() {

  // Create a state variable named "name"
  // name = stores the current input value
  // setName = function used to update the name
  // "" = initial value is an empty string
  const [name, setName] = useState("");

  // This function runs whenever the input value changes
  const handleChange = (event) => {

    // Get the value entered by the user
    // event.target refers to the input element
    // event.target.value contains the current input value
    setName(event.target.value);
  };

  // Return the JSX that will be displayed on the screen
  return (
    <div>

      {/* Display the heading */}
      <h1>Student Registration</h1>

      {/* 
        This input allows the user to enter their name
        value={name} connects the input with the state
        onChange={handleChange} calls the function when the value changes
      */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      {/* Display the current value of the name */}
      <h2>Hello, {name}</h2>

    </div>
  );
}

// Export the App component
// This allows the component to be used in other files
export default App;


