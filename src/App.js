
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path = '/' element={<Login/>}/>
        <Route exact path = '/' element={<SignUp/>}/>
        <Route exact path = '/' element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
