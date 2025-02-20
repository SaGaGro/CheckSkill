import React, { useState } from 'react';

function SortAlgorithm({ setPage }) {
  const [randomArray, setRandomArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  // สร้าง Array ขนาด 100 ช่องและสุ่มตัวเลข
  const generateRandomArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * 1000)); // สุ่มตัวเลข 0-999
    }
    return array;
  };

  // ฟังก์ชัน Bubble Sort
  const bubbleSort = (array) => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // สลับตำแหน่ง
        }
      }
    }
    return arr;
  };

  // ฟังก์ชัน Selection Sort
  const selectionSort = (array) => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // สลับตำแหน่ง
    }
    return arr;
  };

  // ฟังก์ชันสำหรับการเรียงลำดับ
  const handleSort = (type) => {
    let sorted = [];
    if (randomArray.length === 0) {
      alert('Please generate a random array first!');
      return;
    }
    if (type === 'bubble') {
      sorted = bubbleSort(randomArray);
    } else if (type === 'selection') {
      sorted = selectionSort(randomArray);
    }
    setSortedArray(sorted); // แสดงผลลัพธ์ที่เรียงแล้ว
  };

  // ฟังก์ชันสำหรับสุ่มอาเรย์
  const handleRandom = () => {
    const randomArray = generateRandomArray();
    setRandomArray(randomArray); // ตั้งค่าอาเรย์ที่สุ่มมา
    setSortedArray([]); // เคลียร์อาเรย์ที่เรียงแล้ว
  };

  return (
    <div>
      <h2>Sort Algorithm: Bubble Sort and Selection Sort</h2>

      <div>
        <button onClick={handleRandom}>Generate Random Array</button> {/* ปุ่มสุ่มอาเรย์ */}
        <button onClick={() => handleSort('bubble')}>Bubble Sort</button>
        <button onClick={() => handleSort('selection')}>Selection Sort</button>
      </div>

      <div>
        <h3>Random Array</h3>
        <label>{randomArray.join(', ')}</label> {/* แสดงผลลัพธ์ของอาเรย์สุ่ม */}
      </div>

      <div>
        <h3>Sorted Array</h3>
        <label>{sortedArray.join(', ')}</label> {/* แสดงผลลัพธ์ของอาเรย์ที่เรียงแล้ว */}
      </div>

      <button className="btn_back" onClick={() => { setPage("app") }}>
        Back to App
      </button>
    </div>
  );
}

export default SortAlgorithm;
