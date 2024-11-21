function NavBar() {
    return (
        <>
        <nav className="fixed top-0 left-0 w-full">
            <div className="bg-slate-200 rounded-b-3xl mx-3 grid grid-cols-4 place-items-stretch text-center shadow-xl">
                <a href="#presentation" 
                    className="bg-slate-200 mx-7 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md text-2xl text-neutral-800 hover:text-black transition-colors duration-200 font-inconsolata"
                    >Présentation</a>
                <a href="#competences" 
                    className="bg-slate-200 mx-7 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md text-2xl text-neutral-800 hover:text-black transition-colors duration-200 font-inconsolata"
                    >Compétences</a>
                <a href="#projets" 
                    className="bg-slate-200 mx-7 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md text-2xl text-neutral-800 hover:text-black transition-colors duration-200 font-inconsolata"
                    >Projets</a>
                <a href="#contact" 
                    className="bg-slate-200 mx-7 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md text-2xl text-neutral-800 hover:text-black transition-colors duration-200 font-inconsolata"
                    >Contact</a>
            </div>
        </nav>
        </>
    )
}

export default NavBar;