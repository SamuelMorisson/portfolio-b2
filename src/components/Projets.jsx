import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

function Projets () {
    return (
        <>
        <div id="projets" name="blocProjets" className="flex flex-col items-center my-20 pt-20">
            <div className="flex flex-col items-center md:w-4/5 sm:w-4/5">
                <div className="text-center mb-9">
                    <h1 name="titreProjets" aria-label="Projets" className="font-inconsolata sm:text-6xl minSize:text-5xl p-3 border-2 border-lime-500 rounded-3xl">Projets</h1>
                </div>

                <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 place-items-stretch">

                    <div name="projetTowerDefense" id="projet1" className="flex flex-col items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <a href="https://github.com/SamuelMorisson/tower-defense-beng2" target="_blank" rel="noopener noreferrer" className="font-inconsolata text-3xl font-semibold hover:text-lime-700 hover:underline">Tower Defense</a>
                        <a href="https://github.com/SamuelMorisson/tower-defense-beng2" target="_blank" rel="noopener noreferrer" className="w-3/4 my-3 border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden">
                            <img alt="screenshot tower defense" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/screenshot_tower_defense.webp?raw=true" /></a>
                        <p className="w-3/4 my-3 p-1 border-2 border-slate-300 font-inconsolata text-2xl leading-relaxed">Création d`un tower defense en langage Python avec la librairie Pygame. Projet scolaire</p>
                        <p className="w-3/4 italic font-inconsolata text-lg leading-relaxed">Python</p>
                    </div>

                    <div name="projetDiagrammeChord" id="projet2" className="flex flex-col items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="font-inconsolata text-3xl font-semibold hover:text-lime-700 hover:underline">Diagramme Chord</a>
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="w-3/4 my-3 border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden">
                            <img alt="screenshot diagramme chord" src="https://github.com/SamuelMorisson/portfolio-b2/blob/main/public/screenshot_diagramme_chord.webp?raw=true" /></a>
                        <p className="w-3/4 my-3 p-1 border-2 border-slate-300 font-inconsolata text-2xl leading-relaxed">Contribution à la création d`une application de visualisation de données sous la forme d`un diagramme chord. Stage</p>
                        <p className="w-3/4 italic font-inconsolata text-lg leading-relaxed">Vue.JS</p>
                    </div>

                    <div name="projetCocktailAPI" id="projet2" className="flex flex-col items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="font-inconsolata text-3xl font-semibold hover:text-lime-700 hover:underline">Cocktail API</a>
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="w-3/4 my-3 border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden">
                            <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} className="w-full overflow-hidden">
                                <SwiperSlide><img src="/screenshot_cocktail-1.png" className="w-full" /></SwiperSlide>
                                <SwiperSlide><img src="/screenshot_cocktail-2.png" className="w-full" /></SwiperSlide>
                                <SwiperSlide><img src="/screenshot_cocktail-3.png" className="w-full" /></SwiperSlide>
                            </Swiper>
                        </a>
                        <p className="w-3/4 my-3 p-1 border-2 border-slate-300 font-inconsolata text-2xl leading-relaxed">Création d'un site de partage de recettes de cocktail. Gestion de la base de données et des cocktails. Projet scolaire</p>
                        <p className="w-3/4 italic font-inconsolata text-lg leading-relaxed">React - Flask - MongoDB</p>
                    </div>

                    <div name="projetDiagrammeChord" id="projet2" className="flex flex-col items-center bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3 m-2">
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="font-inconsolata text-3xl font-semibold hover:text-lime-700 hover:underline">Gestion Parking</a>
                        <a href="https://github.com/data-fair/app-chord-diagram" target="_blank" rel="noopener noreferrer" className="w-3/4 my-3 border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden">
                            <img alt="screenshot gestion-parking" src="screenshot_parking.png" /></a>
                        <p className="w-3/4 my-3 p-1 border-2 border-slate-300 font-inconsolata text-2xl leading-relaxed">Création d'un site de location de voitures. Réalisation du Back-end (Base de données, gestion des voitures, des utilisateurs). Projet scolaire</p>
                        <p className="w-3/4 italic font-inconsolata text-lg leading-relaxed">React - PHP - MySQL</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projets;