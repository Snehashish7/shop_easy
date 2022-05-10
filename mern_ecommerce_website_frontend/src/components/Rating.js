import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'
const Rating = ({ value, text, color }) => {
    return (
        <div className='Rating'>
            <span>
                <i style={{ color }} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            {/* <div>
                {value} stars
            </div> */}
            <span>
                {text && text}{/* if text exists then display text else display null */}
            </span>
        </div>
    )
}

Rating.defaultProps = { /* sets a prop of Rating fn to a default value */
    color: '#f8e825'
}

Rating.propTypes = {    /* console gives warnings if key(value,text,color) does not match type(number,string,string) */
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
export default Rating