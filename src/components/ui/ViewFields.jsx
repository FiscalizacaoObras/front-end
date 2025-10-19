import React from "react";
import relatorio from "../../assets/relatorio.jpeg";

function ViewFields({ imageUrl }) {
  return (
    <div className="bg-white h-[50vh] rounded-md shadow-lg p-4 flex flex-col gap-1 justify-between">
      <h2 className="text-xl font-bold">Nome do Template</h2>
      <div
        className="w-full flex justify-center items-center overflow-hidden rounded-md h-[60vh] bg-gray-100"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : `url(${relatorio})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        {!imageUrl &&(<div className="bg-black/30 text-white p-2 rounded">
          Modelo opcional
        </div>)}
      </div>
    </div >
  );
}

export default ViewFields;
