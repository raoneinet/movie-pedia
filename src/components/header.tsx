

export const Header = ()=>{
    return (
        <header className="bg-black py-3 fixed w-full">
            <div className="container mx-auto flex justify-around">
                <div className="flex items-center gap-2 h-full text-gray-200">
                    <img src="/assets/icons/movie-icon.png" className="w-10"/>
                    Moviepedia
                </div>
                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search a music title..."
                        className="border border-gray-300 rounded-full py-2 px-3 w-95 text-white"/>
                    <button className="-ml-10"><img src="/assets/icons/search.svg" className="w-7 h-7"/></button>
                </div>
            </div>
        </header>
    )
}