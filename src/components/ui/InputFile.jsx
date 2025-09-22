import { useState } from "react";

export default function InputFile({ text, onFileChange }) {

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            onFileChange(preview); // passa pro pai
        }
    };

    return (
        <div className="flex flex-col w-xs h-10 gap-0.5 mb-2 mt-2">
            <label className="inputfile-label bg-[var(--vinho-primario)] text-[var(--primary-color)] shadow-md rounded-[60px] h-9 text-sm font-normal cursor-pointer flex items-center justify-center">
                {text}
                <input className="hidden" type="file" accept="image/*" onChange={handleFileChange} required />
            </label>


        </div>
    );
}