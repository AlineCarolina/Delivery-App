import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Products from "./pages/Products"
import DeliveryProvider from "./provider/deliveryProvider"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <>
      <DeliveryProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <Login /> }/>
            <Route path="/customer/products" element={ <Products/> } />
            <Route path="customer/checkout" element={ <Checkout/> }/>
          </Routes>
        </Router>
      </DeliveryProvider>
    </>
  )
}

export default App
