import Header from "./Components/Header"
import Services from "./Components/Services/Services";
import {ResponsiveProvider} from "./Context/ResponsiveContext";


function App() {
  return (
    <ResponsiveProvider>
      <div className="container">
          <Header />
          <Services />
      </div>
    </ResponsiveProvider>
  )
}

export default App