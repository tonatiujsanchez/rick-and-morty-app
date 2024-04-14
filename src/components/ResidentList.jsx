import { useState } from 'react'
import PropTypes from 'prop-types'
import { ResidentCard, Pagination } from './'
import { getResidentsPerPage } from '../services'
import './styles/residentList.css'

export const ResidentList = ({ residents }) => {

    const [page, setPage] = useState(1)

    const { totalPages, data } = getResidentsPerPage( residents, page )

    const handlePage = (page) => {
        setPage(page)
    }

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
            <div className="residents__content">
                {
                    data.map( residentUrl => (
                        <ResidentCard
                            key={ residentUrl }
                            residentUrl={ residentUrl }
                        />
                    ))
                }
            </div>
            {
                totalPages > 1 && (
                    <Pagination
                        totalPages={ totalPages }
                        currentPage={ page }
                        handlePage={ handlePage }
                    />
                )
            }
        </section>
    )
}

ResidentList.propTypes = {
    residents: PropTypes.array
}