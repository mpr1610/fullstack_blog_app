const Button = ({label, styles, icon, type, onclick})=>{
    return(
        <button
            onclick={onclick}
            className={`flex items-center justify-center text-base outline-nones ${styles}`}
        >
            {label}

            {icon && <div className="ml-2">{icon}</div>}
        </button>
    )
}

export default Button