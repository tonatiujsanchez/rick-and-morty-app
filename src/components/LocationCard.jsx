import PropTypes from 'prop-types'
import './styles/location.css'

export const LocationCard = ({ location }) => {
    return (
        <div className="location">
            <h3 className="location__name">{ location.name }</h3>
            <ul className="location__list">
                <li className="location__item">
                    <strong>Type:</strong>
                    <span className="location__item-value">{ location.type }</span>
                </li>
                <li className="location__item">
                    <strong>Dimension:</strong>
                    <span className="location__item-value">{ location.dimension }</span>
                </li>
                <li className="location__item">
                    <strong>Population:</strong>
                    <span className="location__item-value">{ location.residents.length }</span>
                </li>
            </ul>
        </div>
    )
}


LocationCard.propTypes = {
    location: PropTypes.object
}