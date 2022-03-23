import React from 'react'
const BenefitsData = (props) => {
    return (

        <div className="col-lg-6 col-md-6 col-sm-12">
            <span className='benefits-icon'>
                <img src={props.icon} alt="" />
            </span>
            <h1 className='benefits-title'>
                {props.title}
            </h1>
            <p className='benefits-description'>
                {props.desc} </p>

        </div>
    )
}

export default BenefitsData