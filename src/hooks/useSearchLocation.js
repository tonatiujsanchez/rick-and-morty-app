import axios from "axios"
import { useEffect, useRef, useState } from "react"


export const useSearchLocation = ( searchTerm ) => {
    
    const [locations, setLocations] = useState([])
    const [milliseconds, setMilliseconds] = useState(0)
    const [loading, setLoading] = useState(false)

    const refInterval = useRef()

    const onSearchLocation = () => {
        setLoading(true)
        const url = `https://rickandmortyapi.com/api/location?name=${ searchTerm }`
        axios.get(url)
            .then(({ data })=>{
                setLocations( data.results )
            }).catch( error =>{
                console.error(error.response?.data.error)
                setLocations([])
            }).finally(()=>{
                setLoading(false)
            })
         
    }

    const onStartInterval = () => {
        refInterval.current && clearInterval( refInterval.current )
        setMilliseconds(200)
    
        refInterval.current = setInterval(() => {
            setMilliseconds( s => s - 1 )
        }, 1)   
    }

    useEffect(() => {
        onStartInterval()
        return ()=>{
            clearInterval( refInterval.current )
        } 
    }, [searchTerm])
    
    
    useEffect(() => {        
        if( milliseconds <= 0 ){
            clearInterval( refInterval.current )
            
            if( searchTerm.trim() === '' ){
                return setLocations([])
            }else {
                onSearchLocation()
            }
        }
    }, [ milliseconds ])

    const onReset = () => {
        setLocations([])
    }
    
    
    const activeTimer = milliseconds > 0
    const noResults = searchTerm.trim() !== '' && !activeTimer && !loading && locations.length === 0

    return [ locations, loading, noResults, onReset ]
}
