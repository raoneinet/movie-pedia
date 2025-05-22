"use client"
import {Header} from "@/components/header"
import {PopularMoviesCtx} from "@/contexts/popularMoviesCtx"
import {MovieSection} from "@/components/movieSection"
import {TrendingProvider} from "@/contexts/trendingAllCtx"
import {TrendingSection} from "@/components/trendingAll"
import {SearchCtxProvider} from "@/contexts/searchContext"

const Page = ()=>{
    return (
        
        <div className="overflow-hidden w-full">
            <SearchCtxProvider>
                <Header/>
                <PopularMoviesCtx>
                    <MovieSection/>
                </PopularMoviesCtx>
                <TrendingProvider>    
                    <TrendingSection/>
                </TrendingProvider>
            </SearchCtxProvider>
        </div>
    )
}

export default Page