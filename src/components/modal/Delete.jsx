import React from "react";
import Button from "../ui/Button";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {IoClose} from "react-icons/io5";

function Delete({isOpen}) {

    if(isOpen) {
        return (
            <>
                <div>
                    <button> <IoClose /> </button>
                    <RiDeleteBin5Fill />
                    <h2>Tem certeza que deseja excluir esse template?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div>
                        <Button text="Cancelar" variant="secondary"/>
                        <Button text="Continuar" variant="primary"/>
                    </div>
                </div>
            </>
        );
    }

    return null;
}

export default Delete;
