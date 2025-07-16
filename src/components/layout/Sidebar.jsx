import Button from "../ui/Button.jsx";
function Sidebar(){
    return(
        <nav className="shadow-md h-screen w-60 bg-blue-700">
            <div className="p-4 pb-2 flex justify-between items-center">
                <img
                    src="../../assets/"
                    className="w-32"
                    alt=""
                />
                <Button text="voltar"/>
            </div>
        </nav>
    
    );
}

export default Sidebar;