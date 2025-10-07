import React from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

function CreateTemplate() {
    return (
        <>
            <div className="w-[40vh] h-[40vh] flex flex-col items-center justify-center border-2 border-pink-900 rounded-lg bg-white p-6">
                <Link to="/Criar">
                <div className="flex flex-col items-center">
                    <CiCirclePlus size={100} className="text-pink-900 mb-2" />
                    <span className="text-pink-900 font-medium">CRIAR TEMPLATE</span>
                </div>
                </Link>
            </div>
        </>
    );
}

export default CreateTemplate;