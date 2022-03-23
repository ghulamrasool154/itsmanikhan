import React from 'react'
import '../styleComponent/Benefits.css'
import icon1 from '../icons_images/icon1.png'
import icon2 from '../icons_images/icon2.png'
import icon3 from '../icons_images/icon3.png'
import icon4 from '../icons_images/icon4.png'
import BenefitsData from '../combineComponent/BenefitsData';



const Benefits = () => {
    return (
        <>

            <section className='BenefitsSection' id='Benefits'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 benefits-color">
                            <h2 className="benefits">BENEFITS   </h2>
                            <span className='dash-line'></span>
                            <h1 className="workwithme">Why Work With Me</h1>

                            <div className="row">
                                <BenefitsData
                                    icon={icon1}

                                    title='Innovative'
                                    desc='I look to enhance my clients’ productivity by providing innovative ideas.'
                                />
                                <BenefitsData
                                    icon={icon2}
                                    title='Prompt'
                                    desc='My clients’ success is my first priority. I make myself available so that there are no long lag times with our communication.'

                                />
                                <BenefitsData
                                    icon={icon3}
                                    title='Creative'
                                    desc='I love to go beyond the website norms and showcase my clients with a creative approach.'
                                />
                                <BenefitsData
                                    icon={icon4}
                                    title='Smart'
                                    desc='I keep up-to-date with new information in the field. I continue to educate myself on the ever-changing world of technology.'
                                />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 benefits-image">
                            <div className='benefits-responsive-img d-lg-none'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Benefits