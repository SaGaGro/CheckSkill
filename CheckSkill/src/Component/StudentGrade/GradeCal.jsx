import React, { useState } from 'react';
import './grade.css'

function GradeCal({setPage}) {
  const subjects = [
    { code: 'CSI101 ', credits: 3 },
    { code: 'CSI102 ', credits: 3 },
    { code: 'CSI203 ', credits: 3 },
    { code: 'CSI204 ', credits: 3 },
    { code: 'CSI305 ', credits: 3 }
  ];

  const [grades, setGrades] = useState({});
  const [gpa, setGpa] = useState(null);

  const gradeToPoint = (score) => {
    if (score >= 80) return 4.0;
    if (score >= 70) return 3.0;
    if (score >= 60) return 2.0;
    if (score >= 50) return 1.0;
    return 0.0;
  };

  const handleChange = (event, subject) => {
    const { value } = event.target;
    setGrades({ ...grades, [subject]: value });
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(({ code, credits }) => {
      const score = parseFloat(grades[code]) || 0;
      totalPoints += gradeToPoint(score) * credits;
      totalCredits += credits;
    });

    setGpa(totalPoints / totalCredits);
  };

  return (
    <div className='container'>
      <h2>Grade Calculator</h2>
      {subjects.map(({ code }) => (
        <div key={code}>
          <label>
            {code}: &nbsp; 
            <input className='grade_input'
              type="number"
              min="0"
              max="100"
              value={grades[code] || ''}
              onChange={(e) => handleChange(e, code)}
            />
          </label>
        </div>
      ))}
      <button onClick={calculateGPA}>Calculate GPA</button>
      {gpa !== null && <h3>Your GPA: {gpa.toFixed(2)}</h3>}
      <div>
      <button className="btn_back" onClick={() => setPage("app")}>
        ⬅ Back to App
      </button>
      </div>
    </div>
  );
}

export default GradeCal;
