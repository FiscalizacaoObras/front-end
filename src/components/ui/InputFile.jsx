import { useState } from "react";

export default function InputFile({text, onFileChange}) {
  const [previewUrl, setPreviewUrl] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      if(onFileChange){
        onFileChange(file);
      }
    }
  }

  return (
    <div className="flex flex-col w-xs h-10 gap-0.5 mb-2 mt-2">
      <label className="inputfile-label bg-[var(--vinho-primario)] text-[var(--primary-color)] shadow-md rounded-[60px] h-9 text-center text-sm font-normal cursor-pointer">
        {text}
        <input className="hidden" type="file" accept="image/*" onChange={handleFileChange}  required/>
      </label>
      {previewUrl && (
        <div className="preview-container">
          <img src={previewUrl} alt="Preview" className="preview-image" />
        </div>
      )}
      
    </div>
  );
}