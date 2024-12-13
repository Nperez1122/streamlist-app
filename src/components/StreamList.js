import React, { useState } from "react";

function StreamList() {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", userInput);
    setUserInput("");
  };

  return (
    <div className="streamlist">
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter a Stream Name:</label>
        <input
          type="text"
          id="input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;
