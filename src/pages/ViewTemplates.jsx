import React from "react";
import { Link } from "react-router-dom";

import TitlePage from "../components/layout/TitlePage";
import Template from "../components/ui/Template";
import CreateTemplate from "../components/ui/CreateTemplate";

//images
import l1Img from "../assets/l1.jpg";
import l2Img from "../assets/l2.jpg";
import l3Img from "../assets/l3.jpg";
import l4Img from "../assets/l4.jpg";
import l5Img from "../assets/l5.jpg";
import l6Img from "../assets/l6.jpg";
import l7Img from "../assets/sl1.jpg";
import l8Img from "../assets/sl2.jpg"

function ViewTemplates() {

    const ListTemplates = [
        { id: 1, name: "Template 1", img: l1Img },
        { id: 2, name: "Template 2", img: l2Img },
        { id: 3, name: "Template 3", img: l3Img },
        { id: 4, name: "Template 4", img: l4Img },
        { id: 5, name: "Template 8", img: l5Img }
    ];

    return (
        <>
            <div className="w-screen">
                <div>
                    <TitlePage Title="Visualizar templates" />
                </div>
                <div className="pl-15 pr-15">
                    <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray md:grid-cols-3">
                        <CreateTemplate />
                        <Template />
                    </div>
                </div>
            </div>
        </>
    );

}
export default ViewTemplates;