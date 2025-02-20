import React, { useState } from 'react';

function Recursive({ setPage }) {
  const [factorialInput, setFactorialInput] = useState(0);  // เก็บค่าที่ใช้คำนวณแฟกทอเรียล
  const [factorialResult, setFactorialResult] = useState(null);  // เก็บผลลัพธ์ของแฟกทอเรียล

  const [fibonacciInput, setFibonacciInput] = useState(0);  // เก็บค่าที่ใช้คำนวณฟีโบนักชี
  const [fibonacciResult, setFibonacciResult] = useState(null);  // เก็บผลลัพธ์ของฟีโบนักชี

  // ฟังก์ชันคำนวณค่าแฟกทอเรียลแบบ Recursion
  const factorial = (n) => {
    if (n <= 1) return 1;  // ถ้า n เป็น 0 หรือ 1 ให้คืนค่า 1 (base case)
    return n * factorial(n - 1);  // คูณค่า n กับแฟกทอเรียลของ (n-1)
  };

  // ฟังก์ชันคำนวณค่าลำดับฟีโบนักชีแบบ Recursion
  const fibonacci = (n) => {
    if (n <= 0) return 0;  // ถ้า n เป็น 0 ให้คืนค่า 0
    if (n === 1) return 1; // ถ้า n เป็น 1 ให้คืนค่า 1 (base case)
    return fibonacci(n - 1) + fibonacci(n - 2);  // คำนวณค่าจากผลรวมของสองค่าก่อนหน้า
  };

  return (
    <div>
      <h2>Recursive Functions</h2>

      {/* ส่วนคำนวณ Factorial */}
      <div>
        <h3>Factorial</h3>
        <input
          type="number"
          value={factorialInput}
          onChange={(e) => setFactorialInput(Number(e.target.value))}
          placeholder="Enter a number"
        />
        <button onClick={() => setFactorialResult(factorial(factorialInput))}>
          Calculate Factorial
        </button>
        {factorialResult !== null && <p>Factorial: {factorialResult}</p>}
      </div>

      {/* ส่วนคำนวณ Fibonacci */}
      <div>
        <h3>Fibonacci Sequence</h3>
        <input
          type="number"
          value={fibonacciInput}
          onChange={(e) => setFibonacciInput(Number(e.target.value))}
          placeholder="Enter a number"
        />
        <button onClick={() => setFibonacciResult(fibonacci(fibonacciInput))}>
          Calculate Fibonacci
        </button>
        {fibonacciResult !== null && <p>Fibonacci: {fibonacciResult}</p>}
      </div>

      {/* ปุ่มกลับไปหน้าแอปหลัก */}
      <button className="btn_back" onClick={() => setPage("app")}>
        Back to App
      </button>
    </div>
  );
}

export default Recursive;
