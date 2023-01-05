import React, { useEffect, useState } from "react";

function App() {
  const [salary, setSalary] = useState(0);

    const calculate=(value)=>{
      return(salary * value/100)
    }

  return (
    <div>
      <form>
        <input
          placeholder="Enter salary"
          onChange={(e)=>{
            setSalary(e.target.value)
          }}
        />
      </form>
      <div>
        <p>{salary}</p>
        <p>40%:{calculate(40)}</p>
        <p>30%:{calculate(30)}</p>
        <p>20%:{calculate(20)}</p>
        <p>10%:{calculate(10)}</p>
      </div>
    </div>
  );
}

export default App;
