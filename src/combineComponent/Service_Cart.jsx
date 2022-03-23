import React from 'react'



const Service_Cart = (props) => {
    return (
        <div className="col-lg-3 col_wid col-md-6 col-sm-12 service-main-box ">

            <div className="service-box">
                <div className="service-box-inner">
                    <div className="service-box-front">
                        <span className='service-icon'>
                            <img src={props.icon} alt={props.title} />
                        </span>
                        <h1 className='service-title'>
                            {props.title}
                        </h1>
                        <p className='service-paragraph'>
                            {props.para}
                        </p>
                    </div>
                    <div className="service-box-back">
                        <h1 className='service-title'>
                            {props.backtitle}
                        </h1>
                        <p className='service-paragraph'>
                            {props.backpara}
                        </p>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Service_Cart