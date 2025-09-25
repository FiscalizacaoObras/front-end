//import routes
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./routes/Routes";

function App() {

    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <div className="flex w-[85%] h-full">
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;