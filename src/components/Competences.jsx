function Competences () {
    return (
        <>
        <div id="competences" className="flex flex-col items-center my-20 pt-20">
            <div>
                <h1 className="font-inconsolata text-6xl mb-9">Compétences</h1>
            </div>

            <div className="grid grid-cols-2 place-items-stretch w-2/3">
                    <div className="flex flex-col items-center bg-slate-200 rounded-3xl shadow-xl py-3 mr-4">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Front-End</h2>
                        <div className="grid grid-cols-1 w-1/3">
                            <ul className="font-inconsolata text-3xl text-left">
                                <li className="py-2">•HTML/CSS</li>
                                <li className="py-2">•JavaScript</li>
                                <li className="py-2">•Vue.js</li>
                                <li className="py-2">•React</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-slate-200 rounded-3xl shadow-xl py-3 ml-4">
                        <h2 className="font-inconsolata text-4xl font-semibold text-center mb-3">Back-End</h2>
                        <div className="grid grid-cols-1 w-1/3">
                            <ul className="font-inconsolata text-3xl text-left">
                                <li className="py-2">•Python</li>
                                <li className="py-2">•Java</li>
                                <li className="py-2">•C</li>
                                <li className="py-2">•C++</li>
                            </ul>
                        </div>
                    </div>
                </div>

        </div>
        </>
    )
}

export default Competences;