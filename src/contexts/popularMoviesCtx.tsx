import  {createContext, useState, ReactNode, useEffect} from "react"
import axios from "axios"
import {MovieType} from "@/types/movieType"

type Movies = {
    popMovies: MovieType[];
}

export const apiContext = createContext<Movies | null>(null)

export const PopularMoviesCtx = ({children}: {children: ReactNode})=>{

    const [popMovies, setPopMovies] = useState<any>()

    const popularMovies = async ()=>{
        try{
            const apiKey = "0ddafbf76e41bd890af671879e1d297a"
            const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
            const popularMovies = await axios.get(apiUrl)
            const getMovies = popularMovies.data.results
            setPopMovies(getMovies)
        }catch(error){
            console.log("Erro na requisição! "+error)
        }
    }

    useEffect(()=>{
        popularMovies()
    }, [])

    return (
        <apiContext.Provider value={{popMovies}}>
            {children}
        </apiContext.Provider>
    )
}