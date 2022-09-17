import Header from "./Components/Header"
import Services from "./Components/Services/Services";
import {ResponsiveProvider} from "./Context/ResponsiveContext";
import OurServices from "./Components/OurServicesInclude/OurServices";
import DomainName from "./Components/DomainName/DomainName";
import VideoCards from "./Components/VideoCards/VideoCards";
import MoneyBack from "./Components/MoneyBack/MoneyBack";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/Contact/ContactUs";


function App() {

  return (
    <ResponsiveProvider>
      <div className="container">
          <Header />
          <Services />
          <OurServices />
          <DomainName />
          <VideoCards />
          <MoneyBack />
          <ContactUs />
          <Footer />
      </div>
    </ResponsiveProvider>
  )
}

export default App