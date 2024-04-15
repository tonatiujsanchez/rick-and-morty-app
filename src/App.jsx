import { useEffect, useState } from 'react'
import { useFetch } from './hooks'
import { Hero, LocationCard, ResidentList, SearchForm } from './components'
import './App.css'


const indexRandom = Math.floor(Math.random() * 126) - 1

function App() {

    const [ indexLocation, setIndexLocation ] = useState( indexRandom )
    const [ location, getLocation, isLoading, hasError ] = useFetch()

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/location/${indexLocation}`
        getLocation(url)
    }, [ indexLocation ])

    return (
        <>
            <Hero />
            <main className="main">
                <SearchForm
                    setIndexLocation={ setIndexLocation }
                />
                {
                    hasError
                    ?(
                        <div className="error-msg">                            
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                    strokeWidth="2" strokeLinecap="round" 
                                    strokeLinejoin="round" className="feather feather-alert-circle"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                            <p>Hubo un error al cargar la información</p>
                        </div>
                    ):(
                        <>         
                            {
                                isLoading || !location
                                ?(
                                    <div className="location__skeleton"></div>
                                ):(
                                    <LocationCard
                                        location={ location }
                                    />
                                )
                            }
                            {
                                !isLoading && location && (
                                    <ResidentList
                                        residents={ location.residents }
                                    />
                                )
                            }
                        </>
                    )
                }
            </main>
        </>
    )
}

export default App
