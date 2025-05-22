import axios from "axios"
import {useState, useEffect, ReactNode, createContext} from "react"
import { MovieType } from "@/types/movieType"

type TrendMovies = {
    trending: MovieType[]
}

export const TrendingContext = createContext<TrendMovies | null>(null)

export const TrendingProvider = ({children}: {children: ReactNode})=>{
    const [trending, setTrending] = useState<any>()

    const trendingMovies = async ()=>{
        try {
            const apiKey = "0ddafbf76e41bd890af671879e1d297a"
            const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=pt-BR`
            const requestTrending = await axios.get(url)
            const response = requestTrending.data.results
            setTrending(response)
            console.log(response)
        }catch(erro){
            console.log("Erro ao buscar Trending. "+erro)
        }
    }

    useEffect(()=>{
        trendingMovies()
    }, [])

    return (
        <TrendingContext.Provider value={{trending}}>
            {children}
        </TrendingContext.Provider>
    )
}