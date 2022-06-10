import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Contact from './Components/Home/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Home/Projects';
import Skills from './Components/Home/Services';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/download-resume' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
