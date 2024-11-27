function Presentation () {
    return (
        <>
        <div id="presentation" className="my-20 pt-20 flex flex-col items-center">
            <div className="items-center justify-center mb-9">
                <p className="bg-lime-500 bg-opacity-30 px-5 sm:text-6xl minSize:text-5xl font-inconsolata">Samuel Morisson</p>
                <p className="bg-red-300 bg-opacity-30 pl-5 text-4xl text-left font-inconsolata">*étudiant info*</p>
            </div>

            <div className="flex flex-col items-center minSize:w-full sm:w-4/5 md:w-3/5 bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl">
                <div className="m-5">
                    <p className="text-3xl text-center font-inconsolata leading-relaxed">
                        Actuellement en 2e année d`informatique à l`école Ynov, je cherche à développer mes compétences en informatique ainsi qu`avoir une expérience professionnelle en entreprise.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Presentation;