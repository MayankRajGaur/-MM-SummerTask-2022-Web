import React, { useState } from 'react'
import { FaInstagramSquare , FaFacebookSquare, FaYoutubeSquare} from "react-icons/fa";
import "./navbar.css"
import { GiHamburgerMenu} from "react-icons/gi";
import TextField from '@mui/material/TextField';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
          <div className='logo'>
              {/* 1st logo part */}
              <h2>
                  <span>D</span>aily
                  <span>P</span>ost
              </h2>
          </div>

          {/* 2nd menu part */}
          <div className= {showMediaIcons ? "menu-link mobile-menu-link" :'menu-link'}>
              <ul>
                  <li>
                      <a href='/'>Home</a>
                  </li>
                  <li>
                      <a href='article'>Article</a>
                  </li>
                  <li>
                      <a href='admin'>Admin</a>
                  </li>
                  <li>
                  <TextField id="standard-basic" label="Search" variant="standard" className='searchbar' />
                  </li>
              </ul>

          </div>

          {/* 3rd social media links */}
          <div className='social-media'>
              <ul className='social-media-desktop'>
                  <li><a href='www.Instagram.com' target="_blank">
                      <FaInstagramSquare className='instagram' /></a></li>
                  <li><a href='Facbook.com' target="_blank">
                      <FaFacebookSquare className='facebook' /></a></li>
                  <li><a href='Youtube.com' target="_blank">
                      <FaYoutubeSquare className='youtube' /></a></li>
              </ul>

              {/* hamburg menu start */}

            <div className='hamburger-menu'>
                <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>
            </div>

          </div>
      </nav>

       {/* Main content */}
       {/* <section className='Main-content'>
           <p>Welcome to</p>
           <h1>The Daily Post</h1>

       </section> */}
    </>
  )
}

export default Navbar
