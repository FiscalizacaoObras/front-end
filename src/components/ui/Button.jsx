function Button({ icon, text, variant = 'primary', onClick }) {
    let variantClass = "";

    if (variant === "primary") {
        variantClass = "bg-[var(--vinho-primario)] text-white border border-[var(--vinho-primario)]";
    }
    else {
        variantClass = "bg-white text-[var(--vinho-primario)] border border-[var(--vinho-primario)]";
    }

    return (
        <button
            className={`flex items-center gap-0.5 p-2 rounded-lg cursor-pointer ${variantClass}`}
            onClick={onClick}
        >
            {icon && <span>{icon}</span>}
            <span>{text}</span>
        </button>
    );
}

export default Button;
