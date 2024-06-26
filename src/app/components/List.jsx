"use client";

import Card from "./Card";
import { useState, useEffect } from "react";

const List = ({ bankData }) => {
  const [bankList, setBankList] = useState(bankData);
  const [search, setSearch] = useState("");

  const handleSortBankListAs = () => {
    console.log(bankList);
    const sortedBankList = [...bankList];
    sortedBankList.sort((a, b) => {
      let bankA = a.bankName.toLowerCase(),
        bankB = b.bankName.toLowerCase();

      if (bankA < bankB) {
        return -1;
      }
      if (bankA > bankB) {
        return 1;
      }
      return 0;
    });
    setBankList(sortedBankList);
    console.log(sortedBankList);
  };

  const handleSortBankListDes = () => {
    console.log(bankList);
    const sortedBankList = [...bankList];
    sortedBankList.sort((a, b) => {
      let bankA = a.bankName.toLowerCase(),
        bankB = b.bankName.toLowerCase();

      if (bankA < bankB) {
        return 1;
      }
      if (bankA > bankB) {
        return -1;
      }
      return 0;
    });
    setBankList(sortedBankList);
    console.log(sortedBankList);
  };

  useEffect(() => {}, []);

  return (
    <main>
      <section className="flex flex-col md:flex-row items-center justify-center mb-10">
        <p className="">Search Bank</p>
        <div className="mb-5">
          <input
            id="searchBank"
            type="search"
            className="mr-10 ml-5 font-medium hover:text-gray-900 bg-blue-100 border-2 border-blue-900"
            onChange={(event) => setSearch(event.target.value.toLocaleLowerCase())}
          ></input>
        </div>
        <div className="mb-5">
          <div>
            <a className="mr-2">Sort Bank List</a>
            <button
              className="border-2 border-gray-300 px-1 py-1 rounded-md mr-2"
              onClick={handleSortBankListAs}
            >
              Ascending
            </button>
            <button
              className="border-2 border-gray-300 px-1 py-1 rounded-md"
              onClick={handleSortBankListDes}
            >
              Descending
            </button>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center mb-10">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {bankList
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.bankName.toLowerCase().includes(search);
              })
              .map((bankItem, index) => {
                return (
                  <Card
                    key={index}
                    bankObject={bankItem}
                    bankList={bankList}
                    setBankList={setBankList}
                  />
                );
              })}
          </div>
          {
            bankList.length === 0 &&<section className="font-bold text-blue-600">Por el momento no hay elementos para mostrar, porfavor recagra la página</section>
          }
        </div>
      </section>
    </main>
  );
};

export default List;
