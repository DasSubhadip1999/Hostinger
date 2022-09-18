import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
        <div className='footer-menu-container' id='footer-menu-container'>
             <div className='footer-menu-list'>
                <h4>HOSTING</h4>
                <p>Web Hosting</p>
                <p>VPS Hosting</p>
                <p>Minecraft Server Hosting</p>
                <p>CyberPanel Hosting</p>
                <p>Cloud Hosting</p>
                <p>WordPress Hosting</p>
                <p>Email Hosting</p>
                <p>CMS Hosting</p>
                <p>Ecommerce Hosting</p>
                <p>Free Web Hosting</p>
                <p>Online Store</p>
                <p>Website Builder</p>
                <p>Buy Hosting</p>
             </div>
             <div className='footer-menu-list'>
                <h4>DOMAIN</h4>
                <p>Domain Name Search</p>
                <p>Domain Transfer</p>
                <p>Free Domain Name</p>
                <p>XYZ Domain</p>
                <p>Cheap Domains</p>
                <p>Domain Extensions</p>
                <p>WHOIS Lookup</p>
                <p>Free SSL Certificate</p>
             </div>
             <div className='footer-menu-list'>
                <h4>INFORMATION</h4>
                <p>Migrate to Hostinger</p>
                <p>System status</p>
                <p>Affiliate Program</p>
                <p>Payment Medthos</p>
                <p>Rewards</p>
                <p>Reviews</p>
                <p>Pricing</p>
                <p>Sitemap</p>

                <h4>HELP</h4>
                <p>Tutorials</p>
                <p>Knowledge Base</p>
                <p>Report Online Abuse</p>
             </div>
             <div className='footer-menu-list'>
                <h4>COMPANY</h4>
                <p>About Hostinger</p>
                <p>Our Technology</p>
                <p>Roadmap</p>
                <p>Customer Care</p>
                <p>Blog</p>

                <h4>LEGAL</h4>
                <p>Privacy Policy</p>
                <p>Terms of Services</p>
             </div>   
        </div>
        <div className='copyright'>
         <p>© 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains provider.</p>
         <p>Prices are listed without VAT</p>
        </div>
    </footer>
  )
}

export default Footer