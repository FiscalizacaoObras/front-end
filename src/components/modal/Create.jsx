import React from "react";
import { FiHome } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";

function Ceate({ isOpen }) {

    if (isOpen) {
        return (
            <>
                <div>
                    <button className="cursor-pointer"> <IoClose /> </button>
                    <BsCheckCircleFill />
                    <h2>Template criado com sucesso!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <Button icon={ <FiHome /> } text="Voltar ao início" />
                        <Button icon={ <BsPlusLg /> } text="Criar outro template" />
                    </div>
                </div>
            </>
        )
    }

    return null;
}
 
export default Ceate;