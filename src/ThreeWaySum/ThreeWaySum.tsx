import React, { useState } from "react";

type Props = {};

export default function ThreeWaySum({}: Props) {
  const [number, setNumber] = useState<string>("");
  const [total, setTotal] = useState<number>();
  console.log("total: ", total);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleSubmitWay1 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isNumber: number = +number;
    let result: number = 0;
    for (let i = 0; i <= isNumber; i++) {
      result += i;
    }
    setTotal(result);
    return result;
  };
  const handleSubmitWay2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const isNumber: number = +number;

    let numbers: number = 0;
    let result: number = 0;

    while (numbers < isNumber) {
      numbers++;
      result += numbers;
    }

    setTotal(result);

    return result;
  };
  const handleSubmitWay3 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isNumber: number = +number;
    let t: number = 0;
    let result: number = 0;
    do {
      t++;
      result += t;
    } while (t < isNumber);
    setTotal(result);
    return result;
  };
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className="">
          <label
            htmlFor="Enter the number to total"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter the number to total
          </label>
          <input
            type="text"
            id="Enter the number to total"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            required
          />
          {total && <h3>Total : {total ? total : ""}</h3>}
        </div>
      </div>
      <div className="flex flex-column justify-start">
        <button
          onClick={(e) => {
            handleSubmitWay1(e);
          }}
          className="text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calculate total way 1
        </button>
        <button
          onClick={(e) => {
            handleSubmitWay2(e);
          }}
          className="text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calculate total way 2
        </button>
        <button
          onClick={(e) => {
            handleSubmitWay3(e);
          }}
          className="text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calculate total way 3
        </button>
      </div>
    </form>
  );
}
