
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LoadCountries from './components/loadCountries';

function App() {
  return (
    <div className="p-3 mb-2 bg-secondary-subtle ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/countries" element={<LoadCountries></LoadCountries>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
