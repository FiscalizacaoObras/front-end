import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";
import l1img from "../assets/l1.jpg"
import { CiCirclePlus } from "react-icons/ci";

function Add(){
   return(
         <>
            <div className="flex gap-x-5 bg-gray-100">
                <Sidebar/>
                <div className="bg-white rounded-md shadow-lg w-80 mb-2 mt-2 p-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Nome do Template</h1>
                    <div className="bg-cover bg-center w-full h-50" style={{ backgroundImage: `url(${l1img})`}}></div>
                </div>
                <div className="bg-white rounded-md shadow-md w-100 mb-2 mt-2 p-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Caixa de Seleção</h1>
                    <p>Teste</p>
                    <div className="mt-auto ml-auto flex gap-x-1">
                        <Button icon={<CiCirclePlus size={20} />} text="Adicionar Campo"/>
                        <Button text="Avancar" variant=""></Button>
                    </div>
                </div>
            </div>
        </>
   );
}
export default Add;