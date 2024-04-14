import { useState } from 'react'
import PropTypes from 'prop-types'
import './styles/form.css'

export const Form = ({ indexLocation, setIndexLocation }) => {

    const [value, setValue] = useState(indexLocation)


    const handleSubmit = (ev) => {
        ev.preventDefault()
        if( !value ){
            return
        }
        setIndexLocation(value)
    }

    return (
        <form 
            className="form"
            onSubmit={ handleSubmit }
        >
            <input
                type="number"
                min={1}
                max={126}
                value={ value }
                onChange={ ({ target })=> setValue(target.value) }
                className="form_input-number"
            />
            <input
                type="submit"
                value="Search"
                className="form_input-submit"
            />
        </form>
    )
}

Form.propTypes = {
    indexLocation: PropTypes.number,
    setIndexLocation: PropTypes.func,
}
