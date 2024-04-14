import PropTypes from 'prop-types'
import './styles/residentList.css'
import { ResidentCard } from './ResidentCard'

export const ResidentList = ({ residents }) => {


    if( residents.length === 0 ){
        return(
            <figure className="no-population">
                <img src="/img/ram-portal.webp" alt="Portal image" />
                <figcaption className="no-population__figcaption">
                    Esta ubicación no tiene residentes
                </figcaption>
            </figure>
        )
    }

    return (
        <section className="residents">
            {
                residents.map( residentUrl => (
                    <ResidentCard
                        key={ residentUrl }
                        residentUrl={ residentUrl }
                    />
                ))
            }
        </section>
    )
}

ResidentList.propTypes = {
    residents: PropTypes.array
}