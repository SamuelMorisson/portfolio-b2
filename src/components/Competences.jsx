function Competences () {
    return (
        <>
        <div id="competences" name="blocCompetences" aria-label="Compétences" className="flex flex-col items-center my-20 pt-20">
            
            <div>
                <h1 name="titreCompetences" aria-label="Compétences" className="font-inconsolata sm:text-6xl minSize:text-5xl p-3 border-2 border-lime-500 rounded-3xl mb-9">Compétences</h1>
            </div>

            <div className="grid grid-rows-3 w-3/4">

                <div name="competencesFront" className="flex flex-col bg-slate-200 hover:bg-slate-200 transition-colors duration-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                    <h2 className="font-inconsolata text-4xl font-semibold text-center mb-2 md:mb-8">Front-End</h2>
                    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1
                            w-2/3 md:w-full m-auto gap-y-3 place-items-start md:place-items-center">

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo webdev" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_webdev.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• HTML/CSS</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo javascript" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_javascript.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo react" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_react.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• React</p>
                        </div>
                    </div>
                </div>

                <div name="competencesBack" className="flex flex-col bg-slate-200 hover:bg-slate-200 transition-colors duration-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                    <h2 className="font-inconsolata text-4xl font-semibold text-center mb-2 md:mb-8">Back-End</h2>
                    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1
                            w-2/3 md:w-full m-auto gap-y-3 place-items-start md:place-items-center">

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo flask" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_flask.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• Flask</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo php" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_php.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• PHP</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo cpp" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_cpp.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• C++</p>
                        </div>
                    </div>
                </div>

                <div name="competencesBDD" className="flex flex-col bg-slate-200 hover:bg-slate-200 transition-colors duration-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                    <h2 className="font-inconsolata text-4xl md:hidden font-semibold text-center mb-2 md:mb-8">BDD</h2>
                    <h2 className="font-inconsolata text-4xl hidden md:block font-semibold text-center mb-2 md:mb-8">Bases de données</h2>
                    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1
                            w-2/3 md:w-full m-auto gap-y-3 place-items-start md:place-items-center">

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo mysql" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_mysql.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• MySQL</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo postgresql" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_postgresql.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• PostgreSQL</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <img alt="logo mongodb" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_mongodb.webp?raw=true" className="h-[48px] lg:h-[100px] hidden xs:block" />
                            <p className="text-2xl">• MongoDB</p>
                        </div>
                    </div>
                </div>

            </div>

            {/*
            <div className="grid lg:grid-cols-2 md:grid-cols-1 place-items-stretch lg:w-2/3 md:w-3/4 xs:w-4/5">

                    <div name="competencesFront" className="flex flex-col items-er bg-slate-200 hover:bg-slate-200 transition-colors duration-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Front-End</h2>
                        <div className="grid grid-rows-3 xs:place-items-center font-inconsolata text-3xl">

                            <div className="flex flex-row items-center w-2/3 h-[48px] lg:h-[100px] m-5">
                                <img alt="logo webdev" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_webdev.webp?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•HTML/CSS</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 h-[48px] lg:h-[100px] m-5">
                                <img alt="logo javascript" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_javascript.webp?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•JavaScript</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 h-[48px] lg:h-[100px] m-5">
                                <img alt="logo react" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_react.webp?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•React</p>
                            </div>

                        </div>
                    </div>


                    <div name="competencesBack" className="grid grid-row items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Back-End</h2>
                        <div className="grid grid-rows-3 xs:place-items-center font-inconsolata text-3xl">

                            <div className="flex flex-row items-center w-2/3 h-[48px] lg:h-[100px] m-5">
                                <img alt="logo python" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_flask.webp?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•Flask</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 m-5 h-[48px] lg:h-[100px]">
                                <img alt="logo java" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_php.webp?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•PHP</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 m-5 h-[48px] lg:h-[100px]">
                                <img alt="logo cpp" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/logo_cpp.webp?raw=true" className="w-1/3 mx-2 hidden xs:block" />
                                <p className="">•C++</p>
                            </div>

                        </div>
                    </div>
            </div>*/}

        </div>
        </>
    )
}

export default Competences;