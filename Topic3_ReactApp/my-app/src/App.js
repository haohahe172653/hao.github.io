// Nhập khẩu component 'Product' để sử dụng
import ProductList from "./components/Product";
import CategoryList from "./components/Category";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const products = [
  { 'id': 1, 'name': 'Macbook Pro M1', 'cat_id': 2 },
  { 'id': 2, 'name': 'Samsung Note 9', 'cat_id': 1 },
  { 'id': 3, 'name': 'IPhone 15 ProMax', 'cat_id': 1 }
]

const categories = [
  { 'id': 1, 'name': 'Smart Phone' },
  { 'id': 2, 'name': 'Laptop' },
  { 'id': 3, 'name': 'PC' }
]

// Component
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to React application</h1>
      </div>
      <Routes>
        <Route path="/" element={<ProductList data={products}/>} />
        <Route path="/category" element={<CategoryList data={categories}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
