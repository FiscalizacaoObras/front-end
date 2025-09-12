//import functions of react
import { useState } from "react";
//import components
import Button from "../components/ui/Button";
import Upload from "../components/ui/Upload";
import TitlePage from "../components/layout/TitlePage";

//import images
import l1img from "../assets/l1.jpg"

//import icons
import { CiCirclePlus } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";

function Create() {
    const iconSize = 20;
    const [openMenuList, setOpenMenuList] = useState(true);
    const [mostrarSelecao, setMostrarSelecao] = useState(false);

    const AddList = [
        { label: 'Título 1' },
        { label: 'Título 2' },
        { label: 'Título 3' },
        { label: 'Título 4' }];

    const MenuList = [
        { icons: <TbEdit size={iconSize} />, label: 'Editar' },
        { icons: <RiDeleteBin5Fill size={iconSize} />, label: 'Excluir' },
        { icons: <BiEditAlt size={iconSize} />, label: 'Renomear' }];

    return (
        <>
             {!mostrarSelecao && (
                <>
                    <div className="flex w-full h-full bg-gray-100">
                        <div className="w-full h-full">
                            <div className="flex">
                                <FaArrowLeft className="mr-3 mt-3 cursor-pointer" size={30}
                                onClick={() => setMostrarSelecao(prev => !prev)}
                                />
                                <TitlePage Title="Criar template" />
                            </div>
                            <div className="mt-20 flex flex-col gap-y-5">
                                <Upload />
                                <div className="ml-165">
                                    <Button text="Adicionar"
                                            onClick={() => setMostrarSelecao(prev => !prev)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {mostrarSelecao && (
                <div className="flex w-full bg-gray-100">
                    <div className="w-full h-full">
                        <div className="flex">
                             <FaArrowLeft className="mr-3 mt-3 cursor-pointer" size={30}
                                onClick={() => setMostrarSelecao(prev => !prev)}
                            />
                            <TitlePage Title="Criar template" />
                        </div>
                        <br/>
                        <div className="flex gap-x-5">
                            <div className="bg-white rounded-md shadow-lg w-96 mb-2 mt-2 p-4 flex flex-col gap-4">
                                <h1 className="text-xl font-bold">Nome do Template</h1>
                                <div className="bg-cover bg-center w-full h-50" style={{ backgroundImage: `url(${l1img})` }}></div>
                                <div className="rounded-md shadow-lg mt-auto">
                                    <h3 className="">Valores das Coordenadas</h3>
                                    <p>x: <input type="number" placeholder="default" /></p>
                                    <p>y: <input type="number" placeholder="default" /></p>
                                    <p>width: <input type="number" placeholder="default" /></p>
                                    <p>height: <input type="number" placeholder="default" /></p>
                                </div>
                            </div>
                            <div className="bg-white rounded-md shadow-md w-100 mb-2 mt-2 p-4 flex flex-col gap-4">
                                <h1 className="text-xl font-bold">Caixa de Seleção</h1>
                                <ul>
                                    {AddList.map((item, index) => {
                                        return (
                                            <li key={index} className="px-3 py-2 rounded-md duration-300 cursor-pointer">
                                                <div className="flex items-center gap-2">
                                                    <PiBookmarkSimple size={iconSize} />
                                                    <p>{item.label}</p>
                                                    <CiMenuKebab size={iconSize} className="ml-auto" onClick={() => setOpenMenuList(!openMenuList)} />
                                                </div>
                                            </li>
                                        );
                                    })

                                    }
                                </ul>
                                <div className="mt-auto ml-auto flex gap-x-1">
                                    <Button icon={<CiCirclePlus size={20} />} text="Adicionar Campo" />
                                    <Button text="Avancar" variant=""></Button>
                                </div>
                            </div>
                            {!openMenuList && (
                                <div className="bg-white rounded-lg shadow-lg w-40 h-40  mb-2 mt-2 p-4 flex flex-col gap-4">
                                    <ul>
                                        {MenuList.map((item, index) => {
                                            return (
                                                <li key={index} className="px-3 py-2 rounded-md duration-300 cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        <div>{item.icons}</div>
                                                        <p>{item.label}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Create;