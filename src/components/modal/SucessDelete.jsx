import React from "react";
import Button from "../ui/Button";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function SucessDelete({ isOpen }) {

    if (isOpen) {
        return (
            <>
                <div>
                    <button> <IoClose /> </button>
                    <BsCheckCircleFill />
                    <h2>Template excluído com sucesso!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <Button text="Voltar ao início" />
                    </div>
                </div>
            </>
        )
    }

    return null;
}

export default SucessDelete;