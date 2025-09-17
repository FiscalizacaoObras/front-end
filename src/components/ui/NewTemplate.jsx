import React from "react";

function NewTemplate() {
    <div className="flex flex-col w-full h-full">
        <div className="flex w-full p-6">
            <div className="bg-white align-top w-full p-6 rounded-lg shadow-md relative">
                <h2 className="text-lg font-semibold mb-1">Novo Template</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Lorem Ipsum... descrição do que é o template
                </p>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Nome do Template
                    </label>
                    <input
                        type="text"
                        placeholder='Ex: "Título"'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Descrição</label>
                    <input
                        type="text"
                        placeholder='Ex: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."'
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="flex justify-end">
                    <Button text="Adicionar"
                        onClick={nextStep}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default NewTemplate;