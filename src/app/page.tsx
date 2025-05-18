"use client"
import {Header} from "@/components/header"
import {ApiContextProvider} from "@/contexts/apiContext"
import {MovieSection} from "@/components/movieSection"
const Page = ()=>{
    return (
        <ApiContextProvider>
        <div className="absolute overflow-hidden w-full">
            <Header/>
            <MovieSection/>
        </div>
        </ApiContextProvider>
    )
}

export default Page