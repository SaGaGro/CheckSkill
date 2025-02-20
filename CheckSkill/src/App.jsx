import React, { useState } from "react";
import "./app.css";
import Datatype from "./Component/DataType/Datatype";
import ElementEvent from "./Component/ElementandEvent/ElementEvent";
import Algorithm from "./Component/Algorithm/Algorithm"
import SortAlgorithm from "./Component/SortAlgorithm/SortAlgorithm"
import Recursive from "./Component/Recursive/Recursive"
import Todolist from "./Component/TodoList/Todolist"
import GradeCal from "./Component/StudentGrade/GradeCal"
import Datafetch from "./Component/DataFetch/Datafetch"
import Lottery from "./Component/LotteryGen/Lottery"

const App = () => {
  const [page, setPage] = useState("app");

  if (page === "Datatype") {
    return <Datatype setPage={setPage} />;
  }

  if (page === "ElementEvent") {
    return <ElementEvent setPage={setPage} />;
  }
  if (page === "Algorithm") {
    return <Algorithm setPage={setPage} />;
  }
  if (page === "SortAlgorithm") {
    return <SortAlgorithm setPage={setPage} />;
  }
  if (page === "Recursive") {
    return <Recursive setPage={setPage} />;
  }
  if (page === "Todolist") {
    return <Todolist setPage={setPage} />;
  }
  if (page === "GradeCal") {
    return <GradeCal setPage={setPage} />;
  }
  if (page === "Datafetch") {
    return <Datafetch setPage={setPage} />;
  }
  if (page === "Lottery") {
    return <Lottery setPage={setPage} />;
  }

  return (
    <div className="app-container">
      <h1>MyCheckSkill_204</h1>
      <nav>
        <button className="btn_1" onClick={() => setPage("Datatype")}>
          DataType
        </button>
        <button className="btn_1" onClick={() => setPage("ElementEvent")}>
          ElementAndEvent
        </button>
        <button className="btn_1" onClick={() => setPage("Algorithm")}>
        Algorithm
        </button><br />
        <button className="btn_1" onClick={() => setPage("SortAlgorithm")}>
        SortAlgorithm
        </button>
        <button className="btn_1" onClick={() => setPage("Recursive")}>
        Recursive
        </button>
        <button className="btn_1" onClick={() => setPage("Todolist")}>
        Todolist  
        </button>
        <button className="btn_1" onClick={() => setPage("GradeCal")}>
        GradeCal  
        </button>
        <button className="btn_1" onClick={() => setPage("Datafetch")}>
        DataFetch  
        </button>
        <button className="btn_1" onClick={() => setPage("Lottery")}>
        Lottery  
        </button>
      </nav>
      <div className="content">
        <p>Kuantip U-tong 66033050</p>
      </div>
    </div>
  );
};

export default App;
