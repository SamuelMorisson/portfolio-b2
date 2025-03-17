function Presentation () {
    return (
        <>
        <div name="blocPresentation" aria-label="Présentation" id="presentation" className="mt-5 mb-20 pt-20 flex flex-col items-center">
            <div className="items-center justify-center mb-9 border-2 border-lime-500 rounded-3xl p-3">
                <p name="nom" aria-label="Samuel Morisson" className="bg-opacity-30 px-5 sm:text-6xl minSize:text-5xl font-inconsolata">Samuel Morisson</p>
                <p name="etudiant" aria-label="Étudiant en informatique" className="bg-opacity-30 text-3xl text-center font-inconsolata italic">Étudiant en Informatique</p>
            </div>

            <div className="flex flex-col items-center minSize:w-full sm:w-4/5 md:w-3/5 bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl">
                <div className="m-5">
                    <p className="text-3xl text-center font-inconsolata leading-relaxed">
                        Actuellement en 2e année d`informatique à l`école Ynov Rennes, je cherche à développer mes compétences en développement web et applicatif lors d`un stage et/ou d`une alternance.</p>
                    <p className="text-3xl text-center font-inconsolata leading-relaxed">
                        </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Presentation;