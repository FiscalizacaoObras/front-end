import React, { useState, useEffect } from 'react';
import { InboxOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { FiUploadCloud } from "react-icons/fi";
import { message, Input, Tooltip, Checkbox, Button } from 'antd';

function Upload({ onFileChange }) {
    const [UploadBig, setUploadBig] = useState(true);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const validTypes = ['image/png', 'image/jpeg'];
        const validFiles = files.filter(file => validTypes.includes(file.type));

        if (validFiles.length !== files.length) {
            message.warning('Apenas PNG, JPG e PDF são permitidos.');
        }

        const file = validFiles[0];
        if (file) {
            const url = URL.createObjectURL(file);
            onFileChange(url);
            setUploadBig(false);
        }
    };

    return (
        <>
            {UploadBig && (<div className="flex flex-col bg-white mx-auto shadow-md rounded-lg gap-5 p-10 w-[90%] h-full pb-[15%]">
                <div className="flex flex-col items-start gap-2.5">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">Upload Arquivo</h2>
                    <p>Lorem ipsum.... Descrição do que deve ser esse upload</p>
                </div>
                <label className="border-2 border-dashed border-gray-300 p-10 text-center block cursor-pointer rounded-xl mb-10">
                    <div className="flex flex-col items-center">
                        <div>
                            <FiUploadCloud className="text-[32px] text-gray-700" />
                        </div>

                        <p className="mt-2">
                            <span className="text-indigo-800 font-bold">Clique em Upload</span> ou arraste e solte um arquivo
                        </p>
                        <p>PNG, PDF ou JPG</p>
                        <input
                            id="pdf-upload"
                            type="file"
                            accept="image/png, image/jpeg, application/pdf"
                            onChange={handleFileChange}
                            className="hidden"
                            multiple
                        />
                    </div>
                </label>
            </div>)}
            {!UploadBig && (
                <>
                    <div className="flex flex-col bg-white mx-auto shadow-md rounded-lg gap-5 p-10 w-[90%] h-10 pb-[15%]">
                        <label className="border-2 border-dashed border-gray-300 p-5 text-center block cursor-pointer rounded-xl mb-10">
                            <div className="flex flex-col items-center">
                                <p className="mt-2">
                                    <span className="text-indigo-800 font-bold">Clique em Upload</span> ou arraste e solte um arquivo
                                </p>
                                <p>PNG, PDF, JPG ou DOCX</p>
                                <input
                                    id="pdf-upload"
                                    type="file"
                                    accept="image/png, image/jpeg, application/pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    multiple
                                />
                            </div>
                        </label>
                    </div>
                </>
            )}
        </>
    );
}

export default Upload;
