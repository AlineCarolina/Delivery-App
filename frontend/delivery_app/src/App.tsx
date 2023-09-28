import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Products from "./pages/Products"
import DeliveryProvider from "./provider/deliveryProvider"
import Checkout from "./pages/Checkout"
import Register from "./pages/Register"
import Order from "./pages/Order"
import DetailsOrder from "./pages/DetailsOrder"

function App() {
  return (
      <DeliveryProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <Products/> } />
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> } />
            <Route path="/customer/checkout" element={ <Checkout/> }/>
            <Route path="/customer/order" element={ <Order/> }/>
            <Route path="/customer/order/:id" element={ <DetailsOrder/> }/>
            <Route path="/seller/orders" element={ <Order/> }/>
            <Route path="/seller/order/:id" element={ <DetailsOrder/> }/>
          </Routes>
        </Router>
      </DeliveryProvider>
  )
}

export default App
