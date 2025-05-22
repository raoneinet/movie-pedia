import {useState} from "react"
import axios from "axios"
import { useContext } from "react"
import {SearchContext} from "@/contexts/searchContext"

export const Header = ()=>{

    const searchCtx = useContext(SearchContext)

    //const [searchInput, setSearchInput] = useState<string>()

    /*const handleSearch = async ()=> {
        if(searchInput?.trim() === ""){
            alert("É preciso digitar um nome no campo de busca")
        }

        const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=0ddafbf76e41bd890af671879e1d297a&language=pt-BR`
        const searchMovie = await axios.get(url, {
            method: "GET",
            headers: {
                accept: "application/json"
            }
        })
        console.log(searchMovie.data.results)
        setSearchInput("")
    }*/
    

    return (
        <header className="bg-black py-4  w-full">
            <div className="container mx-auto h-full flex justify-around items-center">
                <div className="flex flex-col md:flex-row items-center gap-2 h-full text-gray-200">
                    <img src="/assets/icons/movie-icon.png" className="w-10"/>
                    <h1>Moviepedia</h1>
                </div>
                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        className="border border-gray-300 rounded-full py-2 px-3 w-32 md:w-78 text-white"
                        value={searchCtx?.searchInput}
                        onChange={e => searchCtx?.setSearchInput(e.target.value)}/>
                    <button className="-ml-10 cursor-pointer"
                        onClick={searchCtx?.handleSearch}>
                        <img src="/assets/icons/search.svg" className="w-7 h-7"/>
                    </button>
                </div>
            </div>
        </header>
    )
}