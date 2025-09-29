import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import InputFile from "./InputFile";

function ImgCropper() {
    const cropperRef = useRef(null);
    const [Img, setImg] = useState("");
    const [croppImg, setCroppImg] = useState("");

    const onCrop = () => {
        const cropper = cropperRef.current?.cropper; 

        if (cropper) {
            const data = cropper.getData();
            setCroppImg(data);
        }
    };

    return (
        <>
            <div className="p-5">
                <h2>React Cropper</h2>
                <div className="flex justify-center mb-4">
                    <InputFile text="Escolha uma imagem" onFileChange={setImg} />
                </div>

                {Img && (
                    <>
                        <Cropper
                            src={Img}
                            className="h-96 w-full"
                            aspectRatio={16 / 9}
                            guides={false}
                            zoomOnWheel={false}
                            ref={cropperRef}
                            viewMode={1}
                            crop={onCrop}
                        />
                        {croppImg && (
                            <div className="mt-4">
                                <h3>Coordenadas em tempo real:</h3>
                                <pre>{JSON.stringify(croppImg, null, 2)}</pre>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );

}
export default ImgCropper;