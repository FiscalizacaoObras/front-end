import React, { useState } from "react";
import Upload from "../components/ui/Upload";
import SelectBox from "../components/ui/SelectBox";
import TitlePage from "../components/layout/TitlePage";
import ViewFields from "../components/ui/ViewFields";

function UploadDocument() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <TitlePage Title="Relatório de Obras" />
                
                <div className="flex flex-col lg:flex-row w-full h-full p-6 lg:p-10 gap-6">
                    <div className="flex flex-col w-full lg:w-1/2 h-auto lg:h-full justify-between gap-6">
                        <div className="h-[40%]">
                            <Upload onFileChange={setSelectedImage} />
                        </div>
                        <div>
                            <ViewFields imageUrl={selectedImage}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-auto">
                        <SelectBox />
                    </div>
                </div>
            </div>

        </>
    );
}

export default UploadDocument