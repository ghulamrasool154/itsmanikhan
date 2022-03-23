import React from 'react'
import '../styleComponent/MyServices.css';
import { BsFillBasket2Fill, BsFillFileBarGraphFill, BsChat } from "react-icons/bs";
import Service_Cart from '../combineComponent/Service_Cart';

import icon1 from '../icons_images/icon5.png'
import icon2 from '../icons_images/icon6.png'
import icon3 from '../icons_images/icon7.png'
import icon4 from '../icons_images/icon8.png'

const MyServices = () => {
    return (
        <section className='text-center myservices' id='MyServices'>
            <div className="container-fluid m-auto">
                <div className="row m-auto">
                    <div className="col-lg-12">
                        <h2 className="benefits">MY SERVICES </h2>
                        <span className='dash-line'></span>
                        <h1 className="workwithme">Stuff I’m Really Good At</h1>
                    </div>
                </div>
                <div className="row">

                    <Service_Cart
                        icon={icon1}
                        title='eCommerce Development'
                        para='- WooCommerce, Magento, Shopify -'
                        backtitle=' eCommerce Development'
                        backpara='Looking to sell online? I will develop an eCommerce website for you. The most important piece is that it keeps your customer’s information safe! I can work on any CMS to get the help you increase your online sales.'
                    />
                    <Service_Cart
                        icon={icon2}
                        title='Website Design & Development'
                        para='- WooCommerce, Magento, Shopify -'
                        backtitle=' - WordPress, PHP, Laravel -'
                        backpara=' I have vast experience in web application development. I can develop websites by using all cutting- edge technologies. Have a look at my previous work to get an idea.'
                    />
                    <Service_Cart
                        icon={icon3}
                        title='Online Marketing'
                        para=' - SEO, SEM, SMM, AdWords -'
                        backtitle='Online Marketing'
                        backpara='Looking to sell online? I will develop an eCommerce website for you. The most important piece is that it keeps your customer’s information safe! I can work on any CMS to get the help you increase your online sales.
                        '
                    />
                    <Service_Cart
                        icon={icon4}
                        title='Consulting'
                        para='- E-Commerce Store, Website, Digital Marketing -'
                        backtitle=' Consulting'
                        backpara='I have vast experience in web application development. I can develop websites by using all cutting- edge technologies. Have a look at my previous work to get an idea.'
                    />

                </div>

                <div className="row  ">
                    <div className="col-lg-12">
                        <p className='qulity'>
                            I believe that Quality is always better than Quantity, <br /> and a project is not complete until you are 100% satisfied.
                        </p>
                    </div>
                </div>



            </div>
        </section >
    )
}

export default MyServices