import  {createContext, useState, ReactNode, useEffect} from "react"
import axios from "axios"
import {MovieType} from "@/types/movieType"

type Movies = {
    popMovies: MovieType[];
}

export const apiContext = createContext<Movies | null>(null)

export const ApiContextProvider = ({children}: {children: ReactNode})=>{

    const [popMovies, setPopMovies] = useState<any>()

    const movieRequest = async ()=>{
        try{
            const apiKey = "0ddafbf76e41bd890af671879e1d297"
            const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}a&language=pt-BR`

            const popularMovies = await axios.get(apiUrl)
            console.log(popularMovies.data)
            setPopMovies(popularMovies)
        }catch(error){
            console.log("Erro na requisição! "+error)
        }
    }

    useEffect(()=>{
        movieRequest()
    }, [])

    return (
        <apiContext.Provider value={{popMovies}}>
            {children}
        </apiContext.Provider>
    )
}