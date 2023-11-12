import logo from './logo.svg';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  return (
    <div className="App">
    {/* {
       location.pathname === "/" && location.pathname === "/dashboard"  && location.pathname === "/doubtform" ?  <Navbar/> : ""
    } */}
      <Navbar/>  
      <MainRoutes/>
    </div>
  );
}

export default App;
