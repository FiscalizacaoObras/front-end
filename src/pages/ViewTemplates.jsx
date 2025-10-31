import React, {useState} from "react";
import TitlePage from "../components/layout/TitlePage";
import Template from "../components/ui/Template";
import CreateTemplate from "../components/ui/CreateTemplate";
import DeleteModal from "../components/modal/DeleteModal";
import { deleteTemplate } from "../services/api";

function ViewTemplates() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleOpenModal = (template) => {
        setSelectedTemplate(template);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedTemplate) return;

        try {
            await deleteTemplate(selectedTemplate.id);

            window.dispatchEvent(new CustomEvent("templateDeleted", { detail: selectedTemplate.id }));

            setIsModalOpen(false);
            setSelectedTemplate(null);
        } catch (error) {
            console.error("Erro ao deletar template:", error);
            alert("Erro ao deletar template. Tente novamente.");
        }
    };
    return (
        <div className="w-full overflow-x-hidden">
            <TitlePage Title="Visualizar templates" />

            <div className="py-10">
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-items-center">
                        <CreateTemplate />
                        <Template cardsOnly onOpenDeleteModal={handleOpenModal} />
                    </div>
                </div>
            </div>
            <DeleteModal
                isOpen={isModalOpen}
                isClose={() => setIsModalOpen(false)}
                template={selectedTemplate}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
}

export default ViewTemplates;
