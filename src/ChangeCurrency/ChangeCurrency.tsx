import React, { useEffect, useRef, useState } from "react";
import { data } from "../FetchData/Data";

type Props = {};

export default function ChangeCurrency({}: Props) {
  const renderValueSelect = () => {
    return data.map((item, index) => {
      return <option value={item.price}>{item.currency}</option>;
    });
  };

  const [exchangeValue, setExchangeValue] = useState<number>(1);

  const [convertedValue, setConvertedValue] = useState<number>();

  const [valueFirst, setValueFirst] = useState<number>(0);

  const [valueLast, setValueLast] = useState<number>(0);

  const handleOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = +e.target.value;
    setExchangeValue(value);
  };

  useEffect(() => {
    let isCurrency = data.find((item, index) => {
      return item.currency === "USD";
    });
    if (valueFirst && valueLast) {
      if (isCurrency?.price) {
        const valueFirstChange = valueFirst / +isCurrency?.price;
        const valueLastChange = valueLast / +isCurrency?.price;
        const convertTwoUnits = valueFirstChange / valueLastChange;
        const totalConvertUnit = exchangeValue * convertTwoUnits;
        setConvertedValue(totalConvertUnit);
      }
    } else {
      return;
    }
  }, [valueFirst, valueLast, exchangeValue]);
  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setValueLast(+e.target.value);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setValueFirst(+e.target.value);
    }
  };
  return (
    <div className="mt-12 px-10 flex items-center justify-center">
      <div className="flex items-center border border-orange-400 max-w-[280px] rounded-lg cursor-pointer ">
        <input
          type="text"
          width={100}
          className="w-[100px] h-full outline-none  px-5 border-r-2 cursor-pointer  font-bold text-lg border-solid"
          autoFocus
          onChange={(e) => {
            handleOnchangeInput(e);
          }}
        />
        <form className="max-w-sm">
          <select
            id="countries"
            // value={selectValue}
            onChange={(e) => {
              handleChange(e);
            }}
            className="border-none border outline-none w-full cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose currency unit</option>
            {renderValueSelect()}
          </select>
        </form>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 mx-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
      <div className="flex items-center border border-orange-400 max-w-[280px] rounded-lg cursor-pointer ">
        <input
          type="text"
          width={100}
          className="w-[100px] h-full outline-none  px-5 border-r-2 cursor-pointer  font-bold text-lg border-solid"
          //   autoFocus
          value={convertedValue ? convertedValue.toFixed(2) : ""}
          onChange={(e) => {
            handleOnchangeInput(e);
          }}
        />
        <form className="max-w-sm">
          <select
            id="countries"
            className="border-none border outline-none w-full cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              handleChangeCurrency(e);
            }}
          >
            <option selected>Choose currency unit</option>

            {renderValueSelect()}
          </select>
        </form>
      </div>
    </div>
  );
}
