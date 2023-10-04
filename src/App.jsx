
import CalculatorButtons from "./CalculatorButtons"
import Screen from "./assets/Screen"
import { useState } from "react"

export default function App() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
  })
  const [operation, setOperation] = useState(null)
  const buttonsObj = {
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operations: ["+", "-", "*", "/", "="],
    del: ["C", "."],
  }
  const { number, operations, del } = buttonsObj;

  /**
   * Updates the calculator state based on the clicked button value and performs the corresponding calculations.
   * @param {any} value - The value of the clicked button.
   */
  const handleClick = (value) => {
    let newValue = value.toString();
    let newCalc = { ...calc };

    if (calc.current === "0") {
      newCalc.current = newValue;
    } else {
      newCalc.current += newValue;
    }

    setCalc(newCalc);

    if (["-", "+", "*", "/"].includes(value)) {
      setOperation(value);
      setCalc({
        ...newCalc,
        total: newCalc.current,
        current: "0",
      });
    }

    console.log(calc)
    console.log(operation)

    if (value === "=" && operation) {
      let result = 0;
      switch (operation) {
        case "+":
          result =parseFloat(newCalc.total) +parseFloat(newCalc.current);
          break;
        case "-":
          result =parseFloat(newCalc.total) -parseFloat(newCalc.current);
          break;
        case "*":
          result =parseFloat(newCalc.total) *parseFloat(newCalc.current);
          break;
        case "/":
          result =parseFloat(newCalc.total) /parseFloat(newCalc.current);
          break;
        default:
          result =parseFloat(newCalc.current);
          break;
      }
      setCalc({
        ...newCalc,
        total: result.toString(),
        current: result.toString(),
      });
    }

    if(value === "C"){
      setCalc({
        ...calc,
        current: "0",
        total: "0"

      })
    }
  }

  return (
    <div className="w-full h-full p-3 mt-30 sm:h-screen sm:mt-0 flex justify-center">
      <div className=" border-slate-500 sm:border rounded-lg h-full sm:p-4 sm:h-[30em] overflow-hidden sm:w-[20em] bg-slate-400">
        <div className="mx-2">
          <Screen display={calc.current} />
        </div>
        <div>
          <CalculatorButtons numbers={number} operations={operations} deleteBtns={del} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
