function Competences () {
    return (
        <>
        <div id="competences" className="flex flex-col items-center my-20 pt-20">
            <div>
                <h1 className="font-inconsolata sm:text-6xl minSize:text-5xl p-3 border-2 border-lime-500 rounded-3xl mb-9">Compétences</h1>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 place-items-stretch lg:w-2/3 md:w-3/4 xs:w-4/5">

                    <div className="flex flex-col items-cent6er bg-slate-200 hover:bg-slate-200 transition-colors duration-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Front-End</h2>
                        <div className="flex flex-col xs:place-items-center font-inconsolata text-3xl">

                            <div className="flex flex-row items-center w-2/3 m-5">
                                <img src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_webdev.png?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•HTML/CSS</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 m-5">
                                <img src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_javascript.png?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•JavaScript</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 m-5">
                                <img src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_react.png?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•React</p>
                            </div>

                        </div>
                    </div>


                    <div className="flex flex-col items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Back-End</h2>
                        <div className="flex flex-col xs:place-items-center font-inconsolata text-3xl">

                            <div className="flex flex-row items-center w-2/3 m-5">
                                <img src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_python.png?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•Python</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 m-5">
                                <img src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_java.png?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•Java</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 m-5">
                                <img src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_cpp.png?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•C++</p>
                            </div>

                        </div>
                    </div>
                </div>

        </div>
        </>
    )
}

export default Competences;