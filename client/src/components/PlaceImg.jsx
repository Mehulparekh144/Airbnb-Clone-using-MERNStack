import React from 'react'

const PlaceImg = ({ place, index = 0 , className=null }) => {
    if (!place.photos?.length) {
        return ''
    }
    if (!className) {
        className = 'object-cover rounded'
    }
    return (
        <>
            <img src={`http://localhost:4000/uploads/${place.photos[index]}`} className={className} alt="" />
        </>
    )
}

export default PlaceImg
