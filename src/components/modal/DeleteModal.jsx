import React, { useState } from "react";
import Button from "../ui/Button";
import GenericModal from "../ui/GenericModal";
import { RiDeleteBin5Fill } from "react-icons/ri";

function DeleteModal({ isOpen, isClose, template, onConfirm }) {

    if (!isOpen || !template) return null;

    return (
        <>
            <GenericModal
                icon={<RiDeleteBin5Fill />}
                title="Tem certeza que deseja excluir esse template?"
                description={`Template "${template.name}" será removido permanentemente.`}
                actions={[
                    <Button key="cancel"
                        text="Cancelar"
                        variant="secondary"
                        onClick={isClose}
                    />,
                    <Button key="confirm"
                        text="Excluir"
                        variant="primary"
                        onClick={onConfirm}
                    />
                ]}
                onClose={isClose}
            />
        </>
    );
}

export default DeleteModal;
