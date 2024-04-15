import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSearchLocation } from '../hooks'
import './styles/searchForm.css'


export const SearchForm = ({ setIndexLocation }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const [ locations, loading, noResults, onReset ] = useSearchLocation( searchTerm )

    const onSetIndexLocation = ( location ) => {
        setIndexLocation(location.id)
        onReset()
        setSearchTerm('')
    }

    return (
        <div className="search-form">
            <div className="search-form__content">
                <input
                    type="text"
                    value={ searchTerm }
                    placeholder="Buscar por nombre de la ubicación"
                    onChange={({ target }) => setSearchTerm(target.value)}
                    className={`search-form__input ${ ( locations.length > 0 || noResults ) && 'search-form__input--open' }`}
                />
                {
                    loading && (
                        <div className="search-form__loading">
                            <div className="custom-loader"></div>
                        </div>
                    )
                }
            </div>
            {
                locations.length > 0 && (
                    <ul className="search-form__list">
                        {
                            locations.map(location => (
                                <li 
                                    key={location.id}
                                    onClick={ ()=> onSetIndexLocation(location) }
                                    className="search-form__item"
                                >
                                    { location.name }
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            {
                noResults && (
                    <p className="search-form__without-results">Sin resultados</p>
                )
            }
        </div>
    )
}

SearchForm.propTypes = {
    setIndexLocation: PropTypes.func
}