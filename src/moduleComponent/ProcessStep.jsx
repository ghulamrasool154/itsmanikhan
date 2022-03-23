import React from "react";
import { BsFillChatDotsFill, BsCalendar3, BsPencilFill, BsFillFileCodeFill, BsSearch, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import '../styleComponent/ProcessStep.css'
import ProcesCart from "./ProcesCart";
import icon1 from '../icons_images/img1.png'
import icon2 from '../icons_images/img2.png'
import icon3 from '../icons_images/img3.png'
import icon4 from '../icons_images/img4.png'
import icon5 from '../icons_images/img5.png'
import icon6 from '../icons_images/img6.png'

const ProcessStep = () => {
	return (
		<>
			<section className="ProcessStep" id="ProductDicsussion">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12 col-">
							<h2 className="contact">PROCESS
							</h2>
							<span className="dash-line"></span>
							<h1 className="contact-workwithme">6 Short Steps Towards Your Brand New Website
							</h1>
						</div>
					</div>

					<div className="row processcard_row">
						<ProcesCart

							title='1. Discussion'
							dec='The first step in creating your website is for you and I to have a conversation about the goals of the website. Once we know the reason you are looking to have a new website, we can work together to identify the content needed and the features that the website should feature.'
							// icon={<BsFillChatDotsFill />}
							icon={icon1}
						/>

						<ProcesCart

							title='2. Planning'
							dec='Once I understand your needs, I will create a plan to design and develop the website to meet your specifications.'
							// icon={<BsCalendar3 />}
							icon={icon2}

						/>

						<ProcesCart
							title='3. Design'
							dec='Functionality on a website is important but a good website design makes a prospective customer want to stay on the website! I will work on the website layout during this stage and take into consideration responsiveness, user-friendly experience and aesthetically pleasing elements.

							'
							// icon={<BsPencilFill />}
							icon={icon3}

						/>
						<ProcesCart
							title='4. Coding'
							dec='Building the website on the back-end is the most specialized and timely stage. I pride myself in coding clean and organized. By coding the website properly, it will ensure that you will have a highly functioning website for years to come.	'
							// icon={<BsFillFileCodeFill />}
							icon={icon4}

						/>
						<ProcesCart
							title='5. Testing'
							dec='Before making the website live, it is imperative to test it! I test the website internally first, and then show it to my client to test on their end before we launch it. It is important that all of the functionality works and that the site is deployed with no loading errors or bugs.

							'
							// icon={<BsSearch />}
							icon={icon5}


						/>
						<ProcesCart
							title='6. Launch	'
							dec=' Once the website has been tested, the final step is to launch the website on your domain and make it public for the world to see! I like to keep long-term relationships with my clients so I hope that you will contact me for future site updates and digital marketing promotions.

							'
							// icon={<BsReverseLayoutTextSidebarReverse />}

							icon={icon6}

						/>


					</div>

				</div>
			</section>
		</>
	);
};

export default ProcessStep;
