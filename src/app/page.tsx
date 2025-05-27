"use client"
import {Header} from "@/components/header"
import {PopularMoviesCtx} from "@/contexts/popularMoviesCtx"
import {TrendingProvider} from "@/contexts/trendingAllCtx"
import {SearchCtxProvider} from "@/contexts/searchContext"
import {HomeMovies} from "@/components/homeMovies"

const Page = ()=>{

    return (    
        <div className="overflow-hidden w-full">
            <SearchCtxProvider>
                <Header/>
                <PopularMoviesCtx>
                <TrendingProvider> 
                    <HomeMovies/>
                </TrendingProvider>
                </PopularMoviesCtx>
            </SearchCtxProvider>
        </div>
    )
}

export default Page