
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login';
import NotFound from './pages/Notfound/NotFound';
import Signin from './pages/Signin/Signin';
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
    <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
