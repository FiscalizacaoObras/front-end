import React from "react";

function Ceate({ isOpen }) {

    if (isOpen) {
        return (
            <>
                <div>
                    <button> <IoClose /> </button>
                    <BsCheckCircleFill />
                    <h2>Template criado com sucesso!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <Button text="Voltar ao início" />
                        <Button text="Criar outro template" />
                    </div>
                </div>
            </>
        )
    }

    return null;
}

export default Ceate;