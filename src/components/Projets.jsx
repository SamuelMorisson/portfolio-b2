function Projets () {
    return (
        <>
        <div id="projets" className="flex flex-col items-center my-20 pt-20">
            <div className="w-3/4">
                <div>
                    <h1 className="font-inconsolata text-6xl mb-9">Projets</h1>
                </div>



                <div className="grid grid-cols-2 place-items-stretch">
                    <div id="projet1" className="flex flex-col items-center bg-slate-200 rounded-3xl shadow-xl py-3 mr-4">
                        <a href="https://github.com/SamuelMorisson/tower-defense-beng2" target="_blank" rel="noopener noreferrer" className="font-inconsolata text-3xl font-semibold hover:text-lime-700 hover:underline">Tower Defense</a>
                        <a href="https://github.com/SamuelMorisson/tower-defense-beng2" target="_blank" rel="noopener noreferrer" className="w-3/4 h-80 my-3 border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden">
                            <img src="public/screenshot_tower_defense.png" /></a>
                        <p className="w-3/4 my-3 p-1 border-2 border-slate-300 font-inconsolata text-2xl">Création d`un tower defense en langage Python avec la librairie Pygame pour un projet scolaire</p>
                    </div>

                    <div id="projet2" className="flex flex-col items-center bg-slate-200 rounded-3xl shadow-xl py-3 ml-4">
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="font-inconsolata text-3xl font-semibold hover:text-lime-700 hover:underline">Diagramme Chord</a>
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="w-3/4 h-80 my-3 border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden">
                            <img src="public/screenshot_diagramme_chord.png" /></a>
                        <p className="w-3/4 my-3 p-1 border-2 border-slate-300 font-inconsolata text-2xl">Contribution à la création d`une application de visualisation de données sous la forme d`un diagramme chord lors d`un stage</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projets;