const Header = ({ text, bg, count }) => {
    return(
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white `}>
            {text}
            <div className="ml-2 bg-white text-black w-5 h-5 rounded-full flex items-center justify-center">
                {count}
            </div>
        </div>
    )
}
export default Header;