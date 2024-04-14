import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFetch } from '../hooks'
import './styles/residentCard.css'

export const ResidentCard = ({ residentUrl }) => {

    const [ resident, getResident, isLoading ] = useFetch()

    
    useEffect(()=>{
        getResident(residentUrl)
    },[])

    return (
        isLoading || !resident
        ?(
            <div className="resident__skeleton"></div>
        ):(
            <article className="resident">
                <figure className="resident__figure">
                    <img src={ resident.image } alt={ resident.name } />
                </figure>
                <div className="resident__info">
                    <h3 className="resident__name">{ resident.name }</h3>
                    <ul className="resident__list">
                        <li className="resident__item">
                            <span className="resident__item-label">Specie</span>
                            <span className="resident__item-value">{ resident.species }</span>
                        </li>
                        <li className="resident__item">
                            <span className="resident__item-label">Origen</span>
                            <span className="resident__item-value">{ resident.origin.name }</span>
                        </li>
                        <li className="resident__item">
                            <span className="resident__item-label">Eppisodes where appear</span>
                            <span className="resident__item-value">{ resident.episode.length }</span>
                        </li>
                    </ul>
                </div>
            </article>
        )
    )
}

ResidentCard.propTypes = {
    residentUrl: PropTypes.string
}