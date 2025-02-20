import React, { useState } from "react";
import "./Lottery.css";

function Lottery({setPage}) {
  const [lotteryNumber, setLotteryNumber] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");

  // Function to generate a random 6-digit number
  const generateLotteryNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    setLotteryNumber(randomNumber);
    console.log(randomNumber);
    setMessage("");
  };

  // Function to handle user's guess and check if it matches the lottery number
  const handleGuess = () => {
    if (userGuess === "") {
      setMessage("Please enter a guess!");
      return;
    }

    if (userGuess.length !== 6) {
      setMessage("Please enter exactly 6 digits!");
      return;
    }

    if (parseInt(userGuess) === lotteryNumber) {
      setMessage("Congratulations! You guessed the correct number!");
    } else {
      setMessage("Sorry! Try again.");
    }
  };

  return (
    <div className="Lottery">
      <h1>Lottery Game</h1>
      <button onClick={generateLotteryNumber}>Generate Lottery Number</button>
      {lotteryNumber !== null && (
        <div>
          <p>Lottery number has been generated!</p>
          <div>
          <input
            type="number"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your 6-digit guess"
            maxLength="6"
          />
          </div>
          <button onClick={handleGuess}>Submit Guess</button>
          <p>{message}</p>
        </div>
      )} <br />
            <button className="btn_back" onClick={() => setPage("app")}>
        ⬅ Back to App
      </button>
    </div>
  );
}

export default Lottery;
