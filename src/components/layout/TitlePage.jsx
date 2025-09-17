import React from "react";

function TitlePage({Title}) {
    return (
        <>
            <div className="flex w-full h-[15vh] pl-15 self-center items-center justify-center">
                <h1 className="text-4xl font-medium mr-10">{Title}</h1>
                <span className="bg-[var(--vinho-primario)] ml-auto w-3/4 h-[5px] rounded-4xl self-center"></span>
            </div>
        </>
    );
}

export default TitlePage;