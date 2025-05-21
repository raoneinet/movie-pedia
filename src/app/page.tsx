"use client"
import {Header} from "@/components/header"
import {PopularMoviesCtx} from "@/contexts/popularMoviesCtx"
import {MovieSection} from "@/components/movieSection"
import {TrendingProvider} from "@/contexts/trendingAllCtx"
import {TrendingSection} from "@/components/trendingAll"
const Page = ()=>{
    return (
        
        <div className="absolute overflow-hidden w-full">
            <Header/>
            <PopularMoviesCtx>
                <TrendingProvider>
                    <MovieSection/>
                    <TrendingSection/>
                </TrendingProvider>
            </PopularMoviesCtx>
        </div>
    )
}

export default Page