import Header from "./Components/Header"
import Services from "./Components/Services/Services";
import {ResponsiveProvider} from "./Context/ResponsiveContext";
import OurServices from "./Components/OurServicesInclude/OurServices";
import DomainName from "./Components/DomainName/DomainName";
import VideoCards from "./Components/VideoCards/VideoCards";


function App() {

  return (
    <ResponsiveProvider>
      <div className="container">
          <Header />
          <Services />
          <OurServices />
          <DomainName />
          <VideoCards />
      </div>
    </ResponsiveProvider>
  )
}

export default App