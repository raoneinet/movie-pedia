import axios from "axios"
import {useState, createContext, ReactNode} from "react"
import { MovieType } from "@/types/movieType"

type SearchType = {
    searchInput: any
    setSearchInput: (n: string)=>void
    handleSearch: ()=>void
    searcRes: MovieType[]
    setSearchRes: any
    searchSuccess: number
}

export const SearchContext = createContext<SearchType | null>(null)

export const SearchCtxProvider = ({children}: {children: ReactNode})=>{

    const [searchInput, setSearchInput] = useState<string>()
    const [searcRes, setSearchRes] = useState([])
    const [searchSuccess, setSearchSuccess] = useState<number>(0)

    const handleSearch = async ()=> {
        if(searchInput?.trim() === "" || typeof searchInput === "undefined"){
            alert("É preciso digitar um nome no campo de busca")
            return false
        }

        try{
            const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=0ddafbf76e41bd890af671879e1d297a&language=pt-BR`
            const searchMovie = await axios.get(url, {
                method: "GET",
                headers: {
                    accept: "application/json"
                }
            })
            const movieSeached = searchMovie.data.results
            setSearchRes(movieSeached)
            console.log(searchMovie.status)
            setSearchSuccess(searchMovie.status)
        }catch(erro){
            alert("Erro na requisição! "+erro)
        }
        setSearchInput("")
    }

    return (
        <SearchContext.Provider value={{searchInput, setSearchInput, handleSearch, searcRes, setSearchRes, searchSuccess}}>
            {children}
        </SearchContext.Provider>
    )
}