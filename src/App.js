import About from "./Componenets/about";
import Blog from "./Componenets/blog";
import Feature from "./Componenets/feature";
import Hero from "./Componenets/hero";
import Nav from "./Componenets/nav";
import Speakers from "./Componenets/speakers";
import Join from './Componenets/join';
import Clint from "./Componenets/clint";
import Number from "./Componenets/number";
import Clock from "./Componenets/clock";
import Rout from "./Componenets/rout";
import Contact from "./Componenets/contact";
import { Routes,Route } from "react-router-dom"; 
import Route1 from "./Componenets/route1";
import Route2 from "./Componenets/route2";
import Route3 from "./Componenets/route3";
import Route4 from "./Componenets/route4";
import Footer from "./Componenets/footer";
import Video from "./Componenets/video";

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Clock/>
      <About/>
      <Feature/>
      <Speakers/>
      <Number/>
      <Rout/>
      <Routes>
        <Route path='route1' element={<Route1/>} />
        <Route path='route2' element={<Route2/>} />
        <Route path='route3' element={<Route3/>} />
        <Route path='route4' element={<Route4/>} />
      </Routes>
      <Video/>
      <Join/>
      <Clint/>
      <Contact/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
