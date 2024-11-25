function Contact () {
    return (
        <>
        <div id="contact" className="flex flex-col items-center my-20 pt-20">
            <div className="flex flex-col items-center md:w-4/5 sm:w-4/5">

                <div className="text-center mb-9">
                    <h1 className="font-inconsolata sm:text-6xl minSize:text-5xl p-3 border-2 border-lime-500 rounded-3xl">Me Contacter</h1>
                </div>

                <form className="z-10 flex flex-col items-center w-full bg-slate-200 rounded-3xl border-2 border-lime-500 shadow-xl py-3">
                    <div className="flex flex-col md:w-3/5 minSize:w-4/5 my-3">
                        <label className="font-inconsolata text-2xl text-left">Email:</label>
                        <input type="email" className="p-1 bg-slate-0 shadow-inner-custom border-2 border-slate-300 hover:border-lime-500 focus:outline-none focus:ring-1 focus:border-lime-500 text-xl"></input>
                        
                    </div>
                    <div className="flex flex-col md:w-3/5 minSize:w-4/5 my-3">
                        <label className="font-inconsolata text-2xl text-left">Message:</label>
                        <textarea rows="8" className="resize-none p-1 bg-slate-0 shadow-inner-custom border-2 border-slate-300 hover:border-lime-500 focus:outline-none focus:ring-2 focus:border-lime-500 text-xl"></textarea>
                    </div>
                    <div className="flex flex-col items-center md:w-1/2 sm:w-2/3 minSize:w-3/4 my-3">
                        <button className="w-2/3 py-2 font-inconsolata text-2xl border-3 border-slate-300 shad_ow-md hover:border-lime-500 hover:shadow-md">Envoyer</button>
                    </div>
                </form>

                <div className="z-0 md:mt-0 minSize:mt-4 lg:w-1/2 md:w-3/4 py-10 bg-slate-200 md:rounded-none md:rounded-b-3xl minSize:rounded-3xl border-2 md:border-t-0 border-lime-500 shadow-xl flex flex-col items-center">
                    <div className="p-4 pt-3 border-2 border-slate-300 mb-6">
                        <p className="font-inconsolata text-xl">Mon E-mail:</p>
                        <p className="font-inconsolata text-xl underline">samuel.morisson@ynov.com</p>
                    </div>
                    <div className="lg:w-1/2 minSize:w-2/3">
                        <p className="font-inconsolata text-xl"> Mon CV:</p>
                        <a href="./public/CV Samuel Morisson.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="./public/screenshot_cv.png" className="items-center border-4 border-slate-400 hover:border-lime-500 hover:shadow-2xl overflow-hidden" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Contact;