import React from "react"

export default function Card(props) {
    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props
    // console.log('props', props)
    return (
        <section className='card'>
            <img src={imageUrl} width='200px' className='card--image' />
            <div className='card--details'>
                <div className='location'>
                    <span className='location--name'><i className='fa fa-map-marker'></i>{location}</span>
                    <span className='view--map'><a href={googleMapsUrl}>view on Google Maps.</a></span>
                </div>
                <h3 className='card--title'>{title}</h3>
                <p className='bold'>{startDate} - {endDate}</p>
                <p className='card--description'>{description}</p>
            </div>
        </section>
    )
}