import React, { useState } from 'react';
import "./Algorithm.css";

function Algorithm({ setPage }) {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);
  const [age, setAge] = useState('');
  const [ageCategory, setAgeCategory] = useState('');
  const [number, setNumber] = useState('');
  const [parity, setParity] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loopMessage, setLoopMessage] = useState('');

  const calculateArea = () => {
    const r = parseFloat(radius);
    if (isNaN(r) || r <= 0) {
      alert("ใส่ค่ารัศมี");
      return;
    }
    const pi = 3.14;
    setArea(pi * r * r);
  };
  
  const handleAgeCheck = () => {
    try {
      const a = parseInt(age);
      if (isNaN(a) || a <= 0) {
        throw new Error("ใส่เลขให้มันถูก");
      }
      if (a <= 12) {
        setAgeCategory("เด็ก");
      } else if (a <= 19) {
        setAgeCategory("วัยรุ่น");
      } else {
        setAgeCategory("ผู้ใหญ่");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  

  const handleNumberCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      alert("Please enter a valid number");
      return;
    }
    setParity(num % 2 === 0 ? "เลขคู่" : "เลขคี่");
  };

  const handleForLoop = () => {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      result += i + ' ';
    }
    alert(`Numbers 1 to 10: ${result}`);
  };

  const handleWhileLoop = () => {
    let input = prompt('Enter a value (type "exit" to stop):');
    let loopResult = '';
    while (input !== 'exit') {
      loopResult += `You entered: ${input}\n`;
      input = prompt('Enter a value (type "exit" to stop):');
    }
    setLoopMessage(loopResult + 'Loop ended.');
  };
  

  return (
    <div>
      <h2>Algorithm: Circle Area Calculation</h2>
      <div>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          placeholder="Enter radius"
        />
        <button onClick={calculateArea}>Calculate Area</button>
        {area !== null && <p>The area of the circle is: {area}</p>}
      </div>

      <hr />
      
      {/* Age Category */}
      <div>
        <h3>Check Age Category</h3>
        <input
          // type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
        <button onClick={handleAgeCheck}>Check Age</button>
        {ageCategory && <p>คุณเป็น: {ageCategory}</p>}
      </div>

      {/* Number Parity */}
      <div>
        <h3>Check Number Parity</h3>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
        />
        <button onClick={handleNumberCheck}>Check Parity</button>
        {parity && <p>ตัวเลขนี้เป็น: {parity}</p>}
      </div>

      <hr />
      
      {/* For Loop */}
      <div>
      <h3>For Loop Algorithm</h3>
        <button onClick={handleForLoop}>Display Numbers 1-10</button>
      </div>

      {/* While Loop */}
      <div>
      <h3>While Algorithm</h3>
        <button onClick={handleWhileLoop}>Start While Loop</button>
        {loopMessage && <p>{loopMessage}</p>}
      </div>
      <hr />
      <div>

      </div>
<hr />
      <button className="btn_back" onClick={() => { setPage("app") }}>
        Back to App
      </button>
    </div>
  );
}

export default Algorithm;
