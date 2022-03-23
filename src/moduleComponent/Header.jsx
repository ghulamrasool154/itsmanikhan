import React, { useState } from 'react'
import { Link } from 'react-scroll/modules'

import '../styleComponent/Header.css'
import { Navbar } from '../apiData/Navbar'


const Header = () => {
    const [Toggle, setToggle] = useState(false);

    const styelforshow = {
        width: Toggle ? '100%' : '60px',
        position: Toggle ? 'fixed' : 'inherit',
        height: Toggle ? '100vh' : 'auto',
        backgroundColor: Toggle ? 'rgba(0,0,0,0.3)' : '',
        top: Toggle ? '0' : ''
    }

    return (
        <>

            <div style={styelforshow} >

                <div className='menu menu-for-disktop'  >
                    <div className="section-navbar">
                        <div className="navbaricontoggle disktop" onClick={() => setToggle(!Toggle)}>
                            {
                                Toggle ? <span ><i class="fa-solid fa-xmark"></i></span> : <span> <i class="fa-solid fa-bars"></i> </span>
                            }
                        </div>

                        <nav className="navbarbutton">
                            <div className="container-fluid">

                                <div className="" id="navbarSupportedContent">

                                    <div className="navbaricontoggle" onClick={() => setToggle(!Toggle)}>
                                        {
                                            Toggle ? <span ><i class="fa-solid fa-xmark"></i></span> : <span> <i class="fa-solid fa-bars"></i> </span>
                                        }
                                    </div>

                                    {
                                        Toggle ? <>
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarlist">
                                                <div className="dt-close-mobile-menu-icon" onClick={() => setToggle(!Toggle)}>

                                                    <i className="fa-solid fa-xmark"></i>
                                                </div>
                                                <li className='nav-item'>
                                                    <img src="images/navbar-logo.png" alt="" className='img-fluid' />
                                                </li>

                                                <div className='main-nav'>

                                                    {
                                                        Navbar.map((e) => {
                                                            return <span key={e.index}>
                                                                <li className='nav-item' >
                                                                    <Link to={e.id}
                                                                        onClick={() => setToggle(!Toggle)}
                                                                        className={e.clsname}
                                                                    > {e.name}</Link>
                                                                </li>
                                                            </span>
                                                        })
                                                    }

                                                </div>
                                            </ul>
                                        </> : ''
                                    }
                                </div>
                            </div>
                        </nav>
                    </div>
                    <img src='images/navbar-white-foot-logo.png' />
                </div>



                <div className='menu menu-for-mobile' >
                    <div className="section-navbar">
                        <div className="navbaricontoggle disktop" onClick={() => setToggle(!Toggle)}>
                            {
                                Toggle ? <span ><i class="fa-solid fa-xmark"></i></span> : <span> <i class="fa-solid fa-bars"></i> </span>
                            }
                        </div>

                        <nav className="navbarbutton">
                            <div className="container-fluid">

                                <div className="" id="navbarSupportedContent">

                                    <div className="navbaricontoggle" onClick={() => setToggle(!Toggle)}>
                                        {
                                            Toggle ? <span ><i class="fa-solid fa-xmark"></i></span> : <span> <i class="fa-solid fa-bars"></i> </span>
                                        }
                                    </div>

                                    {
                                        Toggle ? <>
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarlist">
                                                <div className="dt-close-mobile-menu-icon" onClick={() => setToggle(!Toggle)}>

                                                    <i className="fa-solid fa-xmark"></i>
                                                </div>
                                                <li className='nav-item'>
                                                    <img src="images/navbar-logo.png" alt="" className='img-fluid' />
                                                </li>

                                                <div className='main-nav'>

                                                    {
                                                        Navbar.map((e) => {
                                                            return <>
                                                                <li key={e.id} className='nav-item' >
                                                                    <Link to={e.id}
                                                                        onClick={() => setToggle(!Toggle)} className={e.clsname}  > {e.name}</Link>
                                                                </li>
                                                            </>
                                                        })
                                                    }

                                                </div>
                                            </ul>
                                        </> : ''
                                    }
                                </div>
                            </div>
                        </nav>
                    </div>
                    <img src='images/navbar-white-foot-logo.png' style={{ width: '80px' }} />
                </div>
            </div>






        </>
    )
}

export default Header