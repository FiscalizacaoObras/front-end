import React from "react";
import Buttom from "../ui/Button";
import { BsExclamationCircleFill } from "react-icons/bs";
import {IoClose} from "react-icons/io5";

function ErrorCeate() {
    
    if(isOpen) {
        return (
            <>
                <div>
                    <button> <IoClose /> </button>
                    <BsExclamationCircleFill />
                    <h2>Falha ao finalizar template</h2>
                    <p>Seu template não foi finalizado, tente novamente</p>
                    <div>
                        <Button text="Tentar novamente" />
                    </div>
                </div>X
            </>
        )
    }

    return null;
}

export default ErrorCeate;