import axios from "axios"
import {useState, useEffect, ReactNode, createContext} from "react"
import { MovieType } from "@/types/movieType"

type TrendMovies = {
    trending: MovieType[]
    loadingTrend: boolean;
}

export const TrendingContext = createContext<TrendMovies | null>(null)

export const TrendingProvider = ({children}: {children: ReactNode})=>{
    const [trending, setTrending] = useState<any>()
    const [loadingTrend, setLoadingTrend] = useState<boolean>(true)

    const trendingMovies = async ()=>{
        setLoadingTrend(true)
        try {
            const apiKey = "0ddafbf76e41bd890af671879e1d297a"
            const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=pt-BR`
            const requestTrending = await axios.get(url)
            const response = requestTrending.data.results
            setTrending(response)
            setLoadingTrend(false)
        }catch(erro){
            setLoadingTrend(false)
            console.log("Erro ao buscar Trending. "+erro)
        }
    }

    useEffect(()=>{
        trendingMovies()
    }, [])

    return (
        <TrendingContext.Provider value={{trending, loadingTrend}}>
            {children}
        </TrendingContext.Provider>
    )
}