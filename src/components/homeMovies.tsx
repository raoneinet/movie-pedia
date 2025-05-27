import { PopularMovies } from "@/components/popularMovies"
import { TrendingSection } from "@/components/trendingAll"
import { useContext } from "react"
import { TrendingContext } from "@/contexts/trendingAllCtx"
import {LoadingBtn} from "./loading"

export const HomeMovies = () => {

    const loadCtx = useContext(TrendingContext)

    return (
        <div>
            {loadCtx?.loadingTrend &&
                <LoadingBtn/>
            }
            {!loadCtx?.loadingTrend && loadCtx?.trending &&
                <div>
                    <PopularMovies />
                    <TrendingSection />
                </div>
            }
        </div>
    )
}