import {MdMenuOpen} from "react-icons/md"
import Button from "../ui/Button.jsx";
function Sidebar(){

    return(
        <nav className="shadow-md h-screen w-60 bg-blue-0">
            <div className="border px-3 py-2 h-20 flex justify-between items-center">
                <img
                    src="./src/assets/Tailwind.png"
                    className="w-10 rounded-md"
                    alt=""
                />
                <MdMenuOpen size={30} className="cursor-pointer"/>
                
            </div>
            <Button  variant="secondary" text="voltar"/>
            <Button                      text="voltar"/>
        </nav>
    
    );
}

export default Sidebar;