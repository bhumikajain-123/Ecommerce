import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Categories from "../components/categories/Categories"
import Product from "../components/product/Product"
function Home(){
return(
    <>
    <Navbar/>
   <Categories/>
   <Product/>
    <Footer/>
    </>
);
}
export default Home;