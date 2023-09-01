import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Products from "./pages/Products"
import DeliveryProvider from "./provider/deliveryProvider"

function App() {
  return (
    <>
      <DeliveryProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <Login /> }/>
            <Route path="/customer/products" element={ <Products/> } />
          </Routes>
        </Router>
      </DeliveryProvider>
    </>
  )
}

export default App
