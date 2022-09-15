import Header from "./Components/Header"
import {ResponsiveProvider} from "./Context/ResponsiveContext";


function App() {
  return (
    <ResponsiveProvider>
      <div className="container">
          <Header />
      </div>
    </ResponsiveProvider>
  )
}

export default App