

export const Header = ()=>{
    return (
        <header className="bg-black py-4 fixed w-full">
            <div className="container mx-auto h-full flex justify-around items-center">
                <div className="flex items-center gap-2 h-full text-gray-200">
                    <img src="/assets/icons/movie-icon.png" className="w-10"/>
                    <h1>Moviepedia</h1>
                </div>
                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search a music title..."
                        className="border border-gray-300 rounded-full py-2 px-3 w-95 text-white"/>
                    <button className="-ml-10 cursor-pointer"><img src="/assets/icons/search.svg" className="w-7 h-7"/></button>
                </div>
            </div>
        </header>
    )
}