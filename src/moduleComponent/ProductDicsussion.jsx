import React from 'react'
import { BsSkype } from "react-icons/bs";
import '../styleComponent/ProductDiscussion.css'
// import { NavLink } from 'react-router-dom';
const ProductDicsussion = () => {
    return (
        <section className='ProductDicsussion' id='ProductDicsussion'>
            <div className="container-fluid">
                <div className="row py-4 align-items-center">
                    <div className="col-width">
                        <h1 className='pro-dis'>
                            Let's Discuss Your Project Now!
                        </h1>
                    </div>
                    <div className="col-width">
                        <h1 className='wordpress-champion '>
                            <span>
                                <BsSkype />
                            </span>
                            WordPressChampion
                        </h1>
                    </div>
                </div>

                <div className="row border-bottom" style={{ backgroundColor: 'white' }}>
                    <div className="col-lg-6 m-0 p-0 border-end">
                        <a href='https://youtube.com/' target='_blank' >
                            <img src="images/upwork-1.svg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-6 p-0">
                        <a href='https://youtube.com/' target='_blank' > <img src="images/fiver-1.svg" alt="" /></a>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDicsussion