function Contact () {
    //<input type="email" className="bg-slate-0 shadow-inner"></input>
    return (
        <>
        <div id="contact" className="flex flex-col items-center">
            <div className="bg-slate-200 rounded-3xl shadow-xl w-3/4 py-3">

                <div className="text-center mb-6">
                    <h1 className="font-inconsolata text-6xl">Contact</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-col w-3/5 my-3">
                        <label className="font-inconsolata text-2xl text-left">Email:</label>
                        <input type="email" className="bg-slate-0 shadow-inner-custom border-2 border-slate-300 hover:border-lime-500 focus:outline-none focus:ring-1 focus:border-lime-500 text-xl p-1"></input>
                        
                    </div>
                    <div className="flex flex-col w-3/5 my-3">
                        <label className="font-inconsolata text-2xl text-left">Message:</label>
                        <textarea rows="8" className="resize-none bg-slate-0 shadow-inner-custom border-2 border-slate-300 hover:border-lime-500 focus:outline-none focus:ring-2 focus:border-lime-500 text-xl p-1"></textarea>
                    </div>
                    <div className="flex flex-col items-center w-1/2 my-3">
                        <button className="w-2/3 font-inconsolata text-2xl border-2 border-slate-400 hover:border-lime-500 hover:shadow-md py-2">Envoyer</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Contact;