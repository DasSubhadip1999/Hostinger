import Header from "./Components/Header"
import Services from "./Components/Services/Services";
import {ResponsiveProvider} from "./Context/ResponsiveContext";
import OurServices from "./Components/OurServicesInclude/OurServices";


function App() {

  return (
    <ResponsiveProvider>
      <div className="container">
          <Header />
          <Services />
          <OurServices />
      </div>
    </ResponsiveProvider>
  )
}

export default App