"use client"
import {Header} from "@/components/header"
import {ApiContextProvider} from "@/contexts/apiContext"

const Page = ()=>{
    return (
        <ApiContextProvider>
        <div>
            <Header/>
        </div>
        </ApiContextProvider>
    )
}

export default Page