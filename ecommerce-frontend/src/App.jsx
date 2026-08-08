import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout"
import Categories from "./components/categories/Categories";
import ProductDetail from "./components/product/ProductDetail";
import Address from "./pages/Address"
import Cart from "../src/pages/Cart";
import Order from "../src/pages/Order"
import AddressManager from "./pages/AddressManager";
import AddressEdit from "./pages/AddressEdit";
import Ordercheckout from "./pages/OrderCheckout"
import OrderSummary from "./pages/OrderSummary";
import Ordersuccess from "./pages/orderSuccess";
import MyOrders from "./pages/MyOrder";
function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path = "/logout" element={<Logout />} />
      
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
     
         <Route path="/profile" element={token ? <Profile /> : <Login/>} />
         <Route path = "/categories" element = {<Categories/>} />
          <Route path = "/productDetail" element = {<ProductDetail/>} />
          <Route path = "/cart" element = {<Cart/>} />
          <Route path = "/address" element = {<Address/>} />
          <Route path = "/order" element = {<Order/>} />
          
          <Route path="/addressManger" element = {<AddressManager/>}/>
          <Route path="/address/edit" element = {<AddressEdit/>}/>
          <Route path="/order/checkout" element = {<Ordercheckout/>}/>
<Route path="/order/summary" element = {<OrderSummary/>}/>
<Route
  path="/my-orders"
  element={<MyOrders />}
/>
         <Route
  path="/order/success/:id"
  element={<Ordersuccess />}
/>
      </Routes>
    </BrowserRouter>
  );
}
 

export default App
