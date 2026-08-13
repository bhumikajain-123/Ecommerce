import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout"
import Categories from "./components/categories/Categories";
import ProductDetail from "./components/product/ProductDetail";
import FilterProduct from "./components/product/FilterProduct";
import Address from "./pages/Address"
import EditAddress from "./pages/EditAddress";
import Cart from "../src/pages/Cart";
import Order from "../src/pages/Order"
import AddressManager from "./pages/AddressManager";
import AddressEdit from "./pages/AddressEdit";
import Ordercheckout from "./pages/OrderCheckout"
import OrderSummary from "./pages/OrderSummary";
import Ordersuccess from "./pages/orderSuccess";
import MyOrders from "./pages/MyOrder";



// admin-----
import Dashboard from "./pages/admin/Dashboard"
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import User from "./pages/admin/User";
import Userview from "./pages/admin/Userview";
import Useredit from "./pages/admin/Useredit";
import Category from "./pages/admin/category/Category";
import AdminTable from "./components/admin/DataTable";
import CategoryAdd from "./pages/admin/category/add"
import CategoryEdit from "./pages/admin/category/Edit";
import Product from "./pages/admin/product/Product";
import ProductEdit from "./pages/admin/product/Edit";
import ProductAdd from "./pages/admin/product/add";
import AdminOrder from "./pages/admin/order/Order";
import OrderView from "./pages/admin/order/View"

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
          <Route path="/address/edit/:id" element={<EditAddress />}/>
          <Route path="/address/edit/:id" element = {<AddressEdit/>}/>
          <Route path="/order/checkout" element = {<Ordercheckout/>}/>
          <Route path="/admin/table" element = {<AdminTable/>}/>
<Route path="/order/summary" element = {<OrderSummary/>}/>



<Route
  path="/my-orders"
  element={<MyOrders />}
/>
         <Route
  path="/order/success/:id"
  element={<Ordersuccess />}
/>
<Route path="/category/:id" element = {<FilterProduct/>}/>


{/* admin */}

<Route path = "/admin/login" element = {<AdminLogin/>}/>
<Route path = "/admin/users" element = {<User/>}/>


   <Route
                    path="/admin/dashboard"
                    element={
                        <AdminLayout>
                            <Dashboard />
                        </AdminLayout>
                    }
                />


                <Route
    path="/admin/user/view/:id"
    element={
        <AdminLayout>
            <Userview />
        </AdminLayout>
    }
/>

  <Route
    path="/admin/user/edit/:id"
    element={
        <AdminLayout>
            <Useredit />
        </AdminLayout>
    }
/>
 <Route
    path="/admin/categories"
    element={
        <AdminLayout>
            <Category />
        </AdminLayout>
    }
/>

 <Route
    path="/admin/category/add"
    element={
        <AdminLayout>
            <CategoryAdd/>
        </AdminLayout>
    }
/>

 <Route
    path="/admin/category/edit/:id"
    element={
        <AdminLayout>
            <CategoryEdit/>
        </AdminLayout>
    }
/>
 <Route
    path="/admin/products"
    element={
        <AdminLayout>
            <Product/>
        </AdminLayout>
    }
/>

 <Route
    path="/admin/product/add"
    element={
        <AdminLayout>
            <ProductAdd/>
        </AdminLayout>
    }
/>
 <Route
    path="/admin/product/edit/:id"
    element={
        <AdminLayout>
            <ProductEdit/>
        </AdminLayout>
    }
/>

 <Route
    path="/admin/orders"
    element={
        <AdminLayout>
            <AdminOrder/>
        </AdminLayout>
    }
/>
 <Route
    path="/admin/order/view/:id"
    element={
        <AdminLayout>
            <OrderView/>
        </AdminLayout>
    }
/>

      </Routes>
    </BrowserRouter>
  );
}
 

export default App
