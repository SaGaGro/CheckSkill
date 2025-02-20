import React, { useState, useEffect } from 'react';
import "./EaE.css";

function ElementEvent({ setPage }) {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [hoverText, setHoverText] = useState("Hover over me!");
  const [inputText, setInputText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);

  const setColor = (color) => {
    setBgColor(color);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // ตรวจสอบว่าอีเมลต้องมี @ และ .com
    if (!emailValue.includes("@") || !emailValue.includes(".com")) {
      setEmailError("Please enter a valid email with @ and .com");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && name && email) {
      alert(`Name: ${name}, Email: ${email}`);
    } else {
      alert("Please fill in the form correctly!");
    }
  };

  return (
    <div className='EaE-container'>
      <h1>ElementAndEvent Page</h1>
      <div className="color-buttons">
        <button className="btn_color_r" onClick={() => setColor("#ff0000")}>Red</button>
        <button className="btn_color_b" onClick={() => setColor("#0000ff")}>Blue</button>
        <button className="btn_color_g" onClick={() => setColor("#008000")}>Green</button>
        <button className="btn_color_y" onClick={() => setColor("#ffff00")}>Yellow</button>
        <button className="btn_color_o" onClick={() => setColor("#ff8000")}>Orange</button>
      </div>
      <hr />
      <div 
        className="interactive-box" 
        onMouseOver={() => setHoverText("You're hovering!")}
        onMouseOut={() => setHoverText("Hover over me!")}
        onClick={() => alert("You clicked the box!")}
        tabIndex={0} 
        onKeyUp={(e) => setInputText(e.target.value)}
      >
        {inputText || hoverText}
      </div>
      <div>
        <input className='input_1'
          type="text" 
          placeholder="Type something..." 
          onKeyUp={(e) => setInputText(e.target.value)}
        />
      </div>
      <hr />
      <div className='form_container'>
        <form  onSubmit={handleSubmit}>
          <div className='form_name'>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className='form_email'>
            <label htmlFor="email">Email: </label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={handleEmailChange} 
              required 
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <hr />
      <button className="btn_back" onClick={() => { setPage("app") }}>
        Back to App
      </button>
      <hr />
    </div>
    
  );
}

export default ElementEvent;
