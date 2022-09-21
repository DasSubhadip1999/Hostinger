import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'
import './footer.css'

function Footer() {
   //for translation
   const { t } = useContext(TranslationContext);
  return (
    <footer>
        <div className='footer-menu-container' id='footer-menu-container'>
             <div className='footer-menu-list'>
                <h4>{t("HOSTING")}</h4>
                <p>{t("Web Hosting")}</p>
                <p>{t("VPS Hosting")}</p>
                <p>{t("Minecraft Server Hosting")}</p>
                <p>{t("CyberPanel Hosting")}</p>
                <p>{t("Cloud Hosting")}</p>
                <p>{t("WordPress Hosting")}</p>
                <p>{t("Email Hosting")}</p>
                <p>{t("CMS Hosting")}</p>
                <p>{t("Ecommerce Hosting")}</p>
                <p>{t("Free Web Hosting")}</p>
                <p>{t("Online Store")}</p>
                <p>{t("Website Builder")}</p>
                <p>{t("Buy Hosting")}</p>
             </div>
             <div className='footer-menu-list'>
                <h4>{t("DOMAIN")}</h4>
                <p>{t("Domain Name Search")}</p>
                <p>{t("Domain Transfer")}</p>
                <p>{t("Free Domain Name")}</p>
                <p>{t("XYZ Domain")}</p>
                <p>{t("Cheap Domains")}</p>
                <p>{t("Domain Extensions")}</p>
                <p>{t("WHOIS Lookup")}</p>
                <p>{t("Free SSL Certificate")}</p>
             </div>
             <div className='footer-menu-list'>
                <h4>{t("INFORMATION")}</h4>
                <p>{t("Migrate to Hostinger")}</p>
                <p>{t("System status")}</p>
                <p>{t("Affiliate Program")}</p>
                <p>{t("Payment Medthos")}</p>
                <p>{t("Rewards")}</p>
                <p>{t("Reviews")}</p>
                <p>{t("Pricing")}</p>
                <p>{t("Sitemap")}</p>

                <h4>{t("HELP")}</h4>
                <p>{t("Tutorials")}</p>
                <p>{t("Knowledge Base")}</p>
                <p>{t("Report Online Abuse")}</p>
             </div>
             <div className='footer-menu-list'>
                <h4>{t("COMPANY")}</h4>
                <p>{t("About Hostinger")}</p>
                <p>{t("Our Technology")}</p>
                <p>{t("Roadmap")}</p>
                <p>{t("Customer Care")}</p>
                <p>{t("Blog")}</p>

                <h4>{t("LEGAL")}</h4>
                <p>{t("Privacy Policy")}</p>
                <p>{t("Terms of Services")}</p>
             </div>   
        </div>
        <div className='copyright'>
         <p>{t("© 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains provider.")}</p>
         <p>{t("Prices are listed without VAT")}</p>
        </div>
    </footer>
  )
}

export default Footer