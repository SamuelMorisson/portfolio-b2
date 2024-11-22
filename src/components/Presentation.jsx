function Presentation () {
    return (
        <>
        <div id="presentation" className="my-20 pt-20 flex flex-col items-center">
            <div className="items-center justify-center mb-9">
                <p className="bg-green-200 px-5 text-6xl font-inconsolata">Samuel Morisson</p>
                <p className="bg-red-200 pl-5 text-4xl text-left font-inconsolata">*étudiant info*</p>
            </div>
            <div className="flex flex-row items-center w-3/5 bg-slate-200 rounded-3xl shadow-xl">
                <div className="m-5 ml-6 w-4/5">
                    <p className="border-2 border-slate-300 text-2xl text-center font-inconsolata leading-relaxed">Actuellement en 2e année d`informatique à l`école Ynov, je cherche à développer mes compétences en informatique ainsi qu`avoir une expérience professionnelle en entreprise.</p>
                </div>
                <div className="bg-green-100 m-5 w-1/5">
                    <a href="./public/CV Samuel Morisson.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="./public/screenshot_cv.png" className="border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden" />
                    </a>
                    <p className="font-inconsolata text-2xl">Mon CV</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Presentation;