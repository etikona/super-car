
import { Route, Routes } from 'react-router-dom';
import AddNewItme from './AddNewItem/AddNewItme';
import './App.css';
import Home from './Home/Home';
import Items from './Home/Items/Items';
import Inventory from './Inventory/Inventory';
import ManageInventories from './ManageInventories/ManageInventories';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login';
import NotFound from './pages/Notfound/NotFound';
import Signin from './pages/Signin/Signin';
import RequiredAuth from './RequiredAuth/RequiredAuth';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';


function App() {
  return (
    <div className="App">
   <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signin" element={<Signin></Signin>}></Route>
    <Route path="/blogs" element={<Blogs></Blogs>}></Route>
    <Route path="/items" element={<Items></Items>}></Route>
    <Route path="/AddnewItem" element={<AddNewItme></AddNewItme>}></Route>
    <Route path="/manageInventories" element={<ManageInventories></ManageInventories>}></Route>
    <Route path="/inventory" element={<Inventory></Inventory>}></Route>
    
    <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
