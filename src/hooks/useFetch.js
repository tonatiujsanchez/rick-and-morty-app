import { useState } from 'react'
import axios from 'axios'

export const useFetch = () => {
    
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    const getData = ( url ) => {
        setIsLoading(true)
        axios.get(url)
            .then(({ data })=>{
                setHasError(false)
                setData(data)
            })
            .catch((error)=>{
                setHasError(true)
                console.log(error)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }
    
    return [data, getData, isLoading, hasError]
}
