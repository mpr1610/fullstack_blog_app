import { Link } from "react-router-dom";

const Logo = ({type}) =>{
    return(
        <div className="">
            <Link
                to='/'
                className={`text-2xl font-semibold dark:text-white ${type && "text-white text-4x1"}`}
            >
                Blog
                <span className={`text-3x1 text-red-500 ${type && "text-5x1 font-bold"}`}>
                    Wave
                </span>
            </Link>
        </div>
    )
}

export default Logo;
