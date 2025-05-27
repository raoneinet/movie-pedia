"use client"
import {Header} from "@/components/header"
import {PopularMoviesCtx} from "@/contexts/popularMoviesCtx"
import {PopularMovies} from "@/components/popularMovies"
import {TrendingProvider} from "@/contexts/trendingAllCtx"
import {TrendingSection} from "@/components/trendingAll"
import {SearchCtxProvider} from "@/contexts/searchContext"

const Page = ()=>{
    return (
        
        <div className="overflow-hidden w-full">
            <SearchCtxProvider>
                <Header/>
                <PopularMoviesCtx>
                    <PopularMovies/>
                </PopularMoviesCtx>
                <TrendingProvider>    
                    <TrendingSection/>
                </TrendingProvider>
            </SearchCtxProvider>
        </div>
    )
}

export default Page