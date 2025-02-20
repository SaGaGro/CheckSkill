import React from "react";
import "./datatype.css";

const  clearConsole = () =>{
  console.clear();
}

const logVariable = () => {
  clearConsole()
  const myString = "Hello, Kunatip!";
  const myInteger = 20;
  const myBoolean = true;

  console.log("String:", myString);
  console.log("Integer:", myInteger);
  console.log("Boolean:", myBoolean);
};

const ChangtypeVariable = () => {
  clearConsole()
  const strToInt = parseInt("10");
  const strToFloat = parseFloat("3.14");
  const intToStr = String(100);

  console.log("Convert String to Integer:", strToInt);
  console.log("Convert String to Float:", strToFloat);
  console.log("Convert Integer to String:", intToStr);
};

const EditArray = () => {
  clearConsole()
  let myArray = [1, 2, 3, 4, 5];
  console.log("Original Array:", myArray);
  // push array
  myArray.push(6);
  console.log("After Push:", myArray);
  // delete array index 2 
  myArray.splice(2, 1);
  console.log("After Splice:", myArray);
  //change value array
  myArray[0] = 99;
  console.log("After Modification:", myArray);
};

const EditObject = () => {
  clearConsole()
  let student = { name: "Tom", age: 50, grade: "A" };
  console.log("Student Object:", student);
  student.age = 21;
  student.city = "Bangkok";
  delete student.grade;
  console.log("Updated Student Object:", student);
};

const TupleandSet = () => {
  clearConsole()
  const myTuple = Object.freeze(["Apple", 10, true]);
  console.log("Tuple-like Array:", myTuple);
  let mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
  console.log("Set with Unique Values:", mySet);
  mySet.add(6);// 1 2 3 4 5 6
  mySet.delete(2); // 1 3 4 5 6
  console.log("Updated Set:", mySet);
};

const handleJSONOperations = () => {
  clearConsole()
  const student = { name: "Alice", age: 25, city: "New York" };
  const jsonString = JSON.stringify(student);
  console.log("JSON String:", jsonString);
  
  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedObject);
};


const Datatype = ({ setPage }) => {
  return (
    <div className="dtt-container">
      <h1 className="dtt-title">Datatype Page</h1>
      <p>Click the button to execute datatype operations.</p>
      <div className="btn-container">
      <button className="btn_start" onClick={logVariable}>เก็บค่าในตัวแปร</button>
      <button className="btn_start" onClick={ChangtypeVariable}>เปลี่ยน Type ตัวแปร</button>
      <button className="btn_start" onClick={EditArray}>แก้ไข Array</button>
      <button className="btn_start" onClick={EditObject}>แก้ไข Object</button>
      <button className="btn_start" onClick={TupleandSet}>กำจัดค่าซ้ำกัน</button>
      <button className="btn_start" onClick={handleJSONOperations}>อ่าน/เขียน JSON</button>
      </div>
      <button className="btn_back" onClick={() => { clearConsole(); setPage("app"); }}>
        Back to App
      </button>
    </div>
  );
};

export default Datatype;