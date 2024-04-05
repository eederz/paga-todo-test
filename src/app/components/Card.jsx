"use client";
import Image from "next/image";

const Card = ({ bankObject, bankList, setBankList }) => {
  const { bankName, description, url } = bankObject;

  const handleEliminar = (currentBankName) => {
    const newBakList = bankList.filter(
      (bankItem) => bankItem.bankName !== currentBankName
    );
    setBankList(newBakList);
  };

  return (
    <section className="bg-white border-4 border-black-900 rounded-lg p-4 mb-2">
      <Image
        width={200}
        height={200}
        src={url}
        alt="Placeholder Image"
        className="w-full h-48 rounded-md"
      />
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2">{bankName}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-1 py-4">
        <button
          className="border-2 rounded-md border-black-800 px-4 py-4"
          onClick={() => handleEliminar(bankName)}
        >
          Eliminar
        </button>
      </div>
    </section>
  );
};

export default Card;
