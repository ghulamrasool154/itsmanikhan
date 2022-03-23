import React from 'react'


const ProcesCart = (props) => {
    return (
        <>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon_list_item">
                    {/* <div className="icon_list_item_icon">
                        {props.icon}

                    </div> */}

                    <div className='img-icon'>
                        <img src={props.icon} alt="" />
                    </div>
                    <div className="icon_list_item_content">

                        <h1 className="heading">{props.title}</h1>

                        <p className="discription">
                            {props.dec}
                        </p>
                    </div>
                    <div className="dashline-border"></div>
                </div>

            </div>
        </>
    )
}

export default ProcesCart