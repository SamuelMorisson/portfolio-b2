import { useState } from "react"

function Burger() {
    const [estFocus, modifEstFocus] = useState(false);

    const focus = () => modifEstFocus(true);
    const blur = () => modifEstFocus(false);

    
    return (
        <>
        <nav name="navbarDesktop" className="z-20 fixed top-0 left-0 w-full hidden minNavBar:block">
            <div className="grid grid-cols-4 bg-slate-200 rounded-b-3xl mx-3 text-center shadow-xl smallTextNavBar:text-2xl text-xl text-neutral-800 font-inconsolata">
                <a name="navDPresentation" aria-label="Navigation vers Présentation" href="#presentation"
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md  hover:text-black transition-colors duration-200"
                    >Présentation</a>
                {/*<a href="#experience" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Expériences</a>*/}
                <a name="navDCompetences" aria-label="Navigation vers Compétences" href="#competences" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Compétences</a>
                <a name="navDProjets" aria-label="Navigation vers Projets" href="#projets" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Projets</a>
                <a name="navDContact" aria-label="Navigation vers Contact" href="#contact" 
                    className="bg-slate-200 lg:mx-4 mx-2 my-3 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    >Contact</a>
            </div>
        </nav>

        <nav name="navbarMobile" className="flex flex-col place-items-end z-20 fixed minNavBar:hidden top-0 right-0"
        >
            <div className={`bg-slate-900/40 backdrop-blur-sm w-screen h-screen absolute z-10 ${estFocus ? '' : 'hidden'}`}
                onClick={blur}
            ></div>

            <button name="burger" className="group m-4 z-20"
                onFocus={focus}
                >
                <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-slate-200 shadow-xl border-2 border-slate-300 hover:border-lime-500 transform duration-200">
                
                    <div className="flex flex-col justify-between w-8 h-8 transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-neutral-600 h-[3px] transform transition-all duration-300 group-focus:translate-x-10"></div>
                        <div className="bg-neutral-600 h-[3px] transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                        <div className="bg-neutral-600 h-[3px] transform transition-all duration-300 group-focus:translate-x-10 delay-150"></div>

                        <div className="absolute items-center justify-center transform transition-all duration-500 top-4 left-4 -translate-x-14 group-focus:translate-x-0 flex">
                            <div className="absolute bg-neutral-600 h-[3px] w-8 transform transition-all duration-500 delay-300 group-focus:rotate-45"></div>
                            <div className="absolute bg-neutral-600 h-[3px] w-8 transform transition-all duration-500 delay-300 group-focus:-rotate-45"></div>
                        </div>
                    </div>
                </div>
            </button>

            <div className={`flex flex-col place-items-right bg-slate-200 rounded-l-3xl shadow-xl text-5xl text-neutral-800 font-inconsolata py-6 pl-6 z-20 transform transition-all duration-300
                    ${estFocus ? 'translate-x-0' : 'translate-x-96 hidden'}`}>
                <a name="navMPresentation" href="#presentation"
                    className="bg-slate-200 mb-5 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    ><button onClick={blur} className="p-4">Présentation</button></a>
                {/*<a href="#experience" 
                    className="bg-slate-200 my-5 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    ><button onClick={blur} className="p-4">Expériences</button></a>*/}
                <a name="navMCompetences" href="#competences" 
                    className="bg-slate-200 my-5 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    ><button onClick={blur} className="p-4">Compétences</button></a>
                <a name="navMProjets" href="#projets" 
                    className="bg-slate-200 my-5 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    ><button onClick={blur} className="p-4">Projets</button></a>
                <a name="navMContact" href="#contact"
                    className="bg-slate-200 mt-5 border-2 border-slate-300 hover:border-lime-500 hover:shadow-md hover:text-black transition-colors duration-200"
                    ><button onClick={blur} className="p-4">Contact</button></a>
            </div>
                
        
        </nav>
        </>
    )
}

export default Burger;