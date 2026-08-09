import "./Categories.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Categories() {
  const navigate = useNavigate();
// const [product,setProduct] = useState([]);
const [categories,setCategory] = useState([]);
useEffect(()=>{
fetch('http://localhost:5000/category')
.then((res)=>res.json())
.then((data)=>{
  setCategory(data)
  console.log(data);
});


},[])








  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Shop by Categories</h2>

      <div className="row">
        {categories.map((category) => (
          <div className="col-md-3 col-sm-6 mb-4" key={category._id}>
            <div className="category-card text-center" onClick={() => navigate(`/category/${category._id}`)}>
              <h5>{category.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;