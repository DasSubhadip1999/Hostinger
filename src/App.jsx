import Header from "./Components/Header"
import Services from "./Components/Services/Services";
import {ResponsiveProvider} from "./Context/ResponsiveContext";
import {TranslationProvider} from './Context/TranslationContext'
import OurServices from "./Components/OurServicesInclude/OurServices";
import DomainName from "./Components/DomainName/DomainName";
import VideoCards from "./Components/VideoCards/VideoCards";
import MoneyBack from "./Components/MoneyBack/MoneyBack";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/Contact/ContactUs";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from "./Components/Pages/LoginPage";


function App() {

  return (
    <TranslationProvider>
      <ResponsiveProvider>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element ={
                <>
                  <Header />
                  <Services />
                  <OurServices />
                  <DomainName />
                  <VideoCards />
                  <MoneyBack />
                  <ContactUs />
                  <Footer />
                </>
              }>
              </Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
          </div>
        </Router>
      </ResponsiveProvider>
    </TranslationProvider>
  )
}

export default App