import React, { useEffect, useRef, useState } from "react";
import relatorio from "../../assets/relatorio.jpeg";

function ViewFields({ imageUrl, template, selectedFields = [], setHoveredFieldId }) {
  const imgRef = useRef(null);
  const [scale, setScale] = useState({ scaleX: 1, scaleY: 1 });

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const updateScale = () => {
      setScale({
        scaleX: img.clientWidth / img.naturalWidth,
        scaleY: img.clientHeight / img.naturalHeight,
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [imageUrl]);

  return (
    <div className="bg-white h-[50vh] rounded-md shadow-lg p-4 flex flex-col gap-1 justify-between">
      <h2 className="text-xl font-bold">{template?.name || "Nome do Template"}</h2>

      <div
        className="w-full flex justify-center items-center overflow-hidden rounded-md h-[60vh] bg-gray-100 relative"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : `url(${relatorio})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {selectedFields.map((field) => {
          const top = field.y * scale.scaleY;
          const left = field.x * scale.scaleX;
          const width = field.width * scale.scaleX;
          const height = field.height * scale.scaleY;

          return (
            <div
              key={field.id}
              className={`absolute border-2 border-red-500 bg-red-500/20`}
              style={{ top, left, width, height }}
              onMouseEnter={() => setHoveredFieldId(field.id)}
              onMouseLeave={() => setHoveredFieldId(null)}
            />
          );
        })}
      </div>

      {!imageUrl && (
        <div className="bg-black/30 text-white p-2 rounded mt-2">
          Modelo opcional
        </div>
      )}
    </div>
  );
}

export default ViewFields;
