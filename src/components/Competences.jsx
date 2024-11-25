function Competences () {
    return (
        <>
        <div id="competences" className="flex flex-col items-center my-20 pt-20">
            <div>
                <h1 className="font-inconsolata text-6xl mb-9">Compétences</h1>
            </div>

            <div className="grid grid-cols-2 place-items-stretch w-2/3">
                    <div className="flex flex-col items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 mr-4">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Front-End</h2>
                        <div className="flex flex-col place-items-center font-inconsolata text-3xl">

                            <div className="flex flex-row items-center w-2/3 my-5">
                                <img src="./public/logo_webdev.png" className="w-1/3 mx-2" />
                                <p className="">•HTML/CSS</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 my-5">
                                <img src="./public/logo_javascript.png" className="w-1/3 mx-2" />
                                <p className="">•JavaScript</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 my-5">
                                <img src="./public/logo_react.png" className="w-1/3 mx-2" />
                                <p className="">•React</p>
                            </div>

                        </div>
                    </div>


                    <div className="flex flex-col items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 ml-4">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Back-End</h2>
                        <div className="flex flex-col place-items-center font-inconsolata text-3xl">

                            <div className="flex flex-row items-center w-2/3 my-5">
                                <img src="./public/logo_python.png" className="w-1/3 mx-2" />
                                <p className="">•Python</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 my-5">
                                <img src="./public/logo_java.png" className="w-1/3 mx-2" />
                                <p className="">•Java</p>
                            </div>

                            <div className="flex flex-row items-center w-2/3 my-5">
                                <img src="./public/logo_cpp.png" className="w-1/3 mx-2" />
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