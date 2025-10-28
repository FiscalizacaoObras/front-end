function Button({ icon, text, variant = 'primary', onClick, disabled = false }) {
    let variantClass = "";

    if (variant === "primary") {
        variantClass = "bg-[var(--vinho-primario)] text-white border border-[var(--vinho-primario)]";
    }
    else {
        variantClass = "bg-white text-[var(--vinho-primario)] border border-[var(--vinho-primario)]";
    }

    return (
        <button
            className={`flex items-center gap-0.5 p-2 rounded-lg border transition
                ${variantClass}
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-90"}
            `}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {icon && <span>{icon}</span>}
            <span>{text}</span>
        </button>
    );
}

export default Button;
