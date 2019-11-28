import React from 'react'
import PropTypes from 'prop-types'

const InfoBlock = ({ children }) => {
    const childrenList = React.Children.map(children, (child) => {
        return (
            <>{child}</>
        )
    })

    return (
        <div style={{minHeight: '25px'}}>
            {childrenList}
        </div>
    )
}

InfoBlock.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.elementType)
    ])
}

export default InfoBlock
