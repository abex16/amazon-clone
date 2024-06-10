import React from 'react'
//import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
//import InstgramIcon from '@mui/icons-material/Instagram'
//import YoutubeIcon from '@mui/icons-material/YouTube'
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          {/* //<FacebookOutlinedIcon />
          //<InstgramIcon />
          //<YoutubeIcon /> */}

        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Amazon books</li>
              <li>Amazon Movies</li>
              <li>Amazon Music</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>
            Service Code
          </p>

        </div>
        <div className='copy-write'>
          &copy; 1997-2024 Amazon, Inc.

        </div>
      </div>
      
    </div>
  )
}

export default Footer
