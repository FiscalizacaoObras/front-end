import Button from "../components/ui/Button";
import Sidebar from "../components/layout/Sidebar";


function Add(){
   return(
         <>
            <div className="flex gap-x-5">
                <Sidebar/>
                <div className=" border border-dashed w-80 mb-2 mt-2 p-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Nome do Template</h1>
                </div>
                <div className=" border border-dashed w-100 mb-2 mt-2 p-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Caixa de Seleção</h1>
                    <Button text="Adicionar" />
                </div>
            </div>
        </>
   );
}
export default Add;