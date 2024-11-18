function Contact () {
    //<input type="email" className="bg-slate-0 shadow-inner"></input>
    return (
        <>
        <div id="contact" className="flex flex-col items-center">
            <div className="bg-slate-200 rounded-3xl shadow-xl w-2/3">

                <div className="text-center bg- red-100">
                    <h1 className="font-inconsolata">Contact</h1>
                </div>

                <div className="flex flex-col items-center bg-green-100 mt-3">
                    <div className="flex flex-col bg-green-200 w-1/2">
                        <label className="font-inconsolata text-lg">Email:</label>
                        
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="font-inconsolata text-lg">Message:</label>
                        <input type="text" id="message" className="border-2 border-slate-950 bg-white"></input>
                    </div>
                    <div className="flex flex-col w-1/2">
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Contact;