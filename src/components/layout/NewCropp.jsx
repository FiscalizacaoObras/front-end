import React, { useState, useEffect } from 'react';
import { message, Input, Tooltip, Checkbox } from 'antd';
import { InboxOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import Upload from "../ui/Upload";
import Button from "../ui/Button";

function NewCropp(){
    const [pdfList, setPdfList] = useState([]);
    const [mostrarSelecao, setMostrarSelecao] = useState(false);
    
    
    return(
        <>
            {!mostrarSelecao && (
                <>
                    <Upload />
                    <div className="p-4 flex flex-col gap-4">
                        <Button text="Adicionar"
                                onClick={() => setMostrarSelecao(prev => !prev)}
                        />
                    </div>
                </>
            )}

            {mostrarSelecao && (
                <div className="mt-8 p-5 border border-gray-300 rounded-lg bg-gray-100 max-w-md mx-auto text-left">
                    <h3 className="mb-2.5 text-gray-800">
                    Nome da Caixa de Seleção
                    </h3>

                    <div className="flex items-center gap-2.5">
                        <Button text="Salvar"
                                onClick={() => setMostrarSelecao(prev => !prev)}
                        />
                    </div>
                </div>
            )}
            
        </>
    );
}

export default NewCropp;