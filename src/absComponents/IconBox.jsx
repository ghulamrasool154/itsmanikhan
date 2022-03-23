import React from 'react'
const IconBox = (props) => {
    return (
        <>

            <div className="box-section align-items-center d-flex">
                <div className="icon">
                    <img src={props.icon} alt={props.text} />
                </div>
                <div className="text">
                    <h1>
                        {props.text} <br />
                    </h1>
                </div>
            </div>

            <table cellPadding='10px' cellSpacing="10px" >

            </table>

        </>
    )
}

export default IconBox