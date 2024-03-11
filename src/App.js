import Homepage from "./pages/homepage";
import Layout from "./global/layout";
import Aboutpage from "./pages/aboutUs";
import ContectUs from "./pages/contectUs";
import {Route,Routes} from 'react-router-dom' ;
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/about-us' element={<Aboutpage />} />
          <Route path='/contact-us' element={<ContectUs />} />
        </Routes>
        {/* <Homepage />
        <aboutpage />
        <contectUs /> */}
      </Layout>
    </div>
  )
}

export default App;
