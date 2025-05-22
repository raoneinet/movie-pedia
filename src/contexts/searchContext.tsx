import axios from "axios"
import {useState, createContext, ReactNode} from "react"
import { MovieType } from "@/types/movieType"

type SearchType = {
    searchInput: any
    setSearchInput: (n: string)=>void
    handleSearch: ()=>void
}

export const SearchContext = createContext<SearchType | null>(null)

export const SearchCtxProvider = ({children}: {children: ReactNode})=>{

    const [searchInput, setSearchInput] = useState<string>()

    const handleSearch = async ()=> {
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
    }

    return (
        <SearchContext.Provider value={{searchInput, setSearchInput, handleSearch}}>
            {children}
        </SearchContext.Provider>
    )
}