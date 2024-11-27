function NavBar() {
    return (
        <>
        <nav className="z-20 fixed top-0 left-0 w-full hidden minNavBar:block">
            <div className="grid grid-cols-5 bg-slate-200 rounded-b-3xl mx-3 text-center shadow-xl smallTextNavBar:text-2xl text-xl text-neutral-800 font-inconsolata">
                <a href="#presentation"
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md  hover:text-black transition-colors duration-200"
                    >Présentation</a>
                <a href="#experience" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Expériences</a>
                <a href="#competences" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Compétences</a>
                <a href="#projets" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Projets</a>
                <a href="#contact" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Contact</a>
            </div>
        </nav>
        </>
    )
}

export default NavBar;