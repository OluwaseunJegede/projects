import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Component/Header/Navbar/Navbar';
import Home from './Pages/Home';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
